let computer;
let motcomputer;
let player;
let loop = true;
let motplayer;
let result;

function aleatory (min,max) {
    return Math.random()*(max-min)+min;
}

while(loop) {
    computer = Math.floor(aleatory(1,4));
    
    if (computer == 1) {
        motcomputer = "piedra";
    }
    
    if (computer == 2) {
        motcomputer = "papel";
    }
    
    if (computer == 3) {
        motcomputer = "tijera";
    }

    player = parseInt(prompt ("Seleccione un movimieto para jugar \n 1.Piedra \n 2.Papel \n 3.Tijera"));

    if (player == 1) {
        motplayer = "piedra";
    }
    
    if (player == 2) {
        motplayer = "papel";
    }
    
    if (player == 3) {
        motplayer = "tijera";
    }
    
    console.log ("Usted saca " + motplayer);
    console.log ("Su contrincante saca " + motcomputer);
    
    if (motcomputer == "piedra" && motplayer == "piedra") {
        result = "HAY EMPRATE"
    }
    
    if (motcomputer == "piedra" && motplayer == "papel") {
        result = "USTED GANA"
    }
    
    if (motcomputer == "piedra" && motplayer == "tijera") {
        result = "SU CONTRINCANTE GANA"
    }
    
    if (motcomputer == "papel" && motplayer == "papel") {
        result = "HAY EMPRATE"
    }
    
    if (motcomputer == "papel" && motplayer == "piedra") {
        result = "SU CONTRINCANTE GANA"
    }
    
    if (motcomputer == "papel" && motplayer == "tijera") {
        result = "USTED GANA"
    }
    
    if (motcomputer == "tijera" && motplayer == "tijera") {
        result = "HAY EMPRATE"
    }
    
    if (motcomputer == "tijera" && motplayer == "papel") {
        result = "SU CONTRINCANTE GANA"
    }
    
    if (motcomputer == "tijera" && motplayer == "piedra") {
        result = "USTED GANA"
    }
    
    console.log (result);
    console.log ("\n")

    loop = confirm("¿Quieres jugar de nuevo?")
}