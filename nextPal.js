

// For Javascript
// nextPal(11) == 22

// nextPal(188) == 191

// nextPal(191) == 202

// nextPal(2541) == 2552

function nextPal(val) {
  
    while(val!=0){

        val++;
        let arr = val.toString().split('').reverse().map(e => Number(e));
        let splitedVal = val.toString().split('').map(e => Number(e));

       console.log(val);
    }



}

nextPal(188)
