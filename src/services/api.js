/*global chrome*/
const getAllWindowTabs = (callback) => {
    chrome.tabs.query({ currentWindow: true }, callback)
}

const storeValue = (obj, callback) => {
    chrome.storage.sync.set(obj, callback)
}

const getValue = (key, callback) => {
    chrome.storage.sync.get(key, callback)
}

export { getAllWindowTabs, storeValue, getValue }