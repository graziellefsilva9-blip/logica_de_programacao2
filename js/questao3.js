function doacao(){

    let pode = 0;
    let nao = 0;

    for(let i=1;i<=12;i++){

        let idade = Number(prompt("Idade da pessoa "+i));
        let peso = Number(prompt("Peso da pessoa "+i));

        if(idade>=18 && idade<=60 && peso>50){

            alert("Poderá doar sangue.");
            pode++;

        }else{

            nao++;

        }

    }

    document.getElementById("resultado").innerHTML =
    "Podem doar: "+pode+
    "<br>Não podem doar: "+nao;

}