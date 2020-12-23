let storage = window.localStorage

const setItem = (key, value) => {
    storage.setItem(key, value)
}

const getItem = (key) => {
    return storage.getItem(key)
}

const removeItem = key => {
    return storage.removeItem(key)
}

export { setItem, getItem, removeItem }