const axios = require("axios");

export async function POST(request: any) {
  const res = await request.json();
  const { to } = res;
  // const url = "https://us12.api.mailchimp.com/3.0/lists/91fc724c13";
  const data = {
    members: [
      {
        email_address: to,
        status: "subscribed"
      }
    ]
  };

  const jsonData = JSON.stringify(data);
  const options = {
    // method: "POST",
    headers: {
      // Authorization: "auth 31b3663472c0e9c255a8fc08d5b4aa3a-us12"
    }
  };

  const response = await axios.post(url, options, jsonData);
  console.log("response done", response);

  return Response.json({ response });
}
