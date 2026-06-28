import { log } from 'node:console'
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)
  const { firstName, lastName, email, service, message } = body

  if (!firstName || !email || !message) {
    throw createError({ statusCode: 400, statusMessage: 'Missing required fields' })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.emailUser,
      pass: config.emailPass,
    },
  })

  await transporter.sendMail({
  from: `"${firstName} ${lastName}" <${config.emailUser}>`,
  to: config.emailUser,
  replyTo: email,
  subject: `New Contact — ${service || 'General Enquiry'}`,
  html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>New Contact</title>
    </head>
    <body style="margin:0;padding:0;background-color:#0a0a0a;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">

      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0a;padding:40px 0;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

              <!-- Header -->
              <tr>
                <td style="background-color:#111111;border-radius:16px 16px 0 0;padding:32px 40px;border-bottom:1px solid #222;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <span style="color:#ffffff;font-size:20px;font-weight:700;letter-spacing:-0.5px;">
                          Creative
                        </span>
                      </td>
                      <td align="right">
                        <span style="background-color:#f97316;color:#ffffff;font-size:11px;font-weight:600;padding:4px 12px;border-radius:999px;letter-spacing:0.5px;text-transform:uppercase;">
                          New Message
                        </span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Hero band -->
              <tr>
                <td style="background-color:#f97316;padding:28px 40px;">
                  <p style="margin:0;color:#ffffff;font-size:13px;font-weight:600;letter-spacing:2px;text-transform:uppercase;">
                    # New Enquiry
                  </p>
                  <h1 style="margin:8px 0 0;color:#ffffff;font-size:32px;font-weight:800;line-height:1.1;letter-spacing:-1px;">
                    ${service || 'General Enquiry'}
                  </h1>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="background-color:#111111;padding:40px;">

                  <!-- Sender info -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                    <tr>
                      <td style="padding-bottom:20px;border-bottom:1px solid #222;">
                        <p style="margin:0 0 4px;color:#666;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;">From</p>
                        <p style="margin:0;color:#ffffff;font-size:18px;font-weight:700;">${firstName} ${lastName}</p>
                        <a href="mailto:${email}" style="color:#f97316;font-size:14px;text-decoration:none;">${email}</a>
                      </td>
                    </tr>
                  </table>

                  <!-- Details grid -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                    <tr>
                      <td width="50%" style="padding-bottom:24px;vertical-align:top;">
                        <p style="margin:0 0 4px;color:#666;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;"># 01 Service</p>
                        <p style="margin:0;color:#ffffff;font-size:15px;font-weight:600;">${service || '—'}</p>
                      </td>
                      <td width="50%" style="padding-bottom:24px;vertical-align:top;">
                        <p style="margin:0 0 4px;color:#666;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;"># 02 Reply To</p>
                        <p style="margin:0;color:#ffffff;font-size:15px;font-weight:600;">${email}</p>
                      </td>
                    </tr>
                  </table>

                  <!-- Message -->
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="background-color:#0a0a0a;border:1px solid #222;border-radius:12px;padding:24px;">
                        <p style="margin:0 0 8px;color:#666;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;"># 03 Message</p>
                        <p style="margin:0;color:#d1d5db;font-size:15px;line-height:1.7;">${message}</p>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

              <!-- CTA -->
              <tr>
                <td style="background-color:#111111;padding:0 40px 40px;">
                  <a href="mailto:${email}"
                     style="display:inline-block;background-color:#f97316;color:#ffffff;font-size:14px;font-weight:700;padding:14px 28px;border-radius:999px;text-decoration:none;letter-spacing:0.3px;">
                    Reply to ${firstName} →
                  </a>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color:#0a0a0a;border-radius:0 0 16px 16px;padding:24px 40px;border-top:1px solid #222;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <p style="margin:0;color:#444;font-size:12px;">
                          © ${new Date().getFullYear()} Creative. All rights reserved.
                        </p>
                      </td>
                      <td align="right">
                        <p style="margin:0;color:#444;font-size:12px;">
                          Powered by <a href="https://w-code81.pxxl.click" style="color:#f97316;text-decoration:none;">w-code81</a>
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>

    </body>
    </html>
  `,
})

  return { success: true }
})