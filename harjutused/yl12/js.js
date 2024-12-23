var ul = document.querySelector('ul')
var p = document.querySelector('p')


const ostukorv = {
    tooted: [
        { nimi:'Piim', hind:3.60, kogus:2 },
        { nimi:'Leib', hind:2.00, kogus:1 },
        { nimi:'Munad', hind:1.50, kogus:6 },
        { nimi:'Juust', hind:4.20, kogus:1 },
        { nimi:'Tomatid', hind:2.30, kogus:3 },
    ],

    kuva: function() {
        this.tooted.forEach((toode) => {
            console.log(`${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}`);
        });
    },

    lisa: function(nimi, hind, kogus) {
        this.tooted.push({nimi, hind, kogus});
        console.log(`Toode ${nimi} on lisatud ostukorvi.`);
        
    },
    
    summa: function() {
        return this.tooted.reduce((summa, toode) => summa + (toode.hind * toode.kogus), 0).toFixed(2);
    }
};
ostukorv.kuva();
ostukorv.lisa('Salat', 3.70, 2);

console.log('Ostukorvi kogu summa: ', ostukorv.summa());

ostukorv.tooted.forEach(element => {
    ul.innerHTML += `<li>Toode: ${element.nimi}, Hind: ${element.hind}, Kogus: ${element.kogus}</li>`;
});

p.innerHTML += `<p>${ostukorv.summa()} on kogusumma</p>`