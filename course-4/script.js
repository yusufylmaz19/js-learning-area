// nested promises 
let  emptyTank= function(){
    return new Promise(function(resolve,reject){
        resolve('we dont have enough fuel');
    })
}

let engine= function(msg){
    return new Promise(function(resolve,reject){
        resolve(msg+ 'engine is over heating');
    })
}

let travel= function(msg){
    return new Promise(function(resolve,reject){
        resolve(msg+ 'you can travel with this car');
    })
}

emptyTank().then( result=>{
    return engine(result);
}).then(result=>{
    return travel(result);
}).then(result=>{
    console.log('we done!'+result);
})



// async and await

let result=score=>{
    return new Promise((resolve,reject)=>{
        console.log('calculating result..');
        if(score>50){
            resolve('You have passed')
        }else{
            reject('you have failed')
        }
    })
}

let grade=response=>{
    return new Promise((resolve,reject)=>{
        console.log('calculating grade..');
        resolve('brava you garde is A.'+response)
    })
}

// result(75).then(res=>{
//     console.log('results recived');
//     return grade(res);
// }).then(finalGrade=>{
//     console.log(finalGrade)
// }).catch(err=>{
//     console.log(err);
// })


async function calculateResult(){
    try{
        const response= await result(82);
        console.log('result recived');
        const finalGrade= await grade(response);
        console.log(finalGrade)
    }
    catch(err){
        console.log(err);
    }
}

calculateResult();

// this keyword

var value=50;
function show(){
    var value=100;
    console.log(value);  //shows up 100
    console.log(this.value); // shows up 50
}

show();

const names={
     name:'john',
     numbers:[1,2,3,4],
     show(){
         this.numbers.forEach(val=>{
             console.log(this.name,val);   // shows up 1 ,2 , 3 , 4
         },this)
     }
}

names.show()

// form validation


const validate=()=>{
    const password=document.myForm.password.value;
    const email=document.myForm.email.value;
   if(password===''){
       alert('please provide your password');
       document.myForm.password.focus();
       return false;
    }
    else if(email===''){
        alert('please provide your email');
        document.myForm.email.focus();
        return false;
    }
    else{
        return true;
    }
}


// rergular expressions

const emailRegex=()=>{
     const email=document.getElementById('regex').value;
     const regex= new RegExp('^([A-Za-z0-9\._]+)@([A-Za-z0-9]+).([a-z])+(.[a-z]+)?$')
     if(email.match(regex)){  //or regex.exec(email) can handel same 
         alert('you have provied a valid email thx');
         return true;
     }else{
           alert('sorrryyy try again');
           return false;
     }
}