import Ember from 'ember';

export default Ember.Component.extend({

  activeTabName: null,

  setupTabs: Ember.on(
    'didInsertElement',
    function() {
      let initialTabName = this.get('initialTabName');
      let tabs = new Ember.A();

      if (!initialTabName) {
          initialTabName = this
              .$('.ember-imdt-tab-pane:first')
              .attr('data-tab-name');
      }
      this.setActiveTab(initialTabName);
      this.activatePane(initialTabName);
      this.$('.ember-imdt-tab-pane').each(function() {
          let tabName = this.getAttribute('data-tab-name');
          tabs.push({
              active: tabName === initialTabName,
              label: this.getAttribute('data-tab-label'),
              name: tabName
          });
      });
      this.set('tabs', tabs);
    }
  ),

  paneByName(name){
    return this.$('.ember-imdt-tab-pane[data-tab-name="'+name+'"]');
  },

  tabByName(name){
    return this.$('.ember-imdt-tab[data-tab-name="'+name+'"]');
  },

  activatePane(tabName){
    let pane = this.paneByName(tabName);

    pane.addClass('active');

    this.set('activeTabName', tabName);
  },

  deactivatePane(callback){
    let pane = this.paneByName(this.get('activeTabName'));

    pane.removeClass('active');

    if ('function' === Ember.typeOf(callback)){
        callback();
    }
  },

  setActiveTab(tabName){
    const activeTabName = this.get('activeTabName');

    this.tabByName(activeTabName).removeClass('active');
    this.tabByName(tabName).addClass('active');
  },

  actions: {
    change(tabName){
        let activeTabName = this.get('activeTabName');

        if (activeTabName !== tabName){
            this.setActiveTab(tabName);
            this.deactivatePane(() => {
                this.activatePane(tabName);
            });
        }
    }
  },

});
