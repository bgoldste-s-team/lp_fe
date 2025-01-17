

import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {useState} from "react"

const TextBlock = ({
  key,
  contentBlockId,
  header,
  subheader,
  body,
  cta1_text,
  cta2_text,
  cta1_link,
  cta2_link,
  image_link,
  index
}) => {
 
  const [showFullText, setShowFullText] = useState(false);
  return (


    <div key={key} contentBlockId={contentBlockId} className={`py-12 rounded-none card  md:card-side ${index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse " }   `}>
          <figure className='p-4'><img src={image_link} alt="Hero Image" className="mask mask-circle w-2/3 " /></figure>
       
         <div className='card-body flex flex-col '>
         {subheader && <h3 className="text-lg uppercase">{subheader}</h3>}
          <h2 className=' text-4xl  '>{header}</h2>
      
         
            

            <div>
            <ReactMarkdown plugins={[remarkGfm]} className="">{showFullText ? body : body.slice(0,200) + "..."}</ReactMarkdown>
            <div className='link' onClick={() => setShowFullText(!showFullText)}>{showFullText ? "see less" : "see more"}</div>
              </div>
            {/* <div className='btn btn-primary'>Subscribe</div> */}
          </div>
   
    </div>
  );
};

export default TextBlock;

