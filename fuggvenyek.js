udvozles()

export function udvozles(){
    console.log("aaaa");
}

// változók deklarálása 
// var, const, let, using
// hatókört jelentenek - hol láthatóak az egyes változók
// var a régi
var szam = "0";
let nev = ":("
console.log(szam + " tipusa: " + typeof szam);
console.log(`${szam} típusa: ${typeof szam}`);
console.log(nev + " tipusa: " + typeof nev);

// Irj kodot ami a a szam valtozorol eldonti, hogy 0, paros, paratlan 

export function elagazas(){
    // == a két értéker hasonlit ossze
    // a két értéket és a két tipust is osszehasonlitja
    if(szam % 2 === 0){
        console.log(`a ${szam} Páros`)
    } else if (szam === 0){
        console.log(`a ${szam} nulla`)
    }
      else if (szam % 2 === 1){
        console.log(`a ${szam} páratlan`)
    }
    // else {
    //     console.log("Nem szám")
    // } 

}


export function ciklus1(){
    // Irjuk ki 10-szer a consolra, hogy Szep nap van!
    for (let index = 0; index < 10; index++) {
        console.log(`${index}. Szép nap van!`);
        
    }
}
export function ciklus2(){
    let index = 0;
    while (index < 10) {
        console.log(`${index}. Szép nap van`);
        index++;
    } 
}