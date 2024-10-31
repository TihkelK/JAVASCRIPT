// Positiivne või negatiivne
let number = -3;
let tyyp;
switch (true){
    case (number > 0):
        tyyp = "Positiivne";
        break;
    case (number == 0):
        tyyp = "Null";
        break;
    case (number < 0):
        tyyp = "Negatiivne";
        break;
    default:
        tyyp = "katki";
}
console.log("Number on " + tyyp);
// Restoran
let bron = 3;
let lause;
switch (true){
    case (bron == 1 || bron == 2):
        lause = "Valige laud kahele inimesele.";
        break;
    case (bron == 3 || bron == 4):
        lause = "Valige laud neljale inimesele.";
        break;
    case (bron == 5 || bron == 6):
        lause = "Valige laud kuuele inimesele.";
        break;
    default:
        lause = "Valige suur laud";
}
console.log(lause);