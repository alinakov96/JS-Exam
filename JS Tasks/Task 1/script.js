/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

let pLb = document.createElement("p");
let spanLb = document.createElement("span");
spanLb.setAttribute("id", "spanPound");
pLb.innerText = "Svarai:";
pLb.append(spanLb);
output.append(pLb);

let pG = document.createElement("p");
let spanG = document.createElement("span");
spanG.setAttribute("id", "spanGram");
pG.innerText = "Gramai:";
pG.append(spanG);
output.append(pG);

let pOz = document.createElement("p");
let spanOz = document.createElement("span");
spanOz.setAttribute("id", "spanOunce");
pOz.innerText = "Uncijos:";
pOz.append(spanOz);
output.append(pOz);

document.getElementById("output").style.cssText =
  "display:flex;justify-content:center;margin:2rem;padding:1rem;";
document.getElementById("spanPound").style.cssText =
  "margin:2rem;padding:1rem;border:solid 2px black;font-style:italic;";
document.getElementById("spanGram").style.cssText =
  "margin:2rem;padding:1rem;border:solid 2px black;font-style:italic;";
document.getElementById("spanOunce").style.cssText =
  "margin:2rem;padding:1rem;border:solid 2px black;font-style:italic;";

document.getElementById("output").style.visibility = "hidden";
document.getElementById("search").addEventListener("input", function (e) {
  document.getElementById("output").style.visibility = "visible";
  let kg = e.target.value;
  let input = document.getElementById("search");
  let data = input.value;
  document.getElementById("spanPound").innerHTML = kg * 2.2046;
  document.getElementById("spanGram").innerHTML = kg / 0.001;
  document.getElementById("spanOunce").innerHTML = kg * 35.274;
  document.getElementById("output").style.visibility = "visible";

  if (data == "") {
    document.getElementById("output").style.visibility = "hidden";
  }
});
