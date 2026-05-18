const API_URL = "https://nodejs118.dszcbaross.edu.hu/api/auth";

const regName = document.querySelector("#regName");
const regEmail = document.querySelector("#regEmail");
const regPsw = document.querySelector("#regPsw");
const regBtn = document.querySelector("#regBtn");

const loginEmail = document.querySelector('#loginEmail')
const loginPsw = document.querySelector('#loginPsw')
const LoginBtn = document.querySelector('#LoginBtn')
const testLoginBtn = document.querySelector('#testLoginBtn')
const logoutBtn = document.querySelector('#logoutBtn')


regBtn.addEventListner("click", register);


LoginBtn.addEventListener('click', login)

testLoginBtn.addEventListener('click', test)

logoutBtn.addEventListener('click', logout)

async function register() {
  const name = regName.value;
  const email = regEmail.value;
  const psw = regPsw.value;

  //console.log(name, email, psw);
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, email, psw }),
    });

    const data = await response.json();
    console.log(data)

    if (!response.ok){
        alert('hiba')
    }

const registerMessage = document.querySelector('#registerMessage')
registerMessage.textContent = data.message

  } catch (error) {
    console.log(`Nem sikerült kapcsolódni a szerverhez:  ${error}`);
  }
}

async function login() {
    try {
        const response = await fetch(`${API_URL}/login`,{
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({email, psw})
        })
        const data =await response.json();
        console.log(data)

        if (!response.ok){
            alert('hiba')
        }

        const loginMessage = document.querySelector('#loginMessage')
        loginMessage.textContent= data.message
    } catch (error) {
        console.log(`Nem sikerült bejelentkezni: ${error}`)
    }
}

async function logout() {
    
}

async function testLogin() {
    
}