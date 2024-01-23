//const EMAIL_REGEX =  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
import React, { useState } from 'react';
import clsx from 'clsx';

const EMAIL_REGEX =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,16})+$/;

interface FormData {
  email: string;
  privacyConfirm: boolean;
  hasSelectedPromoList: boolean;
}

const initialState: FormData = {
  email: '',
  privacyConfirm: false,
  hasSelectedPromoList: false,
}


interface NewsLetterPanelProps {
  newsListId: string;
  promoListId: string;
}

export default function NewsLetterPanel(props: NewsLetterPanelProps) {
  const { newsListId, promoListId } = props;

  const [formData, setFormData] = useState<FormData>(initialState)
  const [dirty, setDirty] = useState<boolean>(false);
  const [pending, setPending] = useState<boolean>(false)
  const [done, setDone] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)


  function subscribe(e: React.FormEvent<HTMLFormElement>) {
    setPending(true);
    setDone(false);
    setError(false);
    e.preventDefault();

    const listsSuscribed = [newsListId];
    if (formData.hasSelectedPromoList) { listsSuscribed.push(promoListId) }

    //fetch('https://video-corsi-landing.vercel.app/api/sendgrid', {
    // fetch('http://localhost:3000/api/sendgrid', {
    fetch('https://fabiobiondi-newsletter.azurewebsites.net/api/fabiobiondi-newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        privacy: true,
        email: formData.email,
        listIds: listsSuscribed 
      })
    })
      .then(res => res.json())
      .then(res => {
        if (!res.ok) {
          setDone(false);
          setPending(false);
          setError(true);
        }
        // ok
        setFormData(s => ({...s, email: 'Subscribed Successfully'}))
        setDone(true);
        setError(false)
        setPending(false);
        console.log('done', res)
      })
      .catch(e => {
        setTimeout(() => {
          setDone(false);
          setPending(false)
          setError(true);
        }, 1000)

      })
  }

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value
    })
    setDirty(true);
    setError(false);
  }

  const isEmailValid = formData.email.match(EMAIL_REGEX);
  const hasSubscribedThePromoList = formData.hasSelectedPromoList;
  const isPrivacyConfirmed = formData.privacyConfirm;
  const isValid = isEmailValid && isPrivacyConfirmed;

  function onCheckBoxHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.currentTarget.name
    setFormData({
      ...formData,
      [name]: e.currentTarget.checked
    })
    setDirty(true);
  }

  function getButtonLabel() {
    if (!dirty) return 'SUBSCRIBE';
    if (done) return 'SUBSCRIBED';
    if (pending) return 'loading...';
    if (!isEmailValid) return 'INVALID EMAIL';
    if (!isPrivacyConfirmed) return 'ACCEPT PRIVACY';
    
    return 'SUBSCRIBE';
  }


  return (
    <div className='bg-slate-700 text-center border-b border-b-slate-800' id="newsletterBox">

      <div className='page !py-16 '>
        <div className="flex justify-center">
          <img src="./images/brand/emote-newsletter-low.png" alt=""/>
        </div>
        {/*<h1 className="text-2xl md:text-4xl font-semibold text-white tracking-wider uppercase">
          LET'S KEEP IN TOUCH
        </h1>*/}
        <div className="my-4 text-gray-400">
          <div className="text-xl sm:text-3xl">Keep updated about latest content</div>
          <div className="text-xl sm:text-lg">videos, articles, tips and news</div>
        </div>

        { error && <div>Some error occurs. Try later</div>}

        <form className="mt-4 mb-2 sm:flex justify-center"  onSubmit={subscribe}>
          <div className="form-control">
            <div className="sm:input-group sm:input-group-y">
              <input
                name="email"
                value={formData.email}
                onChange={onChangeHandler}
                type="email"
                readOnly={done}
                placeholder="Your Email Address"
                className=" input input-bordered rounded-2xl sm:!rounded-l-2xl text-black bg-white w-full mb-3 sm:mb-0 sm:w-96"
                />


              <button 
                className={clsx(
                  'btn  !rounded-2xl sm:!rounded-l-none !rounded-r-2xl ',
                  { '!bg-sky-400 opacity-40 hover:bg-sky-700 !text-gray-900 hover:text-sky-900': !isValid && !dirty},
                  { '!bg-red-500 !text-white opacity-50 cursor-not-allowed': !isValid && !done && dirty},
                  { 'disabled:!bg-orange-100 disabled:!text-orange-700': isValid && pending},
                  { '!bg-green-600 !text-white hover:bg-green-500': isValid && !done},
                  { 'disabled:!bg-green-100 disabled:!text-green-700': done},
                )} 
                type="submit" disabled={!isValid || done || pending}
              >
                {  getButtonLabel() }  
              </button>
            </div>
          </div>
        </form>


        <div className="flex flex-col justify-center items-start gap-1 w-full sm:w-96 mx-auto">

          <div className="form-control ">
            <label className="cursor-pointer label gap-3">
              <input 
                type="checkbox" className="checkbox checkbox-info" 
                checked={formData.hasSelectedPromoList}
                name="hasSelectedPromoList"
                onChange={onCheckBoxHandler}
                disabled={done}
                readOnly={done}
              />

              <span className="text-white text-left">
                <span>I also want to receive info about Premium content, promo, courses </span>
              </span>
              
            </label>
          </div>

          <div className="form-control ">
            <label className="cursor-pointer label gap-3 relative">
              <input 
                type="checkbox" className="checkbox checkbox-success"
                name="privacyConfirm" 
                checked={formData.privacyConfirm}
                onChange={onCheckBoxHandler}
                disabled={done}
                readOnly={done}
              />

              {
                (!isPrivacyConfirmed && dirty) && 
                  <i className="mt-1 ml-2 fa fa-arrow-up animate-bounce dark:text-white text-xl absolute top-9 left-0 "></i>
              }

              <span className="text-white">
                <span className="hidden sm:inline">I have read the </span>
                 <a href="/privacy-policy" target="_blank" className="text-sky-500 hover:!text-sky-400">privacy policy</a>
              </span>
             
            </label>
          </div>

        </div>
      </div>
    </div>
  )
}

