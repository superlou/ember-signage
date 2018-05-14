import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {'time': '1:15pm', 'name': 'Event 8', 'location': 'Main Events'},
      {'time': '2:00pm', 'name': 'Go Home', 'location': 'Not Here'},
    ]
  },
  beforeModel() {
    var _this = this;
    Ember.run.later(function() {
      _this.transitionTo('now-list')
    }, 10000);
  }
});
