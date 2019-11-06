/*global chrome*/
const getAllWindowTabs = (callback) => {
    chrome.tabs.query({ currentWindow: true }, callback)
}

const storeData = (obj, callback) => {
    chrome.storage.sync.set(obj, callback)
}

const retrieveData = (key, callback) => {
    chrome.storage.sync.get(key, callback)
}

export { getAllWindowTabs, storeData, retrieveData }