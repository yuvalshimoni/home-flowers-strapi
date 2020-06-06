"use strict";

module.exports = {
  notify: async (ctx) => {
    const id = ctx.request.body.external_data;

    const entity = await strapi.services.order.update(
      { id },
      { is_paid: true }
    );

    return ctx.request.body;
  },
};
