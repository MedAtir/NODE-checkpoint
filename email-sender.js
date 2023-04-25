var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'smo.atir@gmail.com',
    pass: 'rslhimrkiqiazkmr'
  }
});

var mailOptions = {
  from: 'smo.atir@gmail.com',
  to: 'yelmouss.devt@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 