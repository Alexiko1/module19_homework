function fun(obj, name) {
    return (name in obj);
}
const boy = {
    name: "Andrei", 
    ownCity: "Ivanov",
    age: 18,
    height: 180
};
console.log(fun(boy, "noname"));
console.log(fun(boy, "name"));
