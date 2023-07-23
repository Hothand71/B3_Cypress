/**
 * Cypress is promise aware so if you return promise from inside of commands like. Then()
 * Cypress will not continue until those promises resolve.
 */

function getNumber(currency){
    return new Promise((resolve,reject)=>{
        if(typeof currency !="number"){
            reject(new Error('currency is not number'))
        }else{
            resolve(currency)
        }
    })
}

getNumber("1000").then((val)=>{
    console.log('val',val)
})

