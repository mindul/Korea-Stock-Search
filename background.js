chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'searchWord') {
    const url = `https://kr.investing.com/search/?q=${encodeURIComponent(message.word)}`;
    chrome.windows.create({ url, type: 'popup', width: 1070, height: 1200 });
  }
});
