# Ember-tabs

This is an tab addon for Ember.
These tabs are components, so you can add them on your application by installing the addon and calling for the component.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Usage

All you need to do in order for the addon to display something is add the handlebars to the desired template, like this:

#### Tabs with text on block
```handlebars
<!-- app/templates/application.hbs-->

{{#ember-imdt-tab-panel activeTabName="tab12"}}
    {{#ember-imdt-tab-pane label="Tab One" name="tab11"}}Tab content 1{{/ember-imdt-tab-pane}}
    {{#ember-imdt-tab-pane label="Tab Two" name="tab12"}}Tab content 2{{/ember-imdt-tab-pane}}
    {{#ember-imdt-tab-pane label="Tab Three" name="tab13"}}Tab Content 3{{/ember-imdt-tab-pane}}
{{/ember-imdt-tab-panel}}
```

#### Tabs with templates on block
```handlebars
<!-- app/templates/application.hbs-->

{{#ember-imdt-tab-panel activeTabName="tab12"}}
    {{#ember-imdt-tab-pane label="Tab One" name="tab11"}}
      {{render 'template/path/template1'}}
    {{/ember-imdt-tab-pane}}
    {{#ember-imdt-tab-pane label="Tab Two" name="tab12"}}
      {{render 'template/path/template2'}}
    {{/ember-imdt-tab-pane}}
    {{#ember-imdt-tab-pane label="Tab Three" name="tab13"}}
      {{render 'template/path/template3'}}
    {{/ember-imdt-tab-pane}}
{{/ember-imdt-tab-panel}}
```
 If any of the above templates has a controller created for it, for instance lets say we have the `controller/path/template3`
 if this is the case, the third tab, wich calls for `template/path/template3` will automaticaly have this controller assigned to it.
 Here's an example

 ```javascript
 // app/controller/custom/controllername.js
 import Ember from 'ember';

 export default Ember.Controller.extend({
   foo: "bar"
 });
 ```


 ```handlebars
<!-- app/templates/index.hbs -->
{{#ember-imdt-tab-panel activeTabName="tab"}}
  {{#ember-imdt-tab-pane label="Tab Three" name="tab"}}
    {{render 'custom/controllername'}}
  {{/ember-imdt-tab-pane}}
{{/ember-imdt-tab-panel}}

<!-- app/templates/custom/controllername -->
{{foo}}
```
With the above code, what would be displayed in the tab would be `bar`. This is a very simple example, just to show that the `controller` and `tab` binding is possible.

##### Options

###### tab-panel

attribute | Description
----------|------------
activeTabName | This set the active tab when the component is first rendered on the template

##### tab-pane
attribute | Description
----------|------------
label | This sets the tab name above the pane
name | This sets the tab name, this name must be different for all tabs

## Running

* `ember server`
* Visit your app at http://localhost:4200.
