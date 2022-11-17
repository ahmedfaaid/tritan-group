module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  url: env("ADMIN_URL", "/dashboard"),
});
