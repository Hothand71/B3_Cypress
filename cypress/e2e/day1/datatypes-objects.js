/**
 * VAriables naming rules: same as java
 * Primitives Data Types
 * numbers: 123, 120.50
 * String : '' or "" : 'apple',"apple"
 * Boolean: true false
 * Undefined : variables does not have value
 * null
 * 
 */

/**
 * There are 3 diffirent types of variables
 * var: variables abbreviation
 * *If there is, globally-scope is a variable definition method
 * *You can change its value later and define the same variable again
 * 
 * let: so Let is equal to
 * *let is a block-scope variable definition method.
 * *The structures we call blocks are the place between the curly brackets.
 * *The value of variables defined with let can be changed later
 * *but you cannot define the same variable again.
 * 
 * const: short for constant, which means constant
 * as soon as the value of the variable is constant, like the number Pi
 * 
 */
var a
console.log(a)
var name = 'mike'
a=name
console.log(a)
a=1
console.log(a)
a=true
console.log(a)

var age=36;
console.log(age);
var name_object={firstname:'Jake',lastname:'Masters'};
var truth=false;
var skills=["HTML","CSS","JS"]
var a=null;
console.log(a);

//object
var student={
    firstname:"Kate",
    lastname:"Masters",
    age:22,
    height:167,

    fulName:function(){
        return this.firstname+" "+this.lastname
    }

}


const ageValue=student.age;
//to run console
console.log(ageValue);
console.log(student.fulName())

/**
 * code to run console
 * first save your code or choose auto save from File menu
 * 1-The class is which this directory is located is accessed from the terminal.
 * PS C:\Users\KEMAL\Desktop\KTB3_Cypress\cypress\e2e\day1> cd javascript_basic
 * 2_ Type the full filename with node
 * PS C:\Users\KEMAL\Desktop\KTB3_Cypress\cypress\e2e\day1> node datatypes-objects.js
 * 
 */

