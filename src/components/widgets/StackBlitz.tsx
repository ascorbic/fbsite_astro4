import React from 'react';

export  default function StackBlitz2(props: {url: string, clickToLoad: boolean}) {
  const { url, clickToLoad = true } = props;
  const finalUrl = clickToLoad ? `${url}&ctl=1` : url
  
  return (
    <div className="bg-slate-700 p-3 m-3 rounded-2xl">
      <iframe width="100%" className="h-96 sm:h-full sm:aspect-video"
      src={finalUrl} title="Code Playground"></iframe>
    </div>
)}


export const StackBlitz = StackBlitz2;