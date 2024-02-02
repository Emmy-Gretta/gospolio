import { GoogleIcon, AppleIcon } from "@/assets/page";
import Link from 'next/link'

const Apple = () => {
   return ( 
      <Link href="/">
          <section className="flex items-center justify-center my-5">
           <div className="flex items-center pl-10 text-[14px] text-[#424242] gap-[70px] w-[380px] h-[50px] border border-[#CAC8C8] rounded-lg">
            <AppleIcon />
            <p>Log In with Google</p>
         </div>
      </section>
      </Link>   
    );
}
 
export default Apple;