"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

module.exports = {
  notify: async (ctx) => {
    const id = "47";
    // const { custom } = ctx.request.body;

    const entity = await strapi.services.order.update(
      { id },
      { is_paid: true }
    );

    return ctx;
  },
};
