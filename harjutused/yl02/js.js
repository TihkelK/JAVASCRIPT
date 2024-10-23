const h = 2;
const m = 38;
const s = 59;
console.log(h + ":" + m + ":" + s + "PM");

console.log("asdasdasd'lenin'asasdasd")

const en = "Jüri";
const pn = "Jurukas";
console.log(`${en} ${pn} nimetähed on ${en[0]}.${pn[0]}`)

const nimi = "Jurukas, Jüri";
const koma = nimi.indexOf(",");
console.log(koma)
const asd = (nimi.substring(0, koma)).toUpperCase()
console.log(asd.length)

let epost = "karrolk@netlog.com";
const esplit = epost.split("@")
console.log(`${esplit[0]}@gmail.com`)

const andmerida = ("1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175")
const asplit = andmerida.split(",")
const username = asplit[3].split("@")
console.log(`"${asplit[5]}" ja "${username[0]}"`)