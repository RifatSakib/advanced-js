const normalPerson = {
    firstName: "Rahim",
    lastName: "uddin",
    salary: 15000,
    getFullName: function(){

    console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount,tax,tips){
       console.log(this)
       this.salary = this.salary-amount-tax-tips; 
       return this.salary;
    }
}

// console.log(normalPerson.firstName);
// normalPerson.chargeBill(1000);
// console.log(normalPerson.salary); 


const heroPerson={

    firstName: "Hero",
    lastName: "Alam",
    salary: 25000
    

} 

const friendlyPerson={

    firstName: "Hero",
    lastName: "Balam",
    salary: 25000
    

}
//..............bind...............................

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);

// friendlyChargeBill(1000);
// heroChargeBill(1000);

// console.log(heroPerson.salary)
// console.log(friendlyPerson.salary)
// console.log(normalPerson.salary)


//..................call.............................

// normalPerson.chargeBill.call(heroPerson, 900,500,100);

// normalPerson.chargeBill.call(friendlyPerson, 100,200,30);
// console.log(heroPerson.salary); 

// console.log(friendlyPerson.salary); 



//.....................Apply..............................

normalPerson.chargeBill.apply(heroPerson,[3000,300,30]);
console.log(heroPerson.salary);