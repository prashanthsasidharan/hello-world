function sayHelloWorld(){
    let div = document.createElement('div');
    div.innerText = "HELLO WORLd";
    document.body.appendChild(div);
}
module.exports.sayHelloWorld = sayHelloWorld;