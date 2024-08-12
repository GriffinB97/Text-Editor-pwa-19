const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Store the event so it can be triggered later.
  window.deferredPrompt = event;

  // Remove the hidden class from the button.
  butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  // Show the prompt.
  promptEvent.prompt();

  // Wait for the user to respond to the prompt.
  const result = await promptEvent.userChoice;

  console.log('User choice:', result);

  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;

  // Hide the install button.
  butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  // Clear the deferred prompt.
  window.deferredPrompt = null;
});
