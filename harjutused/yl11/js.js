// Nimed
const nimed = ["mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas", "jaak järve", "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas", "Madis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"];

const sNimed = nimed.map(nimi => {
    return nimi
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
});
console.log(sNimed);

const gMeilid = sNimed.map(nimi => {
    const lastName = nimi.split(" ")[1].toLowerCase();
    return `${lastName}@metshein.com`;
});
console.log(gMeilid);

function otsiNimi(massiv, nimi) {
    const leitudNimed = massiv.filter(n => n.toLowerCase().includes(nimi.toLowerCase()));
    return leitudNimed.length ? leitudNimed : "Nime ei leitud!";
}
console.log(otsiNimi(sNimed, "Kadi"));

console.log("---")
// Sünniaeg ja vanus
const inimesteAndmed = [
    { nimi: "Mari Maasikas", isikukood: "38705123568" },
    { nimi: "Jaan Jõesaar", isikukood: "49811234567" },
    { nimi: "Kristiina Kukk", isikukood: "39203029876" },
    { nimi: "Margus Mustikas", isikukood: "49807010346" },
    { nimi: "Jaak Järve", isikukood: "39504234985" },
    { nimi: "Kadi Kask", isikukood: "39811136789" },
];

function SjaV(isikukood) {
    const aasta = parseInt(isikukood.slice(1, 3), 10) + (["1", "2"].includes(isikukood[0]) ? 1800 : ["3", "4"].includes(isikukood[0]) ? 1900 : 2000);
    const kuu = parseInt(isikukood.slice(3, 5), 10) - 1;
    const paev = parseInt(isikukood.slice(5, 7), 10);
    const synniaeg = new Date(aasta, kuu, paev);
    const vanus = new Date().getFullYear() - synniaeg.getFullYear();
    return { synniaeg, vanus };
}

inimesteAndmed.forEach(inimene => {
    const { synniaeg, vanus } = SjaV(inimene.isikukood);
    console.log(`${inimene.nimi}: Sünniaeg: ${synniaeg.toLocaleDateString()}, Vanus: ${vanus}`);
});

console.log("---")
// Kaugushüpe
const opilased = [
    { nimi: "Anna", tulemused: [4.5, 4.8, 4.6] },
    { nimi: "Mart", tulemused: [5.2, 5.1, 5.4] },
    { nimi: "Kati", tulemused: [4.9, 5.0, 4.7] },
    { nimi: "Jaan", tulemused: [4.3, 4.6, 4.4] },
    { nimi: "Liis", tulemused: [5.0, 5.2, 5.1] },
    { nimi: "Peeter", tulemused: [5.5, 5.3, 5.4] },
    { nimi: "Eva", tulemused: [4.8, 4.9, 4.7] },
    { nimi: "Marten", tulemused: [4.7, 4.6, 4.8] },
    { nimi: "Kairi", tulemused: [5.1, 5.3, 5.0] },
    { nimi: "Rasmus", tulemused: [4.4, 4.5, 4.3] },
];

opilased.forEach(opilane => {
    const pTulemus = Math.max(...opilane.tulemused);
    const kTulemus = (opilane.tulemused.reduce((sum, val) => sum + val, 0) / opilane.tulemused.length).toFixed(2);
    console.log(`${opilane.nimi}, Parim tulemus, ${pTulemus}, Keskmine tulemus, ${kTulemus}`);
});
