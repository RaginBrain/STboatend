
module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'pecati-papiri@yandex.com',
        defaultReplyTo: 'info@stboats.hr',
      },
    },
  },
  // ...
});