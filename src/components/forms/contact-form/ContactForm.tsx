import React, { useEffect, useState } from 'react';
import classnames from 'clsx';
import { ProgressBarChecked } from './ProgressBarChecked';

declare var emailjs: any;

const initialState = {
  name: '',
  email: '',
  sending: false,
  message: '',
  dirty: false,
  success: false,
  error: false
}

export function ContactForm() {
  const [formData, setFormData] = useState<any>(initialState);

  useEffect(() => {
    const url = new URL(location.href);
    const message = url.searchParams.get('msg') || '';
    setFormData(s => ({...s, message }));
  }, [])

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      dirty: true,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  const send = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const template_params = {
      "from_name": formData.name,
      "from_email": formData.email,
      "subject": "fabiobiondi.dev - contact form",
      "message_html": `
        Inviato da: ${formData.name} (${formData.email})

        Oggetto: Info from fabiobiondi.dev website \n\n \r\r
        ${formData.message}
      ` ,
    }
    // console.log(template_params)
    const service_id = "default_service";
    const template_id = "template_EINXui09";
    setFormData({...formData, error: false, sending: true })

    emailjs.send(service_id, template_id, template_params, 'user_U93fAB8CUZq39WdYExova')
      .then((response: any) => {
        setFormData({...formData, success: true, error: false, sending: false})
      }, (error: any) => {
        console.log('FAILED...', error);
        setFormData({...formData, success: false, error: true, sending: false})
      });
  }

  const {error, dirty, success, message, email, name, sending, subject } = formData;
  const nameIsValid = name.length > 2;
  const emailIsValid = validateEmail(email);
  const messageIsValid = message.length > 5;
  const valid = !error && nameIsValid && emailIsValid && messageIsValid;

  return (
    <div className="w-full mx-auto">
     
      {/* Content */}

          {/*right col*/}
          <div className="w-full">

            {/* Form */}
            <form onSubmit={send} className="w-96 mx-auto" >
              {/* Heading */}

              <div className="text-center">
                {
                  (sending || success) &&
                  <ProgressBarChecked pending={formData.sending} completed={formData.success} />
                }
              </div>

              {/*<p className="mt-4 text-lg text-slate-300 text-center">
              ...
            </p>*/}
              <h2 className="text-4xl lg:text-7xl font-thin text-center my-6 dark:text-white">
                Contact Me
              </h2>

              <div>
                <label htmlFor="contactName" className='dark:text-white'>
                  Your name
                </label>
                <input
                  onChange={onChange} name="name"
                  disabled={success}
                  className={classnames('w-full text-black',  { 'is-valid': nameIsValid, 'is-invalid': !nameIsValid && dirty})}
                  id="contactName" type="text" placeholder="i.e John Doe" />
              </div>
              <div className='mt-4'>
                <label htmlFor="contactEmail" className='dark:text-white'>
                  Your E-Mail Address
                </label>
                <input
                  disabled={success}
                  className={classnames('w-full text-black',  { 'is-valid': emailIsValid, 'is-invalid': !emailIsValid && dirty})}
                  onChange={onChange} name="email" id="contactEmail"
                  type="email" placeholder="info@johndoe.com" />
              </div >
              <div className='mt-4'>
                <label htmlFor="contactMessage" className='dark:text-white'>
                  Your Message
                </label>
                <textarea
                  disabled={success}
                  value={formData.message}
                  className={classnames('w-full text-black',  { 'is-valid': messageIsValid, 'is-invalid': !messageIsValid && dirty})}
                  onChange={onChange} name="message"
                  id="contactMessage" rows={5}
                  placeholder="write here your message..." />
              </div>
              <div className="form-group mb-0">
                
                <button
                  disabled={!valid || success || sending}
                  type="submit" className="button c-sky">
                  {
                    (success) ?
                    <>
                      <i className="fe fe-check" />SENT
                    </> : 'SUBMIT'
                  }
                </button>
              </div>

            </form>

          </div>

    </div>
  )
}

export function validateEmail(email: string) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
