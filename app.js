var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-2'});
var params = {
  Destination: {
    ToAddresses: [
      'sjeevananthan1712@gmail.com',
    ]
  },
  Message: {
    Body: {
      Html: {
       Charset: "UTF-8",
       Data: "<h1>Hello da bottu</h1>"
      },
      Text: {
       Charset: "UTF-8",
       Data: "TEXT_FORMAT_BODY"
      }
     },
     Subject: {
      Charset: 'UTF-8',
      Data: 'Test email'
     }
    },
  Source: 'mageshsk16@gmail.com',
};
var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();
sendPromise.then(
  function(data) {
    console.log(data.MessageId);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });
