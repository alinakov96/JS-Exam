/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

async function getUsers() {
  let url = "https://api.github.com/users";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderUsers() {
  let users = await getUsers();
  let html = "";
  users.forEach((user) => {
    let htmlSegment = `<div class="user">
                            <img src="${user.avatar_url}" style="width:100%;padding:1rem;">
                            <h2>${user.login}</h2>
                        </div>`;

    html += htmlSegment;
  });

  document.getElementById("btn").addEventListener("click", (e) => {
    e.target.value;
    let container = document.querySelector("#output");
    container.innerHTML = html;
  });
}

renderUsers();

document.getElementById("output").style.cssText = "box-shadow: 10px 10px 8px;";
