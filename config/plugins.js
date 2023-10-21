module.exports = ({ env }) => ({
    email: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'ante@alterego.hr',
        defaultReplyTo: 'info@stboats.hr',
      },
    },
  });