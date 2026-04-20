import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { email, itemId, itemTitle } = await req.json();

  if (!email || !itemId || !itemTitle) {
    return Response.json({ error: "Missing required fields." }, { status: 400 });
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;
  const siteUrl = process.env.SITE_URL || "https://max-barde.vercel.app";

  if (!smtpUser || !smtpPassword) {
    console.error("Missing SMTP credentials in environment variables.");
    return Response.json({ error: "Server configuration error." }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.web.de",
    port: 587,
    secure: false,
    auth: { user: smtpUser, pass: smtpPassword },
  });

  const downloadUrl = `${siteUrl}/downloads/${itemId}`;

  // 1. Send download link to the user
  await transporter.sendMail({
    from: `"Max Barde" <${smtpUser}>`,
    to: email,
    subject: `Your download: ${itemTitle}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 520px; margin: 0 auto; background: #0a0a0a; color: #ffffff; padding: 40px; border-radius: 12px;">
        <h2 style="color: #fbbf24; margin-bottom: 8px;">Here's your download</h2>
        <h3 style="margin-bottom: 24px; font-size: 20px;">${itemTitle}</h3>
        <a href="${downloadUrl}"
           style="display: inline-block; background: #fbbf24; color: #0a0a0a; padding: 14px 28px;
                  border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 15px;">
          Download Now
        </a>
        <p style="margin-top: 32px; color: #52525b; font-size: 13px;">
          You requested this download from maxbarde.com.<br/>
          If you didn't, feel free to ignore this email.
        </p>
      </div>
    `,
  });

  // 2. Notify Max about the new subscriber
  await transporter.sendMail({
    from: `"Max Barde Site" <${smtpUser}>`,
    to: smtpUser,
    subject: `New download request: ${itemTitle}`,
    text: `Email: ${email}\nItem: ${itemTitle} (${itemId})\nTime: ${new Date().toISOString()}`,
  });

  return Response.json({ success: true });
}
