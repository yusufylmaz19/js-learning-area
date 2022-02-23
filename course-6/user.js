// exporting modules

export default class user{      
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

export function printName(user){ 
    console.log(`user name is ${user.name} `);
}
 function printAge(user){
    console.log(`user age is ${user.age} `)
}

//export default user;    

export {printAge as yas}; 