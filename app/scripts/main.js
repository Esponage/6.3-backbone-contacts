import ContactsCollection from 'models/contacts-collection';
import CreateContactView from 'views/contacts/create-contact';

window.App = {};

$(document).ready(function(){


  App.contacts = new ContactsCollection();

window.createContactView = new CreateContactView();
  $('#container').append(createContactView.render().el);


  $('.submit-button').on('click', function(){
    console.log(App.contacts.fetch());
  });

  function renderContacts(display) {
    // $('.js-people').append(JST.person(person.toJSON()));
      $('.contact-list').append(JST.create-contact(create-contact.toJSON()));
    }
});
