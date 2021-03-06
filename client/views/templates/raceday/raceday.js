Template.raceday.helpers ({

  followee: function() {
    var followee_ids = [];
    var user = Meteor.user();

    if (user) {

      for (id in Meteor.user().profile.race.raceDate.followee) {
        followee_ids.push(Meteor.user().profile.race.raceDate.followee[id]);
      }
    }
    return followee_ids;
    }



});

Template.raceday.helpers ({

  getHorse: function(race, horse, id) {
    var user = Meteor.users.find( { _id: id } );
    if (user.count() == 0)
      return '';
    else
      return user.fetch()[0].profile.race.raceDate[race][horse];
  },

  getimage: function(id) {
    var user = Meteor.users.find( { _id: id } );
    if (user.count() == 0)
      return '';
    else
      return user.fetch()[0].profile.url;
  },

  key_value: function(context, options) {
     var result = [];
      _.each(context, function(value, key, list){
      result.push({race:key+1, followee:value});
      })
    return result;
  }

});






