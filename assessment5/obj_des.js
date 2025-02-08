// Object Destructuring

const person = {
    name: "Alice",
    age:25,
    city:'New York'
}

function des(x)
{
    
    let {name,city} = person;
    // console.log(name,age);
    console.log(`${name} lives in ${city}`);
}

des(person);