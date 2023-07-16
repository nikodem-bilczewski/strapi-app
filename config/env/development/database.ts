export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "strapi-database.cxcmwaj0diye.eu-north-1.rds.amazonaws.com"
      ),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USERNAME", ""),
      password: env("DATABASE_PASSWORD", ""),
    },
    useNullAsDefault: true,
  },
});
