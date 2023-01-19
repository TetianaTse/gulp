"use strict";let arrPeople=[],arrPlanet=[],arrStarships=[];function showPeople(){let a="https://swapi.dev/api/people",b=[];const c=document.querySelector(".people_data"),d=document.getElementById("open_people");let e=0;d.addEventListener("click",()=>{axios.get(a).then(f=>{for(let a in f.data.results)b.push(f.data.results[a]),arrPeople.push(f.data.results[a]);for(let a in b){createElement("p",{className:"people","data-people":e},{click:showDataPeople},b[a].name,c);e++}b=[],null===f.data.next?d.classList.add("hidden"):a=f.data.next})})}function showDataPeople(a){const b=a.target.getAttribute("data-people"),c=document.querySelector("#details");document.querySelector(".planets").classList.add("block_blurs");let d=arrPeople[b].url;c.classList.remove("hidden");const e=document.querySelector(".details_text");e.innerHTML="";createElement("button",{className:"details_close",id:"details_close"},{click:closeDetails},"X",c);let f;(function(a){let b=arrPeople[a].homeworld;fetch(b).then(a=>a.json()).then(a=>{f=a.name})})(b);axios.get(d).then(a=>{e.innerHTML=`<p>Name: ${a.data.name}</p>
                                  <p>Birth year: ${a.data.birth_year}</p>
                                  <p>Height: ${a.data.height}</p>
                                  <p>Mass: ${a.data.mass}</p>
                                  <p>Hair color: ${a.data.hair_color}</p>
                                  <p>Skin color: ${a.data.skin_color}</p>
                                  <p>Eye color: ${a.data.eye_color}</p>
                                  <p>Gender: ${a.data.gender}</p>
                                  <p>Homeworld: ${f}</p>`})}function showStarships(){let a="https://swapi.dev/api/starships",b=[];const c=document.querySelector(".starships_data"),d=document.getElementById("open_starships");let e=0;d.addEventListener("click",()=>{axios.get(a).then(f=>{for(let a in f.data.results)b.push(f.data.results[a]),arrStarships.push(f.data.results[a]);for(let a in b){createElement("p",{className:"starships","data-starships":e},{click:showDataStarships},b[a].name,c);e++}b=[],null===f.data.next?d.classList.add("hidden"):a=f.data.next})})}function showDataStarships(a){const b=a.target.getAttribute("data-starships"),c=document.querySelector("#details");document.querySelector("#details").classList.remove("planet_det"),document.querySelector(".people").classList.remove("block_blurs"),document.querySelector(".planets").classList.add("block_blurs");let d=arrStarships[b].url;c.classList.remove("hidden");const e=document.querySelector(".details_text");e.innerHTML="";createElement("button",{className:"details_close",id:"details_close"},{click:closeDetails},"X",c);axios.get(d).then(a=>{e.innerHTML=`<p>Name: ${a.data.name}</p>
                                  <p>Model: ${a.data.model}</p>
                                  <p>Manufacturer: ${a.data.manufacturer}</p>
                                  <p>Cost in credits: ${a.data.cost_in_credits}</p>
                                  <p>Length: ${a.data.length}</p>
                                  <p>Max atmosphering speed: ${a.data.max_atmosphering_speed}</p>
                                  <p>Crew: ${a.data.crew}</p>
                                  <p>Passengers: ${a.data.passengers}</p>
                                  <p>Cargo capacity: ${a.data.cargo_capacity}</p>
                                  <p>Consumables: ${a.data.consumables}</p>
                                  <p>Hyperdrive rating: ${a.data.hyperdrive_rating}</p>
                                  <p>MGLT: ${a.data.MGLT}</p>
                                  <p>Starship class: ${a.data.starship_class}</p>`})}function showPlanet(){let a="https://swapi.dev/api/planets",b=[];const c=document.querySelector(".planets_data"),d=document.getElementById("open_planets");let e=0;d.addEventListener("click",()=>{axios.get(a).then(f=>{for(let a in f.data.results)b.push(f.data.results[a]),arrPlanet.push(f.data.results[a]);for(let a in b){createElement("p",{className:"planet","data-planet":e},{click:showDataPlanet},b[a].name,c);e++}b=[],null===f.data.next?d.classList.add("hidden"):a=f.data.next})})}function showDataPlanet(a){const b=a.target.getAttribute("data-planet");document.querySelector(".people").classList.add("block_blurs");const c=document.querySelector("#details");c.classList.add("planet_det");let d=arrPlanet[b].url;c.classList.remove("hidden");const e=document.querySelector(".details_text");e.innerHTML="";createElement("button",{className:"details_close",id:"details_close"},{click:closeDetails},"X",c);axios.get(d).then(a=>{e.innerHTML=`<p>Name: ${a.data.name}</p>
                                  <p>Rotation period: ${a.data.rotation_period}</p>
                                  <p>Orbital period: ${a.data.orbital_period}</p>
                                  <p>Diameter: ${a.data.diameter}</p>
                                  <p>Climate: ${a.data.climate}</p>
                                  <p>Gravity: ${a.data.gravity}</p>
                                  <p>Terrain: ${a.data.terrain}</p>
                                  <p>Surface water: ${a.data.surface_water}</p>
                                  <p>Population: ${a.data.population}</p>`})}function closeDetails(){document.querySelector("#details").classList.add("hidden"),document.querySelector("#details").classList.remove("planet_det"),document.querySelector(".people").classList.remove("block_blurs"),document.querySelector(".planets").classList.remove("block_blurs")}showPeople(),showPlanet(),showStarships();
"use strict";function createElement(a,b,c,d,e){const f=document.createElement(a);if(b)for(let a in b)"className"==a?f.setAttribute("class",b[a]):f.setAttribute(a,b[a]);if(c)for(let a in c)f.addEventListener(a,c[a]);return f.textContent=d,e.appendChild(f),f}