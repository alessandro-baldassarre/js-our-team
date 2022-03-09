// Viene fornito un array di oggetti in allegato in cui è definito un array di oggetti che rappresentano i membri del team.
// Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
// MILESTONE 1:
// stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// organizzare i singoli membri in card/schede

const team = [
        {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
        },
        {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
        },
        {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
        },
        {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
        },
        {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
        },
        {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
        },
];

// print the name, role and photo string information on the console
for (let key in team){

console.log(`
    
name: ${team[key].name},
role: ${team[key].role},
image: ${team[key].image}
    
    `);

};

// print the name, role and photo string information on the DOM
// for (let key in team){

    

//     const newDiv = document.createElement("div");
//     newDiv.classList.add("fs-4", "text-center","p-5");
//     newDiv.innerHTML += `
//     name: ${team[key].name}<br>
//     role: ${team[key].role}<br>
//     <img src="img/${team[key].image}" alt="image of member team">` ;

//     const output = document.getElementById("output");
//     output.appendChild(newDiv);

//     };

for (let key in team){

    const newDiv = document.createElement("div");
    newDiv.classList.add("col-4", "p-5","text-center");
    newDiv.innerHTML = `
    <img src="img/${team[key].image}" alt="image of member team" class="rounded-circle mb-3 shadow border border-primary p-1">
    <h5 class="text-uppercase fw-bold">${team[key].name}</h5>
    <p>${team[key].role}</p> `;

    const output = document.querySelector(".row");
    output.appendChild(newDiv);

    };