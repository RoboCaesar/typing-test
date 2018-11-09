const showPartOfText = (userStringLen, highlightedText) => {
    if (highlightedText.length < 2) return ['loading...'];
    let cursor = userStringLen;
    let startPoint = parseInt((cursor / 100), 10);
    if (startPoint * 100 < 100) {
        startPoint = 0;
    } else {
        startPoint = startPoint - 1
    }
    return highlightedText.slice(startPoint * 100, startPoint * 100 + 300);
};

export default showPartOfText;