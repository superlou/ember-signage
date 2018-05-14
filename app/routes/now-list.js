import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {'time': '7:00am', 'name': 'Event 1', 'location': 'Panel 402'},
      {'time': '8:00am', 'name': 'Event 2 Has a Long Name'},
      {'time': '9:20am', 'name': 'Event 3'},
      {'time': '11:15am', 'name': 'Event 4', 'location': 'Panel 201'},
    ]
  },
  beforeModel() {
    var _this = this;
    Ember.run.later(function() {
      _this.transitionTo('upcoming-list')
    }, 10000);
  }
});
