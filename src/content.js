(function() {
  // Function to detect the "Add to Chrome" button and replace it with "Add to Firefox"
  function replaceAddToChromeButton() {
    const addToChromeButton = document.querySelector('.webstore-test-button-label');
    if (addToChromeButton) {
      const addToFirefoxButton = document.createElement('button');
      addToFirefoxButton.textContent = 'Add to Firefox';
      addToFirefoxButton.style.backgroundColor = '#4a90e2';
      addToFirefoxButton.style.color = '#fff';
      addToFirefoxButton.style.border = 'none';
      addToFirefoxButton.style.padding = '10px 20px';
      addToFirefoxButton.style.cursor = 'pointer';
      addToFirefoxButton.addEventListener('click', downloadExtensionAsZip);
      addToChromeButton.parentNode.replaceChild(addToFirefoxButton, addToChromeButton);
    }
  }

  // Function to trigger FoxyBridge’s download function
  function downloadExtensionAsZip() {
    // Assuming FoxyBridge has a function called downloadAsZip
    if (typeof FoxyBridge !== 'undefined' && typeof FoxyBridge.downloadAsZip === 'function') {
      FoxyBridge.downloadAsZip();
    } else {
      console.error('FoxyBridge download function not found.');
    }
  }

  // Export the function to be used in the content script
  window.replaceAddToChromeButton = replaceAddToChromeButton;

  // Run the function to replace the button
  replaceAddToChromeButton();
})();
