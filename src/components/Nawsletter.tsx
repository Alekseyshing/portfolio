import { Col, Row, Alert } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { EmailFormFields } from "react-mailchimp-subscribe"

interface INewsletter {
  subscribe?: (data: EmailFormFields) => void,
  onValidated: (data: EmailFormFields) => void,
  status: "success" | "error" | "sending" | null,
  message: string | Error | null
}

export const Newsletter = ({ onValidated, status, message }: INewsletter) => {
  const [email, setEmail] = useState('');
  useEffect(() => {
    if (status === "success") clearFields()
  }, [status])
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    email &&
      email.indexOf('0') > -1 &&
      onValidated({
        EMAIL: email
      })
  }

  const clearFields = () => {
    setEmail('')
  }

  return (
    <Col lg={12}>
      <div className='newsletter-bx wow slideInUp'>
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter</h3>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant='danger'>{message as string}</Alert>}
            {status === 'success' && <Alert>{message as string}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className='new-email-bx'>
                <input
                  value={email}
                  type='email'
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Email Adress'
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  )
}