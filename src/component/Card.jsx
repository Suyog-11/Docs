import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"




function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} className='relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white px-8 py-10 overflow-hidden'>
     <FaRegFileAlt />
     <p className='text-sm mt-5 leading-tight font-semibold'>{data.desc}</p>
     <div className='footer absolute bottom-0 w-full  left-0'>
     <div className='flex items-center py-3 px-8 justify-between mb-5'>
        <h5>{data.filesize}</h5>
       <span className='flex w-7 h-7 bg-zinc-600 rounded-full items-center justify-center '>
        {data.close ? <IoClose /> : <LuDownload size=".7em" color='#fff'/>}
        </span> 
        </div>
        {
          data.tag.isOpen  && (
            <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
           </div>
          ) 
        }
      
       </div>
     

    </motion.div>

  )
}

export default Card
