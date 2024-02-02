import { motion } from "framer-motion";
import { useState } from "react";

export default function Toggle() {
   const [toggle, setToggle] = useState <Boolean>(false);

   return(
      <div className="flex ">
         <div
          onClick={() => setToggle(!toggle)}
          className={`flex h-6 w-12 cursor-pointer rounded-full border border-none
         ${toggle ? "justify-start bg-[#E2E8F0]" : "justify-end bg-[#FF94EE;]"}
         p-[1px]`}
         >
            <motion.div
              className={`h-5 w-5 rounded-full 
              ${toggle ? "bg-white" : "bg-white"} `}
              layout
              transition={{ stiffness: 400, damping: 10 }}
         />
         </div>
      </div>
   )
}