// MAIN FUNCTION(S)
function something(str) {
    let dictOfWords = {
        e: "@",
        n: "=",
        r: "%",
        t: "#"
    };

    let result = "";
    let count = 0;
    let lowerCase = str.toLowerCase();

    while (count < str.length) {
        result += dictOfWords[lowerCase[count]] || lowerCase[count];
        count++;
    }
    return result;
}

// ASSERTION TEST(S)
function assertEquals(actual, expected, testName) {
    if (actual === expected) {
        console.log('passed');
    } else {
        console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
    }
}

// TEST CODE
let input = "Encrypt me!";
let actual = something(input);
console.log(actual);
let expected = "@=c%yp# m@!";
assertEquals(actual, expected, "change string");