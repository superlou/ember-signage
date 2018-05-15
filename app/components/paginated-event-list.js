import Component from '@ember/component';
import {task, timeout} from 'ember-concurrency';

export default Component.extend({
  router: Ember.inject.service(),

  paginatedEvents: Ember.computed('events', 'currentPage', function() {
    var page = this.get('currentPage');
    var limit = this.get('pageLimit');
    return this.get('events').slice(limit * page, limit * (page + 1));
  }),

  advancePage: task(function * () {
    var pageCount = Math.ceil(this.get('events').length / this.get('pageLimit'));
    for (var i = 0; i < pageCount; i++) {
      this.set('currentPage', i);
      yield timeout(5000);
    }

    if (this.get('transitionTo')) {
        this.get('router').transitionTo(this.get('transitionTo'));
    }
  }),

  init: function() {
    this._super();
    this.get('advancePage').perform();
  }
});
