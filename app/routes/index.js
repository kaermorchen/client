import { hash } from 'rsvp';
import Route from '@ember/routing/route';

import RouteWithSearch from '../mixins/route-with-search';
import measure from '../utils/measure';

export default Route.extend(RouteWithSearch, {
  model() {
    return hash({
      topAddons: this.get('store').query('addon', { page: { limit: 10 }, filter: { top: true }, sort: 'ranking' }),
      newAddons: this.get('store').query('addon', { page: { limit: 10 }, sort: '-publishedDate' }),
      recentlyScoredAddons: this.get('store').query('addon', { page: { limit: 10 }, filter: { recentlyReviewed: true } })
    });
  },

  afterModel: measure
});
