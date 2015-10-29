import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ember-imdt-tabs'],
  activeTabName: null,

  /*
  Set tabs, and select the initial tab
  */
  setupTabs: Ember.on(
    'didInsertElement',
    function() {
      let activeTabName = this.get('activeTabName');
      let tabs = new Ember.A();

      if (!activeTabName) {
          activeTabName = this
              .$('.ember-imdt-tab-pane:first')
              .attr('data-tab-name');
      }
      this.setActiveTab(activeTabName);
      this.activatePane(activeTabName);
      this.$('.ember-imdt-tab-pane').each(function() {
          let tabName = this.getAttribute('data-tab-name');
          tabs.push({
              active: tabName === activeTabName,
              label: this.getAttribute('data-tab-label'),
              name: tabName
          });
      });
      this.set('tabs', tabs);
    }
  ),

  /*
  Return a pane by name
  */
  paneByName(name){
    return this.$('.ember-imdt-tab-pane[data-tab-name="'+name+'"]');
  },

  /*
  Return a tab by name
  */
  tabByName(name){
    return this.$('.ember-imdt-tab[data-tab-name="'+name+'"]');
  },

  /*
  Activate a pane
  */
  activatePane(tabName){
    let pane = this.paneByName(tabName);

    pane.addClass('active');

    this.set('activeTabName', tabName);
  },

  /*
  Deactivate a pane
  */
  deactivatePane(callback){
    let pane = this.paneByName(this.get('activeTabName'));

    pane.removeClass('active');

    if ('function' === Ember.typeOf(callback)){
        callback();
    }
  },

  /*
  Set the active tab
  */
  setActiveTab(tabName){
    const activeTabName = this.get('activeTabName');

    this.tabByName(activeTabName).removeClass('active');
    this.tabByName(tabName).addClass('active');
  },

  actions: {

    /*
    Change the active tab
    */
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
