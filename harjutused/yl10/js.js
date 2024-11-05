// Toote objekt



console.log("---")
// Ostukorv
const ostukorv = {
tooted: [
    { nimi:'Piim', hind:3.60, kogus:2 },
    { nimi:'Leib', hind:2.00, kogus:1 },
    { nimi:'Munad', hind:1.50, kogus:6 },
    { nimi:'Juust', hind:4.20, kogus:1 },
    { nimi:'Tomatid', hind:2.30, kogus:3 },
]};
function kuvasisu(t){
    t.forEach((toode)) => {
        // console.log("Nimi: " + toode.nimi + "Hind: " + toode.hind + "Kogus: " + toode.kogus)
        console.log(toode)
    }
}
kuvasisu(tooted);