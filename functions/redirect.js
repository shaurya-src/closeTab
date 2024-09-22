// functions/redirect.js

exports.handler = async (event, context) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: 'Method Not Allowed',
      };
    }
  
    // Ignore the POST request and send HTML that closes the tab
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html' },
      body: `
        <html>
          <head>
            <script>
              // This script closes the tab/window
              window.onload = function() {
                // window.open('','_self').close();
                window.close();
              }
            </script>
          </head>
          <body>
            <p>Closing the window...</p>
          </body>
        </html>
      `,
    };
  };
  