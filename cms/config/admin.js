export default ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "f3ed3be7dc51b1e72b37ff8c25ba50ba"),
  },
});
