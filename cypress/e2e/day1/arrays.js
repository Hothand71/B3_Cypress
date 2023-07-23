//Creating array
var scores=new Array(); //empty
var numbers=new Array(10); //array with initial size is 10
var myNumber=new Array(9,10,2,5);// array with initial elements

var athletes=Array(3); //array with initial size is 3
var sings=Array('red');//array with oner element
var emptyArray=[];
var colors=['red','green','blue'];

//array examples
let tools=["Jest","Selenium","Cypress","testCafe","phantomjs","protractor"];

//Accessing aray elements

console.log(tools);
console.log(tools.toString());
console.log(tools[0]);

const string=tools.toString();
console.log(string);

const join=tools.join(" * ");//add * between elements
console.log(join);

const pop=tools.pop() ;//removes an element from the end of an array
console.log(pop);
console.log(tools);

const push=tools.push("SlimerJS"); //add element to end of array
console.log(tools);

const shift=tools.shift();//removes an element from the beginning of an array
console.log(tools);

const unshift=tools.unshift("Selenoid");//add element to beginning of array 
console.log(tools);

const sort=tools.sort();//sort element
console.log(tools);

const reverse=tools.reverse();//reverse element
console.log(reverse);

tools.forEach((value)=>{
    if(value=="Cypress"){
            console.log("Cypress is trending now");
    }else{
        console.log("element not found")
    }
    
})
