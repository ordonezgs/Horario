//Definiendo Fecha
var hoy = new Date();
var dd = hoy.getDate();
var mm = hoy.getMonth() + 1; //January is 0!
var yyyy = hoy.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}

hoy = dd + "/" + mm + "/" + yyyy;
//Fin
document.getElementById("fecha").innerHTML = hoy;
contador = 4
function obtenerDia() {
  if (!(hoy = "17/02/2019")) {
    contador++
  }else {
    console.log("Algo pasa marica.")
  }
}
