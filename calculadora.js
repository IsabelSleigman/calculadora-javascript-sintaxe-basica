function calculadora(){
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma ( + )\n 2 - Subtração ( - )\n 3 - Divisão ( / )\n 4 - Divisão Inteira ( % )\n 5 - Multiplicação ( * )\n 6 - Potenciação ( ** )\n 7 - Sair'));
    console.log(operacao);

    if(!operacao || operacao < 1 && operacao >= 8){
        alert('Operação Invalida!');
        calculadora();
    }else if(operacao == 7){
        alert('Até mais!');
    }else{

        let valor1 = Number(prompt('Insira o primeiro valor:'));
        let valor2 = Number(prompt('Insira o segundo valor: '));
        let resultado;

        if(!valor1 || !valor2){
            alert("Parametros invalidos");
            calculadora();
        }else{

            function soma(){
                resultado = valor1 + valor2;
                alert(`${valor1} + ${valor2} = ${resultado}`);
                novaOperacao()
            }
            function subtracao(){
                resultado = valor1 - valor2;
                alert(`${valor1} - ${valor2} = ${resultado}`);
                novaOperacao()
            }
            function divisao(){
                resultado = valor1 / valor2;
                alert(`${valor1} / ${valor2} = ${resultado}`);
                novaOperacao()
            }
            function divisaoInteira(){
                resultado = valor1 % valor2;
                alert(`O resto da divisão entre ${valor1} e ${valor2} é igual a ${resultado}`);
                novaOperacao()
            }
            function multiplicacao(){
                resultado = valor1 * valor2;
                alert(`${valor1} * ${valor2} = ${resultado}`);
                novaOperacao()
            }
            function potenciacao(){
                resultado = valor1 ** valor2;
                alert(`${valor1} elevado a ${valor2} é igual a ${resultado}`);
                novaOperacao()
            }
    
            function novaOperacao(){
                let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
    
                if(opcao == 1){
                    calculadora();
                }else if(opcao == 2 ){
                    alert('Até mais!');
                }else{
                    alert('Digite uma opção valida!');
                    novaOperacao();
                }
            }
    
        }

        switch (operacao) {
            case 1:
                soma()
                break;
            case 2:
                subtracao()
                break;
            case 3:
                divisao()
                break;
            case 4:
                divisaoInteira()
                break;
            case 5:
                multiplicacao()
                break;
            case 6:
                potenciacao()
                break;
            default:
                break;
        }
    }
}

calculadora();