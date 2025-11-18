function fazerlogin(){
    let login = document.getElementById('login').value
    let senha = document.getElementById('senha').value

    let loginCadastro = localStorage.getItem('login')
    let senhaCadastro = localStorage.getItem('senha')

    if(login === loginCadastro && senha === senhaCadastro){
        localStorage.setItem('nome', login)
    }else{
        alert('Login ou senha Incorreto!')
    }
}

function fazercadastro(){
    let nome = document.getElementById('nome').value
    let dataNasc = document.getElementById('dataNasc').value
    let email = document.getElementById('email').value
    let login = document.getElementById('login').value
    let senha = document.getElementById('senha').value  

    localStorage.setItem('nome', nome)
    localStorage.setItem('dataNasc', dataNasc)
    localStorage.setItem('email', email)
    localStorage.setItem('login', login)
    localStorage.setItem('senha', senha)
}

document.getElementById('perfil').innerHTML = "Olá " + localStorage.getItem('nome')  + "! Seja bem-vindo ao seu perfil."