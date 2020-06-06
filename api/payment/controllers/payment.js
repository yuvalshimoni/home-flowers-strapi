"use strict";

module.exports = {
  notify: async ({ request }) => {
    const id = request.body.custom;

    const entity = await strapi.services.order.update(
      { id },
      { is_paid: true }
    );

    return request;
  },
};
