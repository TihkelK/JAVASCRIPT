// Mündid
let raha = [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20];
let myndid = [];
let i = 0;
while (i < raha.length){
    if (raha[i] <= 2){
        myndid.push(raha[i]);
    }
    i++
}
let summa = myndid.reduce((summa, mynt) => summa + mynt, 0);
console.log(myndid)
console.log(summa)
