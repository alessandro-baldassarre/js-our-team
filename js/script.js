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
for (let i = 0; i < team.length; i++){

console.log(`
    
name: ${team[i].name},
role: ${team[i].role},
image: ${team[i].image}
    
    `);

};

// print the name, role and photo string information on the DOM

for (let i = 0; i < team.length; i++){

    const newDiv = document.createElement("div");
    newDiv.classList.add("col-lg-4","col-sm-6","col-12","text-center","d-flex","align-items-center","flex-column","mb-5");
    newDiv.innerHTML = `
    <img src="img/${team[i].image}" alt="image of member team" class="rounded-circle mb-3 shadow border border-primary p-1">
    <h5 class="text-uppercase fw-bold">${team[i].name}</h5>
    <p>${team[i].role}</p> `;

    const output = document.querySelector(".row");
    output.appendChild(newDiv);

    };

// Aggiungi in fondo all'esercizio un form con nome, 
// ruolo e un link all'immagine che con un bottone consentano 
// di aggiungere un team member per volta in più a quelli già presenti.


// when the button is clicked it executes the function that I invoke inside
document.querySelector("button").addEventListener("click", function(){

    addNewMember(team);
});

/**
 * 
function that, having taken as input the data entered by the user, first adds it to a new object created. this object is then added to the existing array of objects and finally displayed in the DOM
 * 
 * @param {*} teamList 
 */

function addNewMember(teamList){
    
    const newMemberName = document.getElementById("new-member-name");
    const newMemberRole = document.getElementById("new-member-role");
    const newMemberImage = document.getElementById("new-member-img");

    let newMember = {};
    newMember.name = newMemberName.value;
    newMember.role = newMemberRole.value;
    newMember.image = newMemberImage.value;

    teamList.push(newMember);

    const newDiv = document.createElement("div");
    newDiv.classList.add("col-lg-4","col-sm-6","col-12","text-center","d-flex","align-items-center","flex-column","mb-5");
    newDiv.innerHTML = `
    <img src="${newMember.image}" alt="image of member team" class="rounded-circle mb-3 shadow border border-primary p-1">
    <h5 class="text-uppercase fw-bold">${newMember.name}</h5>
    <p>${newMember.role}</p> `;

    const output = document.querySelector(".row");
    output.appendChild(newDiv);

};

