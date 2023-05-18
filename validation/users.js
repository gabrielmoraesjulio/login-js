function Register(){
    let newUser = document.querySelector("#newUser").value
    let newPassword = document.querySelector("#newPassword").value
    let confirmPassword = document.querySelector("#confirmPassword").value

    if(newPassword != confirmPassword) {
        let errorMsg = document.querySelector("#errorMsg")

        errorMsg.innerHTML = `Error please try again`
    } else if (!newUser) {
        let errorMsg = document.querySelector("#errorMsg")
        
        errorMsg.innerHTML = `Error please try again`
    } else {
        let errorMsg = document.querySelector("#errorMsg")
        
        errorMsg.innerHTML = `User created`
    }
}

function Login(){
    let newUser = document.querySelector("#newUser").value
    let newPassword = document.querySelector("#newPassword").value
    let user =  document.querySelector("#user").value
    let password = document.querySelector("#password").value

    if (!user || !password) {
        let loginError = document.querySelector("#loginError")

        loginError.innerHTML = `Error please try again`
    } else if (user != newUser) {
        let loginError = document.querySelector("#loginError")

        loginError.innerHTML = `Error please try again`
    } else if (password != newPassword) {
        let loginError = document.querySelector("#loginError")

        loginError.innerHTML = `Error please try again`
    } else if (user === newUser && password === newPassword) {
        let loginError = document.querySelector("#loginError")

        loginError.innerHTML = `LOGIN SUCCESSFULLY`
    }
}