import { request } from "http";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest, res: Response) {
  const data = await req.json();
  console.log("The method is ", req.method);
  if (req.method === "POST") {
    console.log("Method recieved ", data);
    const { userEmail, invoiceDetails } = data;

    // Configure your SMTP transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.postmarkapp.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.NEXT_PUBLIC_POSTMARK_API_KEY, // replace with your Postmark Server API token
        pass: process.env.NEXT_PUBLIC_POSTMARK_API_KEY, // replace with your Postmark Server API token
      },
      headers: { "X-PM-Message-Stream": "broadcast" },
    });
    //

    // Define the email options
    const mailOptions = {
      from: "kyle@web3dao.digital", // sender address
      to: "kyle@web3dao.digital", // list of receivers
      subject: "Your Invoice and Next Steps", // Subject line
      text: "", 
      html: `<p>Dear user,</p><br/><br/>Here are your invoice details:<br/><br/>${invoiceDetails}<br/><br/>Thank you for choosing us<p>` // HTML body content
    };

    // Send the email
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Message sent: %s", info.messageId);
      return NextResponse.json(
        { message: "Invoice sent successfully" },
        { status: 200 },
      );
    } catch (error) {
      console.error("Error sending email:", error);
      throw new Error("Error sending invoice email");
    }
  } else {
    // Handle any non-POST requests
    //  res.setHeader("Allow", ["POST"]);
    //  res.status(405).end(`Method ${req.method} Not Allowed`);
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("Allow", "POST");
    res = NextResponse.next({
      request: {
        // New request headers
        headers: requestHeaders,
      },
    });
    NextResponse.json({ status: 405 });
    console.log("Unidentified");
  }
}
