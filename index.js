const mongoose=require('mongoose')
const connectdb=require('./DB/connecctDB')

connectdb()
  const Person=require('./Model/model') 

const addSavePerson = new Person({
    name: "Dhia",
    age: 21,
    favoriteFoods: ['Pizza,Dpaghetti,Sea food'],
  });
 
 addSavePerson.save(()=>{
    try{
        console.log('Person added')

    }catch(error){
        console.log(error)
    }
})   

 Person.create([
    {name: "Adam",
    age: 19,
    favoriteFoods: ['spaghetti','fish','crepe'],
  },
  {
    name: "Haythem",
    age: 20,
    favoriteFoods: ['Escalope','Meat'],
  },
  {
    name: "Salah",
    age: 22,
    favoriteFoods: ['Pizza,Pasta,milk'],
  },
  {
    name: "Ayoub",
    age: 15,
    favoriteFoods: ['poulet'],
  },
  {
    name: "Saber",
    age: 27,
    favoriteFoods: ['Lasagne','kebab'],
  },
  {
    name: "Achraf",
    age: 30,
    favoriteFoods: ['Pizza,Fruits'],
  }]
  ,(err,res)=>{
    try{
        console.log('Person Added')

    }catch(error){
        console.log(error)
    }
  })

Person.find({name:'Adam'},(err,res)=>{

    try{
        console.log(res);
    }catch(error){
        console.log('error')
    }
})

Person.findOne({favoriteFoods:{$in:['kebab']}},(err,res)=>{
   
    try{
        console.log(res);
    }catch(error){
        console.log('error')
    }
})

/Person.findById('615d8a70bd2b462716a232b6',(err,res)=>{

    try{
        console.log(res);
    }catch(error){
        console.log('error')
    }
}) 

Person.findOneAndUpdate({name:{$set:'Adam'}},
{ favoriteFoods:('kebab')},(err,res)=>{

    try{
        console.log(res);
    }catch(error){
        console.log(err)
    }
}) 

 Person.findOneAndRemove({name:'Haythem'},(err,res)=>{

    try{
        console.log('Person deleted');
    }catch(error){
        console.log('error')
    }
}) 

 Person.remove({name:'Dhia'},(err,res)=>{

    try{
        console.log('Person deleted');
    }catch(error){
        console.log('error')
    }
})  

 Person.find({favoriteFoods:{$in:['Sea food']}},(err,res)=>{

    try{
        console.log('Person founded by favorite food');
    }catch(error){
        console.log('error')
    }
})  