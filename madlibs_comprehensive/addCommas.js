function addCommas(input) {
    let inputStr = input.toString()
    let neg = ""
    if (inputStr[0] === '-') {
        inputStr = inputStr.slice(1);
        neg = "-"
    }
    
    let probeIdx;
    let decimalPart = "";
    if (inputStr.includes('.')) {
        probeIdx = inputStr.indexOf('.');
        decimalPart = inputStr.slice(probeIdx);
    } else {
        probeIdx = inputStr.length;
    }
    
    let finalStr = "";
    for(let i = probeIdx-1; i >= 0; i--) {
        finalStr = inputStr[i] + finalStr;
        if ((probeIdx - i) %3 === 0) {
            finalStr = "," + finalStr;
        }
    }
    return neg + returnStr + decimalPart;
}

module.exports = addCommas;
