var dataKey = ["dumb", "ways", "the", "best"];
var word = 'dumbbest';

//(dataKey,word);

function check(A, B) {
    for (i = 0; i < A.length; i++) {
        var res = B.split(A[i]);
        console.log("inisiarray "+ A[i])
        if (res.length == 1) {
            console.log("false");
        } else {
            console.log("true");
        }

    }
}

check(dataKey,word)
