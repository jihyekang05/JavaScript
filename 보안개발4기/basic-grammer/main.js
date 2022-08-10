console.log("hello world");

let message1 = "hi";
// var message2 = "hello"; 프로젝트가 커졌을 때 여러 문제가 생길 수 있어서 사용을 지양한다.



console.log(message1);
// console.log(message2);

// 쪼개질 수 없는 데이터 타입-primitive
// value 실제 값 저장

// object는 주소값

const count=17;
console.log(`value: ${count},type:${typeof count}`);

// undefined
const symbol1=Symbol("id");
const symbol2=Symbol("id");
console.log(symbol1===symbol2);

//String
const greeting="hello";
console.log(`value: ${greeting},type:${typeof greeting}`);

//extra...
const infinity= 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//동적타입
let text="hello";
console.log(text.charAt(0));
console.log(`value: ${text},type:${typeof text}`);
text = 1;
console.log(`value: ${text},type:${typeof text}`);
text = 7+"5";
console.log(`value: ${text},type:${typeof text}`);
text ="8"/"2";
console.log(`value: ${text},type:${typeof text}`);
// console.log(text.charAt(0)); 타입에러-->타입스크립트 등장배경


//object타입
const member = {
    name:"anne",
    age:30
}
console.log(member);
