module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bddfed476f68bfa7c4aceb372d63b0cc'),
  },
});
