const friends = [];

document.getElementById("btnLisaa").addEventListener("click", lisaaKaveri)
document.getElementById("btnPoista").addEventListener("click", poistaKaveri)

function lisaaKaveri(){
    let lisaa = document.getElementById("kaverit").value
    document.getElementById("otsikko1").innerText = lisaa

}

function poistaKaveri(){
    //let poista = document.getElementById("")
    document.getElementById("otsikko1").innerHTML = "No header"
}