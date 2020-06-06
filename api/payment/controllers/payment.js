"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

module.exports = {
  notify: async (ctx) => {
    const { custom } = ctx.request.body;

    const entity = await strapi.services.order.update(
      { id: custom },
      { is_paid: true }
    );

    return ctx;
  },
};
