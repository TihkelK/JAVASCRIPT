// Erinevad funktsioonid
function nimi(){
    console.log("Tihkel");
}
const nimi2 = () => {
    console.log("Tihkel");
}
nimi();
nimi2();

console.log("---");
// Argumendiga funktsioon
function kuupaevEesti(kp){
    let [p, k, a] = kp.split(".");
    let kuud = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];

    console.log(p + ". " + kuud[parseInt(k) - 1] + " 20" + a);
}
kuupaevEesti("5.11.24");

console.log("---");
// Teadmata hulk
function taisarvud(aarvud){
    let taisarvud = aarvud.split(" ").map(Number);
    let summa = taisarvud.reduce((summa, arv) => summa + arv, 0);
    let keskmine = summa / taisarvud.length;
    console.log("Summa: " + summa);
    console.log("Keskmine: " + keskmine);
}
taisarvud("11 22 33");

console.log("---");
// Salajane sõnum
const salajaneSonum = (ssonum) => {
    let sonum = ssonum;
    const thaalikud = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let salajane = ssonum.replace(/[aeiouAEIOU]/g, '*');
    console.log(salajane);
}
salajaneSonum("Test sonum!");

console.log("---");
// Unikaalsed nimed

const leiaUnikaalsedNimed = (nnimed) => {
    let nimed = [...new Set(nnimed)];
    console.log(nimed);
}
leiaUnikaalsedNimed(["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"]);
