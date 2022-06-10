export const getItem = (key) => {
    let data = localStorage.getItem(key);
    if (data) {
        return JSON.parse(data);
    } else {
        return undefined;
    }
};

export const setItem = (key, data) => {
    return localStorage.setItem(key, JSON.stringify(data));
};

export const removeItem = (key) => {
    return localStorage.removeItem(key);;
}
