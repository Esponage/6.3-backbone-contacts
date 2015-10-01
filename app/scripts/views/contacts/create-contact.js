var CreateContactView = Backbone.View.extend({

  tagName: "form",
  className: "create-contact",

  template: JST['contacts/create-contact'],

  events: {
    'submit': 'createContact'
  },


render: function(){
  this.$el.html(this.template());
  return this;
},

createContact: function(e) {
    e.preventDefault();
    App.contacts.create(this.serializeForm());
  },

  serializeForm: function() {
      var result = {};
      var inputs = this.$el.serializeArray();
      inputs.forEach(function(input) {
        result[input.name] = input.value;
      });
      return result;
    }
});

export default CreateContactView;
