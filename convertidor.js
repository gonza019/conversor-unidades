function convertidor(){
  let valor = document.getElementById('input').value;
  let baseuno = document.getElementById('from').value;
  let basedos = document.getElementById('to').value;

  valor = valor.split("");
  valor.reverse([i]);

  var potencia = 0;
  var numero = 0;

  for (var i = 0; i < valor.length; i++) {

    if(baseuno == "16")
    {
      switch(valor[i]){

        case "A":
         valor[i] = ("10");
        break;

        case "B":
          valor[i] = ("11");
        break;

        case "C":
         valor[i] = ("12");
        break;

        case "D":
          valor[i] = ("13");
        break;

        case "E":
          valor[i] = ("14");
        break;

        case "F":
          valor[i] = ("15");
        break;

        default:

        break;
      }
    }

    valor[i] = Number(valor[i]);
    potencia = Math.pow(baseuno,i);
    numero = numero + valor[i] * potencia;
  }



  var resultado = [];
  var añadir = "";

  do{
    añadir = numero % basedos;

    numero = numero / basedos;

    numero = Math.floor(numero);

    console.log(añadir);


    if(basedos == "16"){

      switch(añadir){

        case 10:
         resultado.push("A");
        break;

        case 11:
         resultado.push("B");
        break;

        case 12:
         resultado.push("C");
        break;

        case 13:
         resultado.push("D");
        break;

        case 14:
         resultado.push("E");
        break;

        case 15:
         resultado.push("F");
        break;

        default:
         resultado.push(añadir);
        break;
      }

    }

    else{
      resultado.push(añadir);
    }




  }while(numero != 0);
  resultado.reverse();
  resultado = resultado.join("");

  document.getElementById('resultado').innerHTML = resultado;
}
