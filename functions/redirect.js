// netlify/functions/redirect.js
exports.handler = async (event, context) => {
  // Check if the method is POST
  if (event.httpMethod === 'POST') {
    // Log the incoming request body
    console.log("Received POST data:", event.body);

    // Return a successful response but do nothing with the data
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: "Post request received and ignored" }),
    };
  }

  // If not POST, return a 405 Method Not Allowed
  return {
    statusCode: 405,
    body: "Method Not Allowed",
  };
};
