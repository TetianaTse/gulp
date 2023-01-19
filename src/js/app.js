'use strict';
let arrPeople =[];
let arrPlanet = [];
let arrStarships = [];
function showPeople() {
    let nextUrl = 'https://swapi.dev/api/people';
    let arrDataPerson = [];
    const containerPeople = document.querySelector('.people_data');
    const btn_people = document.getElementById('open_people');
    let count = 0;
    btn_people.addEventListener('click', () => {
        axios.get(nextUrl)
            .then(result => {
                for (let key in result.data.results) {
                    arrDataPerson.push(result.data.results[key]);
                    arrPeople.push(result.data.results[key]);
                }
                for (let key in arrDataPerson) {
                    const elem = createElement(
                        'p', 
                        {className: 'people', 'data-people': count}, 
                        {click: showDataPeople}, 
                        arrDataPerson[key].name, 
                        containerPeople);
                    count++;
                }
                arrDataPerson = [];
                if (result.data.next !== null) {
                    nextUrl = result.data.next;
                } else {
                    btn_people.classList.add('hidden');
                }
        });
    });
}

function showDataPeople(event) {
    const personIndex = event.target.getAttribute('data-people');
    const details = document.querySelector('#details');
    document.querySelector('.planets').classList.add('block_blurs');
    let url = arrPeople[personIndex].url;
    details.classList.remove('hidden');
    const text = document.querySelector('.details_text');
    text.innerHTML = '';
    const btn_view = createElement(
        'button', 
        {className: 'details_close', id: 'details_close'}, 
        {click: closeDetails},  
        'X', 
        details);
        let homeworld;
        getPlanet(personIndex);

        function getPlanet(personIndex) {
            let urlPlanet = arrPeople[personIndex].homeworld;
            fetch(urlPlanet)
                .then (res => res.json())
                .then (result => {
                    homeworld = result.name;
                });
        };
        
        axios.get(url)
            .then(result => {
                text.innerHTML = `<p>Name: ${result.data.name}</p>
                                  <p>Birth year: ${result.data.birth_year}</p>
                                  <p>Height: ${result.data.height}</p>
                                  <p>Mass: ${result.data.mass}</p>
                                  <p>Hair color: ${result.data.hair_color}</p>
                                  <p>Skin color: ${result.data.skin_color}</p>
                                  <p>Eye color: ${result.data.eye_color}</p>
                                  <p>Gender: ${result.data.gender}</p>
                                  <p>Homeworld: ${homeworld}</p>`;
        });
}

function showStarships() {
    let nextUrl = 'https://swapi.dev/api/starships';
    let arrDataStarships = [];
    const containerStarships = document.querySelector('.starships_data');
    const btn_starships = document.getElementById('open_starships');
    let count = 0;
    btn_starships.addEventListener('click', () => {
        axios.get(nextUrl)
            .then(result => {
                for (let key in result.data.results) {
                    arrDataStarships.push(result.data.results[key]);
                    arrStarships.push(result.data.results[key]);
                }
                for (let key in arrDataStarships) {
                    const elem = createElement(
                        'p', 
                        {className: 'starships', 'data-starships': count}, 
                        {click: showDataStarships}, 
                        arrDataStarships[key].name, 
                        containerStarships);
                    count++;
                }
                arrDataStarships = [];
                if (result.data.next !== null) {
                    nextUrl = result.data.next;
                } else {
                    btn_starships.classList.add('hidden');
                }
        });
    });
}

function showDataStarships(event) {
    const personIndex = event.target.getAttribute('data-starships');
    const details = document.querySelector('#details');
    document.querySelector('#details').classList.remove('planet_det');
    document.querySelector('.people').classList.remove('block_blurs');
    document.querySelector('.planets').classList.add('block_blurs');
    let url = arrStarships[personIndex].url;
    details.classList.remove('hidden');
    const text = document.querySelector('.details_text');
    text.innerHTML = '';
    const btn_view = createElement(
        'button', 
        {className: 'details_close', id: 'details_close'}, 
        {click: closeDetails},  
        'X', 
        details);
        
        axios.get(url)
            .then(result => {
                text.innerHTML = `<p>Name: ${result.data.name}</p>
                                  <p>Model: ${result.data.model}</p>
                                  <p>Manufacturer: ${result.data.manufacturer}</p>
                                  <p>Cost in credits: ${result.data.cost_in_credits}</p>
                                  <p>Length: ${result.data.length}</p>
                                  <p>Max atmosphering speed: ${result.data.max_atmosphering_speed}</p>
                                  <p>Crew: ${result.data.crew}</p>
                                  <p>Passengers: ${result.data.passengers}</p>
                                  <p>Cargo capacity: ${result.data.cargo_capacity}</p>
                                  <p>Consumables: ${result.data.consumables}</p>
                                  <p>Hyperdrive rating: ${result.data.hyperdrive_rating}</p>
                                  <p>MGLT: ${result.data.MGLT}</p>
                                  <p>Starship class: ${result.data.starship_class}</p>`;
        });

}

function showPlanet() {
    let nextUrl = 'https://swapi.dev/api/planets';
    let arrDataPlanet = [];
    const containerPlanet = document.querySelector('.planets_data');
    const btn_planet = document.getElementById('open_planets');
    let count = 0;
    btn_planet.addEventListener('click', () => {
        axios.get(nextUrl)
            .then(result => {
                for (let key in result.data.results) {
                    arrDataPlanet.push(result.data.results[key]);
                    arrPlanet.push(result.data.results[key]);
                }
                for (let key in arrDataPlanet) {
                    const elem = createElement(
                        'p', 
                        {className: 'planet', 'data-planet': count}, 
                        {click: showDataPlanet}, 
                        arrDataPlanet[key].name, 
                        containerPlanet);
                    count++;
                }
                arrDataPlanet = [];
                if (result.data.next !== null) {
                    nextUrl = result.data.next;
                } else {
                    btn_planet.classList.add('hidden');
                }
        });
    });
}

function showDataPlanet(event) {
    const personIndex = event.target.getAttribute('data-planet');
    document.querySelector('.people').classList.add('block_blurs');
    const details = document.querySelector('#details');
    details.classList.add('planet_det');
    let url = arrPlanet[personIndex].url;
    details.classList.remove('hidden');
    const text = document.querySelector('.details_text');
    text.innerHTML = '';
    const btn_view = createElement(
        'button', 
        {className: 'details_close', id: 'details_close'}, 
        {click: closeDetails},  
        'X', 
        details); 
        axios.get(url)
            .then(result => {
                text.innerHTML = `<p>Name: ${result.data.name}</p>
                                  <p>Rotation period: ${result.data.rotation_period}</p>
                                  <p>Orbital period: ${result.data.orbital_period}</p>
                                  <p>Diameter: ${result.data.diameter}</p>
                                  <p>Climate: ${result.data.climate}</p>
                                  <p>Gravity: ${result.data.gravity}</p>
                                  <p>Terrain: ${result.data.terrain}</p>
                                  <p>Surface water: ${result.data.surface_water}</p>
                                  <p>Population: ${result.data.population}</p>`;
        });
}

function closeDetails() {
    document.querySelector('#details').classList.add('hidden');
    document.querySelector('#details').classList.remove('planet_det');
    document.querySelector('.people').classList.remove('block_blurs');
    document.querySelector('.planets').classList.remove('block_blurs');
}

showPeople();
showPlanet();
showStarships();

