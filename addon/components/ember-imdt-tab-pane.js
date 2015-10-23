import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['ember-imdt-tab-pane'],

  attributeBindings: [
      'data-tab-label',
      'data-tab-name'
  ],

  label: null,
  name: null,

  'data-tab-label': Ember.computed.alias('label'),
  'data-tab-name': Ember.computed.alias('name')

});
