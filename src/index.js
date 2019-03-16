// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
   var coins = {}, 
      H, Q, D, N, P;
  
  if (currency > 10000) {return {error: "You are rich, my friend! We don't have so much coins for exchange"}}; 
    if (currency > 0) { 
      H = Math.floor (currency / 50);
      if (H > 0) coins ['H'] = H;
      console.log(H);
      currency = currency % 50;
      console.log(currency);
        if (currency > 0) {
          Q = Math.floor (currency / 25);
          if (Q > 0) coins ['Q'] = Q;
          console.log(Q);
          currency = currency % 25;
          console.log(currency);
            if (currency > 0) {
              D = Math.floor (currency / 10);
              if (D > 0) coins ['D'] = D;
              console.log(D);
              currency = currency % 10;
              console.log(currency);
                if (currency > 0) {
                  N = Math.floor (currency / 5);
                  if (N > 0) coins ['N'] = N;
                  console.log(N);
                  currency = currency % 5;
                  console.log(currency);
                    if (currency > 0) {
                      P = Math.floor (currency / 1);
                      if (P > 0) coins ['P'] = P;
                      console.log(P);
                    }
                }
            }
        }
    }
  
  return coins;
}

