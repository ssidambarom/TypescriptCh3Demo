interface IPerson{
    firtName: string;
    lastName: string;
    age: number;
}


function greeting(person: IPerson):string{
    if (person.age <= 18)
    return `Hi ${person.firtName} ${person.lastName}`;

    if (person.age > 18)
    return `Hello M. ${person.lastName}`;
}


/*
* Execution
*/

var person: IPerson = { firtName: "Sylvain", lastName: "Sidambarom", age: 30 };
console.log(greeting(person))

var maybeAperson = { firtName: "Sacha", lastName: "Touille", age: 17 }
console.log(greeting(maybeAperson))

var mightbeAperson = { firtName: "Jill", lastName: "Etparbal", age: 17, height:1.70}
console.log(greeting(mightbeAperson))

var probablyAperson = { firtName: "Jacques", lastName: "Célère", height:1.60}
console.log(greeting(probablyAperson))