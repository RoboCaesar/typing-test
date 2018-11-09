

convertStringToArray = (str) => {
    let emptyArr = [];
    for (let i = 0; i < str.length; i++) {
        emptyArr.push(<span key={i}>{str[i]}</span>);
        if (i == str.length - 1) {
            return emptyArr;
        }
    }
}