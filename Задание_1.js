const object = {
    name: "Andrei",
    surname: "Ivanov",
    age: 18
  };
    function person(object){
    for (let key in object) {
    console.log(key);
    }
    for (let key in object) {
    console.log(object[key]);
    }
  }
  console.log(person(object));