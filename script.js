const URL_API = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';
let rooms = [];

// Get na API
(async () => {
  rooms = await fetch(URL_API)
  .then(response => {
    return response.json();
  })
  .then(resp => {
    return resp
  })
  load(rooms);
})();

//Função para construção dos cards
function load(lista) {
  let rooms = document.getElementById('rooms');
  for (let item of lista) {
    let div = document.createElement('div');
    div.className = 'card bg-light col-md-3 my-2 mx-2';
    let img = document.createElement('img');
    img.src = item.photo;
    img.alt = item.name;
    img.className = 'card-img-top mt-1';
    let divBody = document.createElement('div');
    divBody.className = 'card-body';
    let h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.appendChild(document.createTextNode(item.property_type));
    let description = document.createElement('p');
    description.appendChild(document.createTextNode(item.name));
    let price = document.createElement('p');
    price.appendChild(document.createTextNode('Valor: R$ ' + item.price + ',00'));
    divBody.appendChild(h5);
    divBody.appendChild(description);
    divBody.appendChild(price);
    div.appendChild(img);
    div.appendChild(divBody);
    rooms.appendChild(div);
  }
}

