var Contacts = Backbone.Model.extend({
  defaults: function(){
    return {
      email: "",
      name: "",
      phone_number: "",
      twitter_username: "",
      linkedin: ""
    };
},
});


export default Contacts;
