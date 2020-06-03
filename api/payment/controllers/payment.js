"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

// <script type='text/javascript'> top.location = 'https://home-flowers.firebaseapp.com/summary';  </script>
module.exports = {
  notify: async (ctx) => {
    const { custom } = ctx.request.body;

    await strapi.services.order.update({ id: custom }, { is_paid: true });

    return sanitizeEntity(entity, { model: strapi.models.order });
  },
  success: async (ctx) => {
    const html = `
              <!DOCTYPE html>
                <html lang="he">
                  <head>
                    <meta charset="utf-8" />
                    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#000000" />
                    <meta name="description" content="Modern way to get flowers" />
                    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

                    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

                    <title>Home Flowers</title>
                    </head>
                    <body dir="rtl">
                   
                    <script>
                      window.top.postMessage(
                        JSON.stringify({
                          error: false,
                          message: 'Here we go'
                        }),
                        '*'
                      );
                    </script>
                    <div id="root"></div>
                  </body>
                </html>
              `;

    return html;
  },
};
