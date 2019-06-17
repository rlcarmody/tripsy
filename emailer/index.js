const sg = require('@sendgrid/mail');

const { SENDGRID_KEY, SENDGRID_FROM_EMAIL } = process.env;
const INVITE_TEMPLATE_ID = 'd-e5af4cf54a794bbf9a3295a4c8564cb8';

sg.setApiKey(SENDGRID_KEY);

module.exports = (toEmail, organizer, location, inviteID) => {
  const email = {
    to: toEmail,
    from: SENDGRID_FROM_EMAIL,
    subject: `${organizer} invited you join Tripsy`,
    templateId: INVITE_TEMPLATE_ID,
    dynamic_template_data: {
      organizer,
      location,
      inviteID: `${inviteID}`
    }
  };
  sg.send(email).catch(err => console.log(err));
}