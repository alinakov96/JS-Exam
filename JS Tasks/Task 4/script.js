/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

async function getCars() {
  let url = "./cars.json";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderCars() {
  let cars = await getCars();
  let html = "";

  cars.forEach((car) => {
    let htmlSegment = `<div class="cars">
                          <h2>${car.brand}</h2>
                          <li style="padding:1rem;font-style:italic;">${car.models}</li>
                        </div>`;

    html += htmlSegment;
  });

  let container = document.querySelector("#output");
  container.innerHTML = html;
}

renderCars();

document.querySelector("#output").style.cssText =
  "text-align:center;padding:2rem;border:solid 3px gray;margin:2rem;";

//complete project
