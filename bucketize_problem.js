function bucketize(string, n) {
    var eachWord = string.split(' ');
    var buckets = [];
    var phrase = '';

    for(let i = 0; i < eachWord.length + 1; i++) {
        if (eachWord.length === i) {
            buckets.push(phrase.trim());
            break;
        }
        if(phrase.length + eachWord[i].length <= n) {
            phrase += eachWord[i] + ' ';
        } else {
            buckets.push(phrase.trim());
            phrase = eachWord[i] + ' ';
        }
    }

    return buckets;
}

// iterate through eachWord
// if phrase length is less than n
// add this word + ' ' to phrase
// otherwise
// push phrase into buckets
// phrase = this word + ' '
//

console.log(bucketize("she sells sea shells by the sea", 10));
// ➞ ["she sells", "sea shells", "by the sea"]

console.log(bucketize("the mouse jumped over the cheese", 7));
// ➞ ["the", "mouse", "jumped", "over", "the", "cheese"]