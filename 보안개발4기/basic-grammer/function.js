function printHello(){
    console.log("hi");
}

//2. parameters
//primitive parameter: passed by value
//object parameter: passed by reference

function changeMessage(obj){
    obj.message = "hello";
}

const new_message = {message: "Good Bye"};
console.log(new_message)//Good Bye 출력
changeMessage(new_message);
console.log(new_message);//hello 출력


//값이 변경되지 않음
const num1 = 1000;
function changeNum(num){
    num=500;
}
changeNum(num1);
console.log(num1);

//Default parameter
function showMessage(message, from="unknown"){
    console.log(`${message} by ${from}`);
}

showMessage("hi");
showMessage("hi",'dian');

//Rest parameters
function printAll(...args){

    // for(let i=0; i<args.length; i++){
    //     console.log(args[i]);
    // }

    for(const arg of args){
        console.log(arg);
    }
}

printAll("a","b","c");

//Local scope
let globalmessage="global";

function printMessage(s){
    let message = "hi";
    console.log(message);
    console.log(globalmessage);

    function printAnother()
    {
        console.log(message);
        let childMessage="child";
    }
    printAnother()
    // console.log(childMessage);
}
console.log(globalmessage);

//간단한 함수
const add = (a,b) => a+b;
