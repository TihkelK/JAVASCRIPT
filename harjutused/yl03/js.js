const soidukaugus = 10; // km
const kiirus = 2; // km/h
const asdasd = kiirus * soidukaugus;
console.log(asdasd);

const postitused = 137;
const ppost = (postitused / 10)
const post = Math.round(ppost)
const jarel = (postitused - (post * 10))
console.log("Lehekülgi vaja:" + post + ", Viimasel lehel:" + -jarel)

const svoimsus = 400;
const ehind = 9.69;
const vtarbimine = svoimsus / 1000;
const tookulu = vtarbimine * ehind;
console.log("Tunni jooksul: " + (tookulu * 60) + "€")
