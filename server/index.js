const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      port = 3000,
      ctrl = require(__dirname + '/controllers/messages_controller.js');
      








      app.use(bodyParser.json());

      const messageBaseUrl = '/api/messages';

      app.get(messageBaseUrl, ctrl.read);
      app.post(messageBaseUrl, ctrl.create);
      app.put(`${messageBaseUrl}/:id`, ctrl.update);
      app.delete(`${messageBaseUrl}/:id`, ctrl.delete);





      app.listen(port, () => {
          console.log(`Server listening on port ${port}`)
        })