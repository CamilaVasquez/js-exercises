// MAIN FUNCTION(S)
function bucketize(input, n) {

    var words = input.split(' ');
    var buckets = [];
    var phrase = '';

    var currWord = words[0];

    // if currWord length is less than n and if phrase is empty
    if(phrase.length === 0 && currWord.length <= n) {
      // add currWord to phrase
      // remove currWord from words array
    // otherwise
      // return empty array
    }

    // if phrase length is greater than 0
      // if the length of phrase + the length of currWord is less than or equal to n
        // add currWord to phrase
        // remove currWord from words array
      // otherwise
        // phrase is full, add phrase to bucket
        // phrase now equals currWord

    // if input has any words left in it
      // return an empty array
    // otherwise
      // return buckets

}

// TEST CODE
bucketize('', 3)
bucketize('she sells sea shells by the sea', 2)