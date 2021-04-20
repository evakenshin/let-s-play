
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['hbKr8bGc1MVK9yL4CqNutH'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  