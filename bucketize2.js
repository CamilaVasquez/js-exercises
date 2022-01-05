


function bucketize(input, n) {

    var words = input.split(' ');
    var buckets = [];
    var bucket = []
    var phrase = '';

    if (input !== '' && words.length > 1) {

        for(let i = 0; words.length >= i; i++) {

            phrase = words[i];
            if(phrase.length < n) {
                bucket += phrase;
            }

        }

        // words.shift()

    }
    return []

}

bucketize('', 3)
bucketize('she sells sea shells by the sea', 2)