const loginPage = document.getElementById("loginPage");
const signUpPage = document.getElementById("signUpPage");

const loginBtn = document.getElementById("loginBtn");
const signUpBtn = document.getElementById("signUpBtn");

const signUpSubmit = document.getElementById("signUpSubmit");

const errorUsername = document.getElementById("error-username");
const errorEmail = document.getElementById("error-email");
const errorPassword = document.getElementById("error-password");
const errorAge = document.getElementById("error-age");
const errorGender = document.getElementById("error-gender");

signUpBtn.onclick = function(){
    if(!signUpPage.classList.contains("active")){
        signUpBtn.classList.toggle("active-switch");
        loginBtn.classList.toggle("active-switch");

        signUpPage.classList.toggle("active");
        loginPage.classList.toggle("active");

        errorUsername.textContent = "";
        errorEmail.textContent = "";
        errorPassword.textContent = "";
        errorAge.textContent = "";
        errorGender.textContent = "";
    }
};

loginBtn.onclick = function(){
    if(!loginPage.classList.contains("active")){
        signUpBtn.classList.toggle("active-switch");
        loginBtn.classList.toggle("active-switch");
        loginPage.classList.toggle("active");
        signUpPage.classList.toggle("active");
    }
};

signUpSubmit.onclick = function(){
    const getUsername = document.getElementById("username");
    const getEmail = document.getElementById("email");
    const getPassword = document.getElementById("password");
    const getAge = document.getElementById("age");
    const getGender = document.getElementById("gender");

    let isValid = true;

    //All validation
    if(!getUsername.value || !getEmail.value || !getPassword.value || !getAge.value || getGender.value === "(none)"){
        alert("Please fill all fields");
    }

    //Username validation
    if(getUsername.value.trim().length <= 4){
        isValid = false;
        errorUsername.textContent = "Username must be longer than 4 letters";
    } else{
        errorUsername.textContent = "";
    }


    //Email validation
    if(!getEmail.value.trim().endsWith("@gmail.com")){
        isValid = false;
        errorEmail.textContent = "Email must ends with @gmail.com";
    } else{
        errorEmail.textContent = "";
    }


    //Password validation
    if(getPassword.value.trim().length < 8){
        isValid = false;
        errorPassword.textContent = "Password must have at least 8 characters";
    } else{
        errorPassword.textContent = "";
    }


    //Age validation
    if(getAge.value <= 0){
        isValid = false;
        errorAge.textContent = "Age can't be zero or negative";
    } else{
        errorAge.textContent = "";
    }


    //Gender validation
    if(getGender.value === "(none)"){
        isValid = false;
        errorGender.textContent = "Gender must be selected";
    } else{
        errorGender.textContent = "";
    }
}