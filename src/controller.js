const axios  = require('axios');
const fetch = require('node-fetch');


//Hago dos fetch para obtener la informacion
//Luego agrego la informacion correspondiente de cada fetch a un objeto que retorno
//
const getUser = async (usuario) => {
  //TODO user logic
  let totalAmigos = 0;
  let totalPPP = 0;
  let usuarioObjeto = {};

  const res = await axios.get('https://mauvelous-leopard-5257.twil.io/friend-detail?username='+usuario)

  res.data.friends.forEach(element => {
    totalAmigos+=1;
});
  usuarioObjeto = {
    username: "joe_example",
    plays: totalPPP,
    friends: totalAmigos,
    tracks: [],
    uri: res.data.uri
    };

  const res1 = await axios.get('https://mauvelous-leopard-5257.twil.io/plays-detail?username='+usuario)

    res1.data.plays.forEach(element => {
      totalPPP+=1;
  });
  usuarioObjeto = {
    username: usuario,
    plays: totalPPP,
    friends: totalAmigos,
    tracks: res1.data.plays,
    uri: res.data.uri
    };
  console.log(usuarioObjeto)
  

  return usuarioObjeto;
};

module.exports = { getUser };
