const express = require('express');
const router = express.Router();
const fs = require('fs');
const uuidv4 = require('uuid/v4');

const json_contacts = fs.readFileSync('src/conacts.json', 'utf-8');
let contacts = JSON.parse(json_contacts);

router.get('/', (req, res) => {
  res.render('index', { contacts });
});

router.get('/add', (req, res) => {
  res.render('add');
});
router.post('/Actualizar', (req, res) => {
  const {  nombre, organizacion, cel, numCel, correo, mail,  direccion, fecha, relacion } = req.body;
  contacts.map(function (contact) {
    if(contact.nombre== nombre){
      contact.numCel = numCel;
      contact.organizacion=organizacion;
      contact.cel=cel;
      contact.numCel=numCel;
      contact.correo=correo;
      contact.mail=mail;
      contact.direccion=direccion;
      contact.fecha=fecha;
      contact.relacion=relacion;
    }

    return contact;
  });



  console.log(contacts)

  const json_contacts = JSON.stringify(contacts);
  fs.writeFileSync('src/conacts.json', json_contacts, 'utf-8');
  res.redirect('/')



});
router.get('/delete', (req, res) => {
  res.render('delete');
});
router.post('/delete', (req, res) => {
  const { mail } = req.body;
  contacts.map(function (contact) {
    var index =contacts.indexOf(contact.mail);
    contacts.splice(index, 1);

    return contact;
  });



  console.log(contacts)
  const json_contacts = JSON.stringify(contacts);
  fs.writeFileSync('src/conacts.json', json_contacts, 'utf-8');
  res.redirect('/')




});
router.get('/Actualizar', (req, res) => {
  res.render('Actualizar');
});
router.post('/add', (req, res) => {
  // console.log(req.body);
//  res.send('received');
 // res.send('add');

  const { nombre, organizacion, cel, numCel, correo, mail,  direccion, fecha, relacion} = req.body;

  if (!nombre || !organizacion || !cel || !mail) {
    res.status(400).send("Entries must have a title and body");
    return;
  }

  var contact = {

    nombre,
    organizacion,
    cel,
    numCel,
    correo,
    mail,
    direccion,
    fecha,
    relacion
  };

  // add a new book to the array
  contacts.push(contact);

  // saving the array in a file
  const json_contacts = JSON.stringify(contacts);
  fs.writeFileSync('src/conacts.json', json_contacts, 'utf-8');
  res.redirect('/')


});



module.exports = router;