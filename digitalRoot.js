// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digitalRoot(n) {

    while (n.toString().split('').length != 1) {
        let sum = n.toString().split('').map((item) => {
            return parseInt(item, 10);
        }).reduce((pre, cur) => {
            return pre + cur;
        })
        n += sum;
     console.log(n);

    }
   

}



digitalRoot(12334);