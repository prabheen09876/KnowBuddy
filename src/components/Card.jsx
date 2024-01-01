import React from 'react';
import { CiFileOn } from 'react-icons/ci';
import { IoClose, IoDownloadOutline } from 'react-icons/io5';
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className='relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 text-white px-8 py-10 overflow-hidden rounded-[40px]'>
      <CiFileOn />
      <p className='text-sm mt-5 leading-tight font-semibold'>{data.desc} </p>
      <div className='footer absolute bottom-0 w-full left-0'>
        <div className='flex items-center justify-between px-8 py-3 mb-5'>
          <h5>{data.filesize}</h5>
          <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
            {data.close ? <IoClose /> : <IoDownloadOutline size='1em' color='#fff' />}
          </span>
        </div>
        {
            data.tag.isOpen &&(
                <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ?  "bg-blue-600" : "bg-green-600"} rounded-b-[40px]  flex items-center justify-center`}>
                <h3 className='text-sm'>{data.tag.tagTitle}</h3>
              </div>
            ) 
        }
       
      </div>
    </motion.div>
  );
}

export default Card;
