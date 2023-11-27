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
    },

    async sendBookingEmail(ctx) {
      sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
      

       // Extract email addresses from request body
       
      // Validate and extract email addresses
      const { 
        bookerMail, 
        tourProviderMail,
        bookerName, 
        tourName, 
        date, 
        startTime, 
        duration, 
        startLocation, 
        tourProvider, 
        passengerCount, 
        totalPrice, 
        note, 
        tourProviderCompanyName 
      } = ctx.request.body;

  
      const msg = {
        to: [bookerMail, tourProviderMail],
        from: 'pecati-papiri@yandex.com',
        subject: `Rezervacija ${bookerName}, ${tourName}, ${date}, ${startTime}`,
        html: `Poštovani,<br><br>` +
          `Vaša rezervacija je uspješno zaprimljena.<br><br>` +
          `Detalji Vaše rezervacije:<br><br>` +

          `<div style="font-size: 1.2em; border-top: 2px dotted; border-bottom: 2px dotted;">` + // Increase font size and add dotted border
          `- Rezervaciju napravio: ${bookerName}<br>` +
          `- Naziv : <strong>${tourName}</strong><br>` +
          `- Datum : <strong>${date}</strong><br>` +
          `- Vrijeme polaska: <strong>${startTime}</strong><br>` +
          `- Trajanje : ${duration}<br>` +
          `- Mjesto polaska: ${startLocation}<br>` +
          `- Brodar: ${tourProvider}<br>` +
          `- Broj putnika: <strong>${passengerCount}</strong><br>` +
          `- Ukupna cijena: <strong>${totalPrice}€</strong><br><br>` +
          `Napomena bookera: ${note}<br>` +
          `</div> <br>` + // Close the div with increased font size

          `Zahvaljujemo na Vašoj rezervaciji.<br><br>` +
          `Srdačan pozdrav,<br>` +
          `STboats`
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

