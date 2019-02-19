//Definiendo Fecha
var hoy = new Date();
var dd = hoy.getDate();
var mm = hoy.getMonth() + 1; //January is 0!
var mm1 = hoy.getMonth() + 1;
var yyyy = hoy.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}

hoy = dd + "/" + mm + "/" + yyyy;
//Fin
var actual = yyyy + "," + mm1 + ", " + dd
function getDayNumber(baseDate, targetDate, daysInCycle) {
    var startOfBaseDate = new Date(baseDate).setHours(0, 0, 0, 0);
    var startOfTargetDate = new Date(targetDate).setHours(0, 0, 0, 0);
    var differenceInDays = Math.round((startOfTargetDate - startOfBaseDate) / 864e5);
    return ((differenceInDays % daysInCycle + daysInCycle) % daysInCycle) + 1;
}
var diact = getDayNumber(new Date(2019, 1, 18), new Date(yyyy, mm1, dd), 6)
document.getElementById("fecha").innerHTML = hoy + " Correspondiente a día " + diact;
document.getElementById("dia").innerHTML = diact + 1

switch (diact) {
  case 1:
    document.getElementById("1").innerHTML = "Día " + diact
    document.getElementById("c1l1").innerHTML = "Inglés"
    document.getElementById("c1l2").innerHTML = "Inglés"
    document.getElementById("c1l3").innerHTML = "Investigación"
    document.getElementById("c1l4").innerHTML = "Sociales"
    document.getElementById("c1l5").innerHTML = "Español"
    document.getElementById("c1l6").innerHTML = "Química"
    document.getElementById("c1l7").innerHTML = "Química"
    document.getElementById("2").innerHTML = "Día " + (diact + 1)
    document.getElementById("c2l1").innerHTML = "Matematicas"
    document.getElementById("c2l2").innerHTML = "Matematicas"
    document.getElementById("c2l3").innerHTML = "Inglés"
    document.getElementById("c2l4").innerHTML = "Inglés"
    document.getElementById("c2l5").innerHTML = "Física"
    document.getElementById("c2l6").innerHTML = "Estadistica"
    document.getElementById("c2l7").innerHTML = "Estadistica"

    break;
  case 2:
    document.getElementById("1").innerHTML = "Día " + diact
    document.getElementById("c1l1").innerHTML = "Matematicas"
    document.getElementById("c1l2").innerHTML = "Matematicas"
    document.getElementById("c1l3").innerHTML = "Inglés"
    document.getElementById("c1l4").innerHTML = "Inglés"
    document.getElementById("c1l5").innerHTML = "Física"
    document.getElementById("c1l6").innerHTML = "Estadistica"
    document.getElementById("c1l7").innerHTML = "Estadistica"
    document.getElementById("2").innerHTML = "Día " + (diacth + 1)
    document.getElementById("c2l1").innerHTML = "Edu. Física"
    document.getElementById("c2l2").innerHTML = "Edu. Física"
    document.getElementById("c2l3").innerHTML = "Inglés"
    document.getElementById("c2l4").innerHTML = "Inglés"
    document.getElementById("c2l5").innerHTML = "Química"
    document.getElementById("c2l6").innerHTML = "Artes"
    document.getElementById("c2l7").innerHTML = "Artes"
    break;
  case 3:
    document.getElementById("1").innerHTML = "Día " + diact
    document.getElementById("c1l1").innerHTML = "Edu. Física"
    document.getElementById("c1l2").innerHTML = "Edu. Física"
    document.getElementById("c1l3").innerHTML = "Inglés"
    document.getElementById("c1l4").innerHTML = "Inglés"
    document.getElementById("c1l5").innerHTML = "Química"
    document.getElementById("c1l6").innerHTML = "Artes"
    document.getElementById("c1l7").innerHTML = "Artes"
    document.getElementById("2").innerHTML = "Día " + (diact + 1)
    document.getElementById("c2l1").innerHTML = "Dir. Curso"
    document.getElementById("c2l2").innerHTML = "Matematicas"
    document.getElementById("c2l3").innerHTML = "Español"
    document.getElementById("c2l4").innerHTML = "Español"
    document.getElementById("c2l5").innerHTML = "Filosofía"
    document.getElementById("c2l6").innerHTML = "Física"
    document.getElementById("c2l7").innerHTML = "Física"
    break;
  case 4:
    document.getElementById("1").innerHTML = "Día " + diact
    document.getElementById("c1l1").innerHTML = "Dir. Curso"
    document.getElementById("c1l2").innerHTML = "Matematicas"
    document.getElementById("c1l3").innerHTML = "Español"
    document.getElementById("c1l4").innerHTML = "Español"
    document.getElementById("c1l5").innerHTML = "Filosofía"
    document.getElementById("c1l6").innerHTML = "Física"
    document.getElementById("c1l7").innerHTML = "Física"
    document.getElementById("2").innerHTML = "Día " + (diact + 1)
    document.getElementById("c2l1").innerHTML = "Inglés"
    document.getElementById("c2l2").innerHTML = "Inglés"
    document.getElementById("c2l3").innerHTML = "Religión"
    document.getElementById("c2l4").innerHTML = "Informatica"
    document.getElementById("c2l5").innerHTML = "Informatica"
    document.getElementById("c2l6").innerHTML = "Química"
    document.getElementById("c2l7").innerHTML = "Química"
    break;
  case 5:
    document.getElementById("1").innerHTML = "Día " + diact
    document.getElementById("c1l1").innerHTML = "Inglés"
    document.getElementById("c1l2").innerHTML = "Inglés"
    document.getElementById("c1l3").innerHTML = "Religión"
    document.getElementById("c1l4").innerHTML = "Informatica"
    document.getElementById("c1l5").innerHTML = "Informatica"
    document.getElementById("c1l6").innerHTML = "Química"
    document.getElementById("c1l7").innerHTML = "Química"
    document.getElementById("2").innerHTML = "Día " + (diact + 1)
    document.getElementById("c2l1").innerHTML = "Ética"
    document.getElementById("c2l2").innerHTML = "Español"
    document.getElementById("c2l3").innerHTML = "Filosofía"
    document.getElementById("c2l4").innerHTML = "Biología"
    document.getElementById("c2l5").innerHTML = "Matematicas"
    document.getElementById("c2l6").innerHTML = "Física"
    document.getElementById("c2l7").innerHTML = "Historia de Colombia"
    break;
  case 6:
    document.getElementById("1").innerHTML = "Día " + diact
    document.getElementById("c1l1").innerHTML = "Ética"
    document.getElementById("c1l2").innerHTML = "Español"
    document.getElementById("c1l3").innerHTML = "Filosofía"
    document.getElementById("c1l4").innerHTML = "Biología"
    document.getElementById("c1l5").innerHTML = "Matematicas"
    document.getElementById("c1l6").innerHTML = "Física"
    document.getElementById("c1l7").innerHTML = "Historia de Colombia"
    document.getElementById("2").innerHTML = "Día " + (diact + 1)
    document.getElementById("c2l1").innerHTML = "Inglés"
    document.getElementById("c2l2").innerHTML = "Inglés"
    document.getElementById("c2l3").innerHTML = "Investigación"
    document.getElementById("c2l4").innerHTML = "Sociales"
    document.getElementById("c2l5").innerHTML = "Español"
    document.getElementById("c2l6").innerHTML = "Química"
    document.getElementById("c2l7").innerHTML = "Química"
    break;
  default:
    let dano = "DAÑO"
    document.getElementById("1").innerHTML = dano
    document.getElementById("c1l1").innerHTML = dano
    document.getElementById("c1l2").innerHTML = dano
    document.getElementById("c1l3").innerHTML = dano
    document.getElementById("c1l4").innerHTML = dano
    document.getElementById("c1l5").innerHTML = dano
    document.getElementById("c1l6").innerHTML = dano
    document.getElementById("c1l7").innerHTML = dano
    document.getElementById("c1l8").innerHTML = dano
    document.getElementById("c2l1").innerHTML = dano
    document.getElementById("c2l2").innerHTML = dano
    document.getElementById("c2l3").innerHTML = dano
    document.getElementById("c2l4").innerHTML = dano
    document.getElementById("c2l5").innerHTML = dano
    document.getElementById("c2l6").innerHTML = dano
    document.getElementById("c2l7").innerHTML = dano
    document.getElementById("c2l8").innerHTML = dano
}
