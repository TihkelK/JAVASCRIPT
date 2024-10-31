// // Temperatuur
let temp = 16;
if (temp >= 25){
    console.log("Väga kuum ilm!")
}
if (temp > 15 && temp < 25){
    console.log("Mõnus temperatuur")
}
if (temp <= 15){
    console.log("Jahe ilm!")
}

// Kasutajanime kontroll
let username = "admin";
if (username == "admin"){
    console.log("Tere, administraator!")
}
if (username != "admin"){
    console.log("Tere, külaline!")
}

// Ürituse piletite hind
let pilet = "sooduspilet";
let vanus = 18;
if (pilet == "täispilet"){
    if (vanus < 18){
        console.log("Pileti hind: 10€")
    }
    if (vanus >= 18 && vanus <= 64){
        console.log("Pileti hind: 20€")
    }
    if (vanus > 64){
        console.log("Pileti hind: 15€")
    }
}
if (pilet == "sooduspilet"){
    if (vanus < 18){
        console.log("Pileti hind: 8€")
    }
    if (vanus >= 18 && vanus <= 64){
        console.log("Pileti hind: 15€")
    }
    if (vanus == 65){
        console.log("Pileti hind: 8€")
    }
    if (vanus > 65){
        console.log("Pileti hind: 8€")
    }
}