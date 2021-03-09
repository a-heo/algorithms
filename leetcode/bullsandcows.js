/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    //make the secret and guess into arrays
    //assign var for bulls 
    //assign var for cows
    //assign var for secret object
    //assign var for guess object
    //iterate through array
    //if element in index of array matches for both
    //bulls go up
    //else if secret object has guess object or guess object has secret object
      //cows++ 
      //else
      //element of secret and guess will be stored as true in each object
      
   //return "varAvarB"
    var bulls = 0;
    var cows = 0;
    var secrets = {};
    var guesses = {};
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            bulls++;
        } else {
            secrets[secret[i]] = (secrets[secret[i]] || 0) + 1; 
            guesses[guess[i]] = (guesses[guess[i]] || 0) + 1;
        }
    }
      for (let key in secrets) {
          if (secrets[key] === guesses[key]) {
              cows += secrets[key]
          }
  
      }
      return `${bulls}A${cows}B`;
  };
  
  /*
  [ 1, 8, 0, 7]
  [ 7, 8, 1 , 0]
  
  bulls = 1
  cows= 0
  
  { 1: false, 0: true}
  {7: true, 1: false}
  [1] != [7]
  [8] = [8]
  [0] != [1]
  [7] != [0]
  */