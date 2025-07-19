export const html=(url,name)=>{
    return`
    <!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Welcome Email</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .container {
      background-color: #ffffff;
      margin: 20px auto;
      padding: 20px;
      border-radius: 8px;
      max-width: 600px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    h1 {
      color: #333333;
    }
    p {
      color: #666666;
    }
    .footer {
      margin-top: 30px;
      font-size: 12px;
      color: #999999;
      text-align: center;
    }
    .btn {
      display: inline-block;
      background-color: #007BFF;
      color: white;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 5px;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Welcome ${name} 👋</h1>
    <p>Thank you for signing up on our platform. We're glad to have you!</p>
    <p>You can visit your profile by clicking the button below:</p>
    <a href=${url} class="btn">Confirm</a>

    <div class="footer">
      If you didn't sign up, you can safely ignore this message.
    </div>
  </div>
</body>
</html>

    ` 
}