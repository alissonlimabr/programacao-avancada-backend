/* Desafio do feriadão: Crie um documento HTML com apenas um elemento ul. No documento em JavaScript, utilize fetch (é uma API nativa do ES6 para requisições HTTP através de Promises) para pegar o conteúdo da página http://jsonplaceholder.typicode.com/users. Em seguida, dentro do fetch, utilize um then para converter o conteúdo da página para um objeto JSON e outro then para mapear o vetor com os dados do objeto JSON, puxando o nome e sebrenome de cada dado para a lista no HTML. Não se esqueça de fazer o catch no fetch indicando erro, quando houver.
Inicie suas pesquisas para resolver ao problema em https://www.devmedia.com.br/javascript-fetch/41206.
*/

fetch ('http://jsonplaceholder.typicode.com/users', { method: 'GET' }, { mode: 'no-cors' })
    .then(resposta => resposta.json())
    .then(json => carregarElementosHTML(json))
    .catch(err => console.log(err.message))

      
    function carregarElementosHTML(json) {
      const table = document.createElement('table');
      for (let usuario of json) {
        const tr = document.createElement('tr');        
        
        let td = document.createElement('td');
        td.innerHTML = usuario.name
        tr.appendChild(td);

        let td2 = document.createElement('td');
        td2.innerHTML = usuario.username;
        tr.appendChild(td2);

        table.appendChild(tr);
      }

      const resultado = document.querySelector('.usuarios');
      resultado.appendChild(table);
    }

    // *** Outro método por meio do axios ***

    // axios.get('https://jsonplaceholder.typicode.com/users')
    //   .then(resposta => carregarElementosHTML(resposta.data))
    //   .catch (err => console.log(err.message))
