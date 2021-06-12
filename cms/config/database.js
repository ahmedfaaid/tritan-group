module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 5544),
        database: env("DATABASE_NAME", "tritan"),
        username: env("DATABASE_USERNAME", "postgres"),
        password: env("DATABASE_PASSWORD", "postgres"),
        // ssl: env.bool('DATABASE_SSL', false),
        ssl:
          process.env.NODE_ENV === "development"
            ? env.bool("DATABASE_SSL", false)
            : {
                rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
              },
      },
      options: {},
    },
  },
});
