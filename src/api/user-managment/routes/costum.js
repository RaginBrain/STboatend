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
      }
    ]
  }