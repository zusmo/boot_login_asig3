class user{
    obtain (){
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        this.p(email, password);
    }

    p = function(email, password){
        function verificar(){
            if( email == "zusmo" && password == "1234"){
                alert("Bienvenido " + email);
            }else{
                alert("Usuario Invalido");  
            }
        }
        verificar();
    };
}

var eject = new user();