const data = [
    {
      name: "Bob",
      age: 24
    },
    {
      name: "Alice",
      age: 21
    }
  ];
  
  function getSentence(data) {
    // Extract age from Bob and name from Alice
    const age = data.find(person => person.name === "Bob").age;
    const name = data.find(person => person.name === "Alice").name;
  
    return `${name}'s age is ${age}.`;
  }
  
  console.log(getSentence(data));
  