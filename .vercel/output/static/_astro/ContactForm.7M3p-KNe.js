import{j as e}from"./jsx-runtime.9YwcPWTT.js";import{r as g}from"./index.LFf77hJu.js";import{c as r}from"./clsx.Zbgk8kpT.js";import{c as i}from"./contact-form.52bed2ab.TWlYCqTL.js";const y=s=>e.jsx("div",{className:r(i.circleLoader,{[i.loadComplete]:s.completed}),children:e.jsx("div",{className:r(i.draw,i.checkmark),style:{display:s.completed?"block":"none"}})}),E={name:"",email:"",sending:!1,message:"",dirty:!1,success:!1,error:!1};function A(){const[s,a]=g.useState(E);g.useEffect(()=>{const u=new URL(location.href).searchParams.get("msg")||"";a(x=>({...x,message:u}))},[]);const c=l=>{a({...s,dirty:!0,[l.currentTarget.name]:l.currentTarget.value})},j=l=>{l.preventDefault();const u={from_name:s.name,from_email:s.email,subject:"fabiobiondi.dev - contact form",message_html:`
        Inviato da: ${s.name} (${s.email})

        Oggetto: Info from fabiobiondi.dev website 

 \r\r
        ${s.message}
      `},x="default_service",k="template_EINXui09";a({...s,error:!1,sending:!0}),emailjs.send(x,k,u,"user_U93fAB8CUZq39WdYExova").then(h=>{a({...s,success:!0,error:!1,sending:!1})},h=>{console.log("FAILED...",h),a({...s,success:!1,error:!0,sending:!1})})},{error:v,dirty:n,success:t,message:p,email:b,name:N,sending:f,subject:I}=s,o=N.length>2,m=_(b),d=p.length>5,w=!v&&o&&m&&d;return e.jsx("div",{className:"w-full mx-auto",children:e.jsx("div",{className:"w-full",children:e.jsxs("form",{onSubmit:j,className:"w-96 mx-auto",children:[e.jsx("div",{className:"text-center",children:(f||t)&&e.jsx(y,{pending:s.sending,completed:s.success})}),e.jsx("h2",{className:"text-4xl lg:text-7xl font-thin text-center my-6 dark:text-white",children:"Contact Me"}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"contactName",className:"dark:text-white",children:"Your name"}),e.jsx("input",{onChange:c,name:"name",disabled:t,className:r("w-full text-black",{"is-valid":o,"is-invalid":!o&&n}),id:"contactName",type:"text",placeholder:"i.e John Doe"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{htmlFor:"contactEmail",className:"dark:text-white",children:"Your E-Mail Address"}),e.jsx("input",{disabled:t,className:r("w-full text-black",{"is-valid":m,"is-invalid":!m&&n}),onChange:c,name:"email",id:"contactEmail",type:"email",placeholder:"info@johndoe.com"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{htmlFor:"contactMessage",className:"dark:text-white",children:"Your Message"}),e.jsx("textarea",{disabled:t,value:s.message,className:r("w-full text-black",{"is-valid":d,"is-invalid":!d&&n}),onChange:c,name:"message",id:"contactMessage",rows:5,placeholder:"write here your message..."})]}),e.jsx("div",{className:"form-group mb-0",children:e.jsx("button",{disabled:!w||t||f,type:"submit",className:"button c-sky",children:t?e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fe fe-check"}),"SENT"]}):"SUBMIT"})})]})})})}function _(s){var a=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return a.test(String(s).toLowerCase())}export{A as ContactForm};
