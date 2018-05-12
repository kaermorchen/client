import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  attrs: {
    addonCount: { serialize: false }
  },

  normalizeFindAllResponse(store, primaryModelClass, payload) {
    payload.data.forEach(item => {
      if (item.relationships.subcategories.data) {
        item.relationships.subcategories.data.forEach(({ id }) => {
          const category = payload.data.findBy('id', id);

          if (category) {
            if (category.relationships.parent) {
              category.relationships.parent.data = { type: 'category', id: item.id };
            }

            if (category.relationships.parent) {
              delete category.relationships.parent.links;
            }

            if (category.relationships.subcategories) {
              delete category.relationships.subcategories.links;
            }
          }
        })
      }
    });

    return this._super(...arguments);
  }
});
