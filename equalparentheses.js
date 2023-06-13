var isValid = function (inputString) {
    let expectedBrackets = [];

    
    for (let letter = 0; letter < inputString.length; letter++) {
        switch (inputString[letter]) {
            
            case '{': {
                expectedBrackets.push('}');
                break;
            }
            case '[': {
                expectedBrackets.push(']');
                break;
            }
            case '(': {
                expectedBrackets.push(')');
                break;
            }
            default: {
                if (expectedBrackets.pop() !== inputString[letter]) {
                    return false;
                }
            }
        }
    }

    return !expectedBrackets.length;
};