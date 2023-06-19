const student= [ {id:21, name: "Omor Sanny"},
{id:31, name: "Mannaaaa"},
{id:41, name: "Moyori"},
{id:71, name: "Deepjol"}

];
// const result=[];
// for (let i = 0; i < student.length; i++) {
//     const element = student[i].name;
//     result.push(element);

    
// }

// console.log(result);


const names = student.map(x => x.name);
console.log(names); 

const id = student.map(x => x.id);
console.log(id); 


const bigger = student.filter (s=> s.id>40);
console.log(bigger); 