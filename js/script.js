// Milestone 0: creare l'array di oggetti con le informazioni fornite
const employees = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg"
        
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        img: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        img: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg"
        
    }
]

console.log(employees);
console.log(employees[0]);

// Milestone 1: stampare su console le informazioni di nome, ruolo e la stringa per ogni membro del team

for (let i = 0; i < employees.length; i++) {
    const curEmployee = employees[i];

    for (let key in curEmployee) {
        console.log(curEmployee[key]);

    }
}