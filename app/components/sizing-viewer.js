import Component from '@ember/component';
import ResizeAware from 'ember-resize-aware/mixins/resize-aware';

export default Component.extend(ResizeAware, {
  didResize(width, height) {
    var el = this.get('element').children[0];
    var scale = width / 1280.0;
    el.setAttribute('style', 'transform: scale(' + scale + ')');
  },

  didInsertElement() {
    this._super();
    var el = this.get('element').children[0];
    var scale = this.get('element').offsetWidth / 1280.0;
    console.log(scale);
    el.setAttribute('style', 'transform: scale(' + scale + ')');
  }
});
