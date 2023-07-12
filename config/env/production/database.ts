export default ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'strapi_database'),
			user: env('DATABASE_USERNAME', 'strapidb_user'),
			password: env('DATABASE_PASSWORD', 'password'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
