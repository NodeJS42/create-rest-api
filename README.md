# create-rest-api

Un fichier de quotes est fourni.

Vous pouvez vous aider d'ExpressJS 
- https://www.npmjs.com/package/express
- http://expressjs.com/
 (on l'utilisera plus tard dans la MEAN stack pour faire une appli complete)
 
 Le but est de realiser une API REST : 
- http://searchsoa.techtarget.com/definition/REST
- https://en.wikipedia.org/wiki/Representational_state_transfer

et de faire du CRUD dessus (create, read, update and delete).
Commencez par faire vos methodes, ajouter des attributs a l'objet, modifier, supprimer.
En utilisant Express, vous devez implementer ces methodes :
``` javascript
// respond with "Hello World!" on the homepage
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// accept POST request on the homepage
app.post('/', function (req, res) {
  res.send('Got a POST request');
});

// accept PUT request at /user
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

// accept DELETE request at /user
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});
```

