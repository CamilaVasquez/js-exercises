// https://edabit.com/challenge/Q7foiyejfJG6pqqws

function bucketize(string, n) {
    var eachWord = string.split(' ');
    var buckets = [];
    var phrase = '';

    if (string !== '' && eachWord.length > 1) {
        for (let i = 0; i < eachWord.length + 1; i++) {
            if (eachWord.length === i) {
                buckets.push(phrase.trim());
                break;
            }
            if (phrase.length < n && phrase.length > 0)
                if (phrase.length + eachWord[i].length <= n) {
                    phrase += eachWord[i] + ' ';
                } else {
                    buckets.push(phrase.trim());
                    phrase = eachWord[i] + ' ';
                }
            }
        return buckets;
        }
    return [];
}

console.log(bucketize("she sells sea shells by the sea", 2));
// ➞ ["she sells", "sea shells", "by the sea"]

console.log(bucketize("the mouse jumped over the cheese", 7));
// ➞ ["the", "mouse", "jumped", "over", "the", "cheese"]