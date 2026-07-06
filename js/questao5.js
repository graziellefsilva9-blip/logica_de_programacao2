function pesquisa(){

    let quantidade = Number(prompt("Quantos habitantes serão cadastrados?"));

    let totalMasculino = 0;
    let somaSalarioMasculino = 0;

    let mulheres1000a3000 = 0;

    let masc2000 = 0;
    let fem2000 = 0;

    for(let i=1;i<=quantidade;i++){

        let idade = Number(prompt("Idade"));

        let sexo = prompt("Sexo (M/F)").toUpperCase();

        let renda = Number(prompt("Renda"));

        if(sexo=="M"){

            totalMasculino++;
            somaSalarioMasculino += renda;

            if(renda>=2000)
                masc2000++;

        }else{

            if(renda>=1000 && renda<=3000)
                mulheres1000a3000++;

            if(renda>=2000)
                fem2000++;

        }

    }

    let media = 0;

    if(totalMasculino>0)
        media = somaSalarioMasculino/totalMasculino;

    let percMasc = (masc2000/quantidade)*100;

    let percFem = (fem2000/quantidade)*100;

    document.getElementById("resultado").innerHTML=
    "Pessoas entrevistadas: "+quantidade+
    "<br>Média salário masculino: R$ "+media.toFixed(2)+
    "<br>Mulheres com renda entre R$1000 e R$3000: "+mulheres1000a3000+
    "<br>% Masculino com salário ≥ R$2000: "+percMasc.toFixed(2)+"%"+
    "<br>% Feminino com salário ≥ R$2000: "+percFem.toFixed(2)+"%";

}