'use strict';

/**
 * user-managment controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const sendgrid = require('@sendgrid/mail');



module.exports = createCoreController('api::user-managment.user-managment', ({strapi}) => ({
    async costumAction(ctx, next) { // called by GET /hello
        ctx.body = 'Hello World!'; // we could also send a JSON
      },

      async sendTestMail(ctx) {
        sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
    
        const msg = {
          to: 'inverted2logic@gmail.com',
          from: 'pecati-papiri@yandex.com',
          subject: 'Test Email from Strapi',
          text: 'This is a test email sent from Strapi using SendGrid.',
          // Optionally include HTML content, templates, etc.
        };
    
        try {
          await sendgrid.send(msg);
          ctx.send({ message: 'Email sent successfully!' });
        } catch (error) {
          ctx.send({ error: 'Failed to send email.', details: error });
        }
      }

})
);

