export const shortString = (text, limit = 15) => {
    return text.slice(0, limit) + (text.length > limit ? "..." : "");
};

export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const randomNumber = () => {
    const rating = (Math.random() * 5).toFixed(1);
    return rating <= 1 ? 1.4 : rating >= 5 ? 4.5 : rating;
};

export const createToken = () => {
    const rand = () => Math.random().toString(36).substr(2);
    return rand() + rand();
}