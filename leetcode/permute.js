//not solved

var permute = function(nums) {
    var answers = [];
    var permutations = function(current, available) { // [], [1, 2, 3]
        if (available.length === 0) {
            answers.push(current.slice());
            return;
        }
        for (var i = 0; i < available.length; i++) { //[1, 2, 3]
            current.push(available[i]); //
            var newAvail = available.slice(0, i).concat(available.slice(i+1));
            permutations(current.slice(), newAvail)
            current.pop(); //
        }
    }
    permutations([], nums); //
    return answers;
};