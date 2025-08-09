const numbers = [1 , 2 , 43 , 54 , 4];

const players = [{}, {}, {}];

const employees = [
    {name: 'Ashik', Designation: 'Content Writer', salary: 25000},
    {name: 'Atik', Designation: 'Developer', salary: 29000},
    { name:'Abdur Rahim', Designation: 'Digital Marketer',salary: 35000},
    {name: 'Asifa', Designation: 'Web Dev', salary: 29000}
]

// console.log(employees[0]);
// console.log(employees[1].salary);
// console.log(employees[3].Designation);

// for (const employee of employees){
//     console.log(employee.salary, employee.Designation);
// }
employees[0].name = 'Ashraf';

for (const emp of employees){
    const person = emp;
    const personInfo = person.name + ':  ' + person.salary;

    console.log(personInfo);

}