import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://images-api.nasa.gov'
});
