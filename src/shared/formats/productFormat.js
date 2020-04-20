const volumeFormatter = (volume) => {
    if (volume >= 1) {
        return `${volume} L`;
    } else {
        return `${volume * 100} cl`;
    }
};

const priceFormatter = (price) => {
    return price.toFixed(2);
};

export { volumeFormatter, priceFormatter };
