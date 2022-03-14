const enterButton = document.getElementById('enter');
const input = document.getElementById('inputText');
const table = document.getElementById('table');
const tbody = document.getElementById('body-table');
const message = document.getElementById('message');

enterButton.addEventListener('click', (event) => {
  //Implementar lógica del button submit
  alert('Implementar lógica del button submit');
  let element = document.getElementById("inputText").value;
  getUser(element);
  
  event.preventDefault();
});


/**
 * Llamado al backend con queryParam
 * @param {*} username
 */
async function getUser(username) {
  
    const resp = await fetch(`api/users/${username}`);
  const data = await resp.json();
  console.log('data from back', data);
  let elemento = document.getElementById("card-body");
  let actual = `
    <p>Username: ${data.username}</p> <br>
    <p>Friends: ${data.friends}</p> <br>
    <p>Plays: ${data.plays}</p> <br>

  `;
  console.log(data.tracks)
  let nuevoArreglo = [];

  data.tracks.forEach(element => {
    
  });



  console.log("arreglo tracks")

  let elementoTracks = document.getElementById("body-table");
  let actual2 = `
    <p>Tracks: ${data.tracks}</p> <br>
  `;  
  elementoTracks.innerHTML=actual2;
  elemento.innerHTML=actual;
  
  
  //printValues(data);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
