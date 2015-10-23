import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-imdt-tab-pane', 'Integration | Component | ember imdt tab pane', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ember-imdt-tab-pane}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ember-imdt-tab-pane}}
      template block text
    {{/ember-imdt-tab-pane}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
