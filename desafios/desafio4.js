/* utilize a classe Date para, dentro de uma função, exibir via console uma string com o dia, mês e ano atual. Em outras palavras: crie uma função sem parâmetros, crie um objeto do tipo Date dentro dela e utilize os métodos getHours, getMinutes e getSeconds para montar uma string com a hora, minuto e segundo. Após a função, acrescente o código setTimeout(nomeDaFuncao, 5000) três vezes. Teste com o comando node ./nomedoarquivo.js via terminal. Perguntas retóricas: o que acontece? Qual o motivo disso acontecer? */

function horasData () {
  let horasDate = new Date()

  console.log(`${horasDate.getHours()}h ${horasDate.getMinutes()}m ${horasDate.getSeconds()}s`)

}

setTimeout(horasData)

/* Agora, utilize o método setInterval apenas uma vez no lugar de setTimeout e responda às mesmas perguntas. */
setInterval(horasData, 5000);