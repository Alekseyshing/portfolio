import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe"
import { Newsletter } from "./Nawsletter"

export const MailChimpForm = () => {
  const postUrl = `${import.meta.env.VITE_APP_MAILCHIMP_URL}?u=${import.meta.env.VITE_APP_MAILCHIMP_U}&id=${import.meta.env.VITE_APP_MAILCHIMP_ID}`

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