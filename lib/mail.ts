import { createTransport, getTestMessageUrl } from 'nodemailer';
const transport = createTransport({
  host: process.env.MAIL_HOST || '',
  port: +(process.env.MAIL_PORT || ''),
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const generateEmail = (token: string, to: string) => `
<!DOCTYPE html>
<html>

  <head>
    <title>Password Reset for LILAC</title>
    <style>
      @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,500,600,700,800&display=swap');
      @import url('https://fonts.googleapis.com/css?family=EB+Garamond:400,500,600,700,800&display=swap');

      body,
      html {
        font-family: 'Source Sans Pro', Arial, sans-serif;
      }

      h1,
      h2,
      h3 {
        font-family: 'EB Garamond', Garamond, serif;
      }

      .email-container {
        background-color: #fbfefb;
        color: #333333;
        font-family: Arial, sans-serif;
        padding: 20px;
        line-height: 1.6;
      }

      .email-header {
        background-color: #042A3A;
        color: #FFFFFF;
        padding: 10px;
        text-align: center;
      }

      .email-content {
        padding: 20px;
        background-color: #fff;
      }

      .email-footer {
        background-color: #65475A;
        color: #FFFFFF;
        padding: 10px;
        text-align: center;
      }

      .button {
        background-color: #5AC18E;
        color: #000000;
        padding: 10px 20px;
        text-decoration: none;
        border-radius: 5px;
        display: inline-block;
        margin: 20px 0;
      }

    </style>
  </head>

  <body>
    <div class="email-container">
      <div class="email-header">
        <h1>LILAC</h1>
      </div>
      <div class="email-content">
        <h2>Password Reset Request</h2>
        <p>Hello,</p>
        <p>You recently requested to reset your password for your LILAC account. Click the button below to reset it.</p>
        <a href="${process.env.FRONTEND_URL}/welcome?token=${token}&state=request-password&email=${to}" class="button">Reset Your Password</a>
        <p>If you did not request a password reset, please ignore this email or contact support if you have questions.</p>
      </div>
      <div class="email-footer">
        <p>Thank you for using LILAC!</p>
      </div>
    </div>
  </body>

</html>
`;

export const sendPasswordResetToken = async (token: string, to: string) => {
  const info = await transport.sendMail({
    to,
    from: 'hello@lilac.srijansrivastava.com',
    subject: 'Reset password for Lilac',
    html: generateEmail(token, to),
  });
  if (process.env.MAIL_USER?.includes('ethereal.email'))
    console.log(
      `💌 Password Reset Email sent, view it at ${getTestMessageUrl(info)}`,
    );
};
