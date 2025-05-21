import { SignIn } from '@clerk/clerk-react'
import React from 'react'
import './clerk.css';

const SignInPage = () => {
  return (
    <section className='Container'><SignIn
    appearance={{
      elements: {
        card: "custom-card",
        headerTitle: "custom-header",
        formButtonPrimary: "custom-button",
        formFieldInput : "custom-inputs",
        formFieldLabel:"custom-lables",
        footerActionLink:"custom-footer",
      }
    }}
    localization={{
      signIn: {
        start: {
          title: " Sign-In To Sutainable TS",
        },
      },
    }} /></section>
  )
}

export default SignInPage