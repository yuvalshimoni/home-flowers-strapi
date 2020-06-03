"use strict";

/**
 * A set of functions called "actions" for `payment`
 */

module.exports = {
  notify: async (ctx) => {
    return "yuval hero!";
  },
  success: async (ctx) => {
    return "<script type='text/javascript'> top.location = 'https://home-flowers.firebaseapp.com/summary';  </script>";
  },
};
