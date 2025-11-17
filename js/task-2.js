function formatMessage(message, maxLength) {
    let sup = message.length;
    if (sup > maxLength) {
        let pure = message.slice(0, maxLength);
        return pure + "...";
    } else {
        return message;
    }
}
