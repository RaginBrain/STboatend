module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/any',
        handler: 'user-managment.costumAction',
        config: {
            auth:false,
        }
      },
      {
        method: 'GET',
        path: '/test2',
        handler: 'user-managment.sendTestMail',
        config: {
            auth:false,
        }
      },
      {
        method: 'POST',
        path: '/send-booking-email',
        handler: 'user-managment.sendBookingEmail',
        config: {
            auth: false,
        }
      }
    ]
  }