import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe"
import { Newsletter } from "./Nawsletter"

export const MailChimpForm = () => {
  const postUrl = `${process.env.REACT_APP_MAIL_CHIMP_URL}?u=${process.env.REACT_APP_MAIL_CHIMP_U}$id=${process.env.REACT_APP_MAIL_CHIMP_ID}`

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </>
  )


}