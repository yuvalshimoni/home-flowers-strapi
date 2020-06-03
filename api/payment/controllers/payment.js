"use strict";

/**
 * A set of functions called "actions" for `payment`
 */

module.exports = {
  notify: async (ctx) => {
    return "yuval hero!";
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
                    <script type='text/javascript'> top.location = 'https://home-flowers.firebaseapp.com/summary';  </script>
                  </head>
                  <body dir="rtl">
                    <div id="root"></div>
                  </body>
                </html>
              `;

    return html;
  },
};
