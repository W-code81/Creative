import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)
  const { firstName, lastName, email, service, message } = body

  console.log('USER:', config.emailUser)
  console.log('PASS:', config.emailPass)

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
      <h2>New message from your portfolio</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  })

  return { success: true }
})