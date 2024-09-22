// netlify/functions/redirect.js
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Auto Close</title>
    <script>
        window.onload = function () {
            // Attempt to close the window
            window.close();
            console.log("This tab cannot be closed automatically.");
        };
    </script>
</head>
<body>
    <h1>Closing the window...</h1>
    <p>If this tab doesn't close automatically, please close it manually.</p>
</body>
</html>
`;

exports.handler = async (event) => {
  if (event.httpMethod === 'POST') {
    // Handle POST requests
    console.log("Received POST data:", event.body);

    // Respond to POST requests
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: "Post request received and ignored" }),
    };
  }

  // Serve HTML for other requests
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: htmlContent,
  };
};
