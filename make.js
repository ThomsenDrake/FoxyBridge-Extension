#!/usr/bin/env node
"use strict";
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const srcDir = path.join(__dirname, 'src');
const distDir = path.join(__dirname, 'dist');
const manifestPath = path.join(srcDir, 'manifest.json');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// Read manifest to get extension name and version
let manifest;
try {
    manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
} catch (error) {
    console.error("Error reading manifest.json:", error);
    process.exit(1);
}
const extName = manifest.name || 'extension';
const extVersion = manifest.version || '0.0.0';
const outputFileName = 'FoxyBridge-Extension.xpi';
const outputFile = path.join(distDir, outputFileName);

// Create the zip archive
const output = fs.createWriteStream(outputFile);
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', function() {
    console.log(`${archive.pointer()} total bytes`);
    console.log(`Firefox extension packaged as ${outputFileName}`);
});

archive.on('warning', function(err) {
    if (err.code === 'ENOENT') {
        console.warn(err);
    } else {
        throw err;
    }
});

archive.on('error', function(err) {
    throw err;
});

archive.pipe(output);
archive.directory(srcDir, false);
archive.finalize();
