

function senhaok(){
    const nome = document.querySelector ("input[name=nome");
    const email = document.querySelector("input[name=email");
    const senha = document.querySelector ("input[name=senha]");
    const confirmar_senha = document.querySelector ("input[name=confirmar_senha]");


   //Pedido de preenchimento do nome 
    if(nome.value==''){
        alert ("Preencha o campo nome");
        return false
    }
    
    //Pedido de preenchimento do email
    if(email.value=='')  {
        alert ("Preencha o campo email");
        return false
       
    }
   

    //Pedido de preenchimento da senha
    if(senha.value==''){
        alert("Preencha a senha");
        return false
    }
    
   //Fazendo comparações das senhas
    if(senha.value === confirmar_senha.value){
        alert ("Cadastro Concluído");
        confirmar_senhaset = true
    }else{ 
        alert ("As senhas não se conferem");
        return false
    }
   
}

function loginxx(){
    const email = document.querySelector("input[name=email");
    const senha = document.querySelector ("input[name=senha]");

   //Confimarção de email
    if(email.value ==''){
        alert("Insira seu email")
        return false
    }
   
   //Validando senha
    if(senha.value ==''){
        alert("Senha não validada")
        return false
    }
}
