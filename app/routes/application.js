import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  beforeModel() {
    this.get('session').fetch();
  },

  model() {
    return hash({
      categories: this.get('store').findAll('category', { include: 'subcategories' })
    });
  },

  title(tokens) {
    let tokenStr = tokens.join('');
    if (tokenStr) {
      return `${tokenStr} - Ember Observer`;
    } else {
      return 'Ember Observer';
    }
  },

  actions: {
    login(email, password) {
      let route = this;
      this.get('session').open(email, password).then(function () {
        route.transitionTo('admin.index');
      });
    }
  },
});
