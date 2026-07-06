function divisores(){

    let numero = Number(document.getElementById("numero").value);

    let texto = "";

    for(let i=1;i<=numero;i++){

        if(numero%i==0){

            texto += i + " ";

        }

    }

    document.getElementById("resultado").innerHTML = texto;

}