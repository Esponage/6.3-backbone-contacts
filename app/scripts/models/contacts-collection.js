import Contacts from 'models/contacts';

var ContactsCollection = Backbone.Collection.extend({
  model: Contacts,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/contacts"
});


export default ContactsCollection;
