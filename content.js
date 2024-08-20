function searchSelectedWord() {
  const selectedText = window.getSelection().toString().trim();
  if (selectedText) {
    chrome.runtime.sendMessage({ type: 'searchWord', word: selectedText });
  }
}

document.addEventListener('mouseup', function() {
  setTimeout(function() {
    searchSelectedWord();
  }, 10);
});
