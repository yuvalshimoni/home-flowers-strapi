"use strict";

module.exports = {
  notify: async (ctx) => {
    //const id = request.body.custom;

    const entity = await strapi.services.order.update(
      { id: "53" },
      { is_paid: true }
    );

    return ctx;
  },
};
