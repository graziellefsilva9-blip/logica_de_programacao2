function pesquisa(){

    let menor18 = 0;
    let maior65 = 0;
    let adultos = 0;
    let masculino = 0;
    let feminino = 0;

    for(let i=1;i<=20;i++){

        let nome = prompt("Nome");

        let idade = Number(prompt("Idade"));

        let sexo = prompt("Sexo (M/F)").toUpperCase();

        if(idade<18)
            menor18++;

        else if(idade>=65)
            maior65++;

        else
            adultos++;

        if(sexo=="M")
            masculino++;

        else
            feminino++;

    }

    document.getElementById("resultado").innerHTML=
    "Menores de 18: "+menor18+
    "<br>Acima de 65: "+maior65+
    "<br>Entre 18 e 64: "+adultos+
    "<br>Masculino: "+masculino+
    "<br>Feminino: "+feminino;

}