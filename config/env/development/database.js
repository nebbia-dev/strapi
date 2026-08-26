module.exports = ({ env }) => {
    const connectionString = env('DATABASE_PUBLIC_URL');

    if (!connectionString) {
        throw new Error(
            'DATABASE_PUBLIC_URL is required in development. ' +
            'Start Strapi with `railway run yarn develop` so this instance cannot ' +
            'fall back to a shared local PostgreSQL database.'
        );
    }

    return {
        connection: {
            connection: {
                connectionString,
            },
        },
    };
};
