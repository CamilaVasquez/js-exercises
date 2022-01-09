// MAIN FUNCTION(S)
function bucketize(input, n) {

    var words = input.split(' ');
    var buckets = [];
    var phrase = '';

    var currWord = words[0];


    if(currWord.length <= n  && phrase.length === 0) {
      phrase += words.shift() + ' ';
    } else {
      return [];
    }

    while(phrase.length > 0) {
      if(phrase.length + currWord.length <= n) {
        phrase += words.shift() + ' ';
      } else {
        bucket.push(phrase.trim());
      }
    }

    if(words.length > 0) {
      return [];
    } else {
      return buckets;
    }
}

// TEST CODE
var test1 = bucketize('she sells sea shells by the sea', 10);
// var test2 = bucketize('she sells sea shells by the sea', 2);

console.log(test1);
// console.log(test2);