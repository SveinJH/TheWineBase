const volumeFormatter = volume => {
    if (volume >= 1) {
        return `${volume} L`;
    } else {
        return `${volume * 100} cl`;
    }
};

export { volumeFormatter };
