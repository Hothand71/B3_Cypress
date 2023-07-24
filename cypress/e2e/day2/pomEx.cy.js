///<reference types="cypress"/>
import { Login } from "../../pageObjects/login"

const login=new Login()
describe("Demoblaze Login Test",()=>{

    it("TC003 positive scenario",()=>{
        login.navigate()
        login.title()
    })
    it("TC004 positive scenario",()=>{
        login.navigate()
        login.title()
        login.loginBtn().username().password().submit().assertNameOfUser()
        
    })


})