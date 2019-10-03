console.log("skrypty załadowane!")


const owce = [{
    name: "asas",
    wiek: 8,
    kolor:"biały"
},
{
    name: "Andrzej",
    wiek: 16,
    kolor:"biały"
},
{
    name: "Jędrzej",
    wiek: 14,
    kolor:"czarny"
},
{
    name: "sasa",
    wiek: 8,
    kolor:"biały"
},
{
    name: "mruczek",
    wiek: 10,
    kolor:"biały"
},
{
    name: "chau-chau",
    wiek: 6,
    kolor:"biały"
},
{
    name: "chau-chau",
    wiek: 6,
    kolor:"biały"
},
{
    name: "ciapka",
    wiek: 12,
    kolor:"Dalmatyńczyk"
},
]

const reprezentacjaOwiec = owce.map( owca => `
    <div class="owca">
    ${owca.imie}
    ${owca.kolor}
    ${owca.wiek}
    <div/>
    `)

const tekstDoWstawienia = reprezentacjaOwiec.join("");
const miejsceNaTekst = document.querySelector("#miejsceNaOwce")
miejsceNaTekst.innerHTML = tekstDoWstawienia; 
