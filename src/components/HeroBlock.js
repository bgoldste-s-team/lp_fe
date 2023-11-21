import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const HeroBlock = ({
  header,
  subheader,
  body,
  cta1_text,
  cta2_text,
  cta1_link,
  cta2_link,
  image_link,
}) => {
  // const imageContainerClasses = "w-full h-auto mx-auto";
  // const headerClasses = "text-3xl font-bold mb-4 text-center";
  // const subheaderClasses = "text-lg mb-6 text-center";
  // const button1Classes = "btn "
  // const button2Classes = "btn  btn-accent";
  // const buttonContainerClasses = "flex justify-center gap-4 mt-4";
  // const bodyClasses = "text-lg mb-6 text-center whitespace-pre-line";

  return (
    <div
      className={`hero min-h-[70vh] p-0  bg-primary text-primary-content `}
      // style={{backgroundImage: `url(${image_link})`}}
    >

      <div className="hero-content  p-3 py-9  m-1 flex flex-col text-center text-primary-content">

        <div className="flex flex-col space-y-2 max-w-xl bg-red-950 sm:py-1/2">
        
          <p className="max-w-xl uppercase font-semibold text-accent py-1">
            {subheader}
          </p>
        
          <h1 className=" text-5xl font-bold pb-1">{header}</h1>
        
        </div>

        <p className="max-w-2xl px-2">{body.slice(0, 204)}</p>
        
        <label>Join Mark, John, Jenny and 200+ others on the waitlist.</label>
        
        <div className="">
        
          <input
            className="input input-bordered join-item text-black"
            placeholder="Email"
          />
        
          <button className="btn  btn-secondary join-item ">
            Request Access
          </button>
        
        </div>
      
      
      
      </div>
    </div>
  );
};

export default HeroBlock;

{
  /*        */
}
{
  /*         <div className={buttonContainerClasses}> */
}
{
  /*         {cta2_link && ( */
}
{
  /*           <Link className="btn btn-secondary" href={cta2_link}> */
}
{
  /*             {cta2_text} */
}
{
  /*           </Link> */
}
{
  /*         )} */
}
{
  /*         {cta1_link && ( */
}
{
  /*           <Link className="btn btn-primary" href={cta1_link}> */
}
{
  /*             {cta1_text} */
}
{
  /*           </Link> */
}
{
  /*         )} */
}
{
  /*  */
}
{
  /*        */
}
{
  /*       </div> */
}
{
  /*
<button className="btn">Button</button>
<button className="btn btn-neutral">Neutral</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Accent</button>
<button className="btn btn-ghost">Ghost</button>
<button className="btn btn-link">Link</button><button className="btn btn-info">Info</button>
<button className="btn btn-success">Success</button>
<button className="btn btn-warning">Warning</button>
<button className="btn btn-error">Error</button><button className="btn btn-outline">Default</button>
<button className="btn btn-outline btn-primary">Primary</button>
<button className="btn btn-outline btn-secondary">Secondary</button>
<button className="btn btn-outline btn-accent">Accent</button><button className="btn btn-outline btn-info">Info</button>
<button className="btn btn-outline btn-success">Success</button>
<button className="btn btn-outline btn-warning">Warning</button>
<button className="btn btn-outline btn-error">Error</button>
       */
}
