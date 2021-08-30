//settings variables
var loginDiv = document.getElementById("login");
var registerDiv = document.getElementById("register");
var btn = document.getElementById("btn");
const login_btn = document.getElementById("loginbtn");
const register_btn = document.getElementById("registerbtn");
register_btn.classList.add("selectedButton");
const login_submit = document.getElementById("login-Submit");
const register_submit = document.getElementById("register-submit");
const form_register = document.getElementById("register")
const fName = document.getElementById("fName")
const lName = document.getElementById("lName")
const address = document.getElementById("address")
const city = document.getElementById("city")
const state = document.getElementById("state")
const zip = document.getElementById("zip")
const dob = document.getElementById("dob")
const phone = document.getElementById("phone")
const emailR = document.getElementById("emailR")
const password = document.getElementById("password")
const form_required = document.getElementById("required")
const formBox_register = document.getElementById("form-box")


//function checks to make sure the register form has right format from user input
function checkInputs(){
    const fNameValue = fName.value.trim();
    const lNameValue = lName.value.trim();
    const addressValue =address.value.trim();
    const cityValue =city.value.trim();
    //const vValue =state.value.trim();
    const zipValue = zip.value.trim();
    const dobValue = dob.value.trim();
    const phoneValue = phone.value.trim();
    const emailRValue = emailR.value.trim();
    const passwordValue = password.value.trim();
    
    if(fNameValue === '')
    {
        setErrorFor(fName)
    }else{
        setSuccessFor(fName);
    }

    if(lNameValue === '')
    {
        setErrorFor(lName)
    }else{
        setSuccessFor(lName);
    }

    if(addressValue === '')
    {
        setErrorFor(address)
    }else{
        
        setSuccessFor(address);
    }

    if(cityValue === '')
    {
        setErrorFor(city)
    }else{
        
        setSuccessFor(city);
    }

    if(zipValue === '')
    {
        setErrorFor(zip)
    }else{
        
        setSuccessFor(zip);
    }

    if(dobValue === '')
    {
        setErrorFor(dob)
    }else{
        
        setSuccessFor(dob);
        console.log(dobValue)
    }

    if(phoneValue === '')
    {
        setErrorFor(phone)
    }else{
        
        setSuccessFor(phone);
    }

    if(emailRValue === '')
    {
        setErrorFor(emailR)
    }else if(!isEmail(emailRValue)){
        setErrorFor(emailR)
        
    }else{
        setSuccessFor(emailR);
    }

    if(passwordValue === '')
    {
        setErrorFor(password)
    }else{
        setSuccessFor(password);
    }
}
//changes class name to error to set the css 
function setErrorFor(input){
    const form_required = input.parentElement;
    form_required.className = 'required error';
    
}

//changes class name to success to set the css 
function setSuccessFor(input){
    const form_required = input.parentElement;
    form_required.className = 'required success';
}

//changes class name back to default to set the css and clears all user-input 
function resetFormRegister(){
    var success = document.getElementsByClassName("required success");
    var error = document.getElementsByClassName("required error");
    var i;

    for(i = 0; i < success.length;i){
        success[i].className = "required"
    }

    for(i = 0; i < error.length;i){
        error[i].className = "required"
    }
    fName.value = "";
    lName.value ="";
    address.value ="";
    city.value ="";
    zip.value ="";
    dob.value ="";
    phone.value ="";
    emailR.value ="";
    password.value ="";
    
}

   //validates email address
function isEmail(emailR){
return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailR));
}

// changes class name so css gets applied to adjust form-box for register
function registerFormBox(){
   
    formBox_register.className = "form-box register"
    
}

// changes class name so css gets applied to adjust form-box for login
function loginFormBox(){
   
    formBox_register.className = "form-box"
    
}

//adds style to transition to register page  
function register(){
    loginDiv.style.left = "-400px";
    registerDiv.style.left = "50px";
    btn.style.left = "110px";
    login_btn.classList.add("selectedButton");
    register_btn.classList.remove("selectedButton");
}

//adds style to transition to login page
function login(){
    loginDiv.style.left = "50px";
    registerDiv.style.left = "450px";
    btn.style.left = "0px";
    register_btn.classList.add("selectedButton");
    login_btn.classList.remove("selectedButton");

}



function loginSubmit(){
    window.location.replace("http://127.0.0.1:5500/RockPaperScissors.html");
    
       
}
//validates inputs when submitting registry fields
registerDiv.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkInputs();
    
    
})

//calls functions for the login tab
login_btn.addEventListener('click', function(){
login();
loginFormBox();
resetFormRegister();
})

//calls functions for the register tabs
register_btn.addEventListener('click', function(){
    register();
    registerFormBox();
    })

login_submit.addEventListener('click', function(){
    loginSubmit();
    
    
})

register_submit.addEventListener('click', function(){
    
})

