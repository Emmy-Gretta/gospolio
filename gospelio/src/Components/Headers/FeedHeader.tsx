import { DropDown, Search, WithNotifications } from "@/assets/page";
import Image from "next/image";
import Link from "next/link";

const FeedHeader = () => {
   return ( 
      <>
      <section className="flex items-center justify-center gap-40 bg-white h-[70px] ">
         <section>
            <Link href="/">
               <Image src="/Profile/Cross.svg" width={160} height={20} alt="Logo" />
            </Link>
         </section>
         <section>
            <section className="flex items-center justify-center ">
               <div className="w-[45px] h-[40px] flex items-center bg-[#F8F8F9] pl-5 rounded-tl-[8px] rounded-bl-[8px]">
                  <button >
                     <Search />
                  </button>
               </div>
               <input 
                     type="text"  
                     placeholder="Search from posts..."
                     name="search"
                     className="font-[400] placeholder:text-[#707070] w-[400px] h-[40px] bg-[#F8F8F9] focus:border-transparent focus:outline-none text-[13px] rounded-tr-[8px] rounded-br-[8px]"
               />
            </section>
         </section>
         <section>
            <section className="flex gap-[24px]">
               <section className="flex gap-[13px]">
               <div className="bg-[#F8F8F9] h-[40px] w-[40px] rounded-[9px] flex items-center justify-center">
                   <WithNotifications />
               </div>
               <div  className="bg-[#F8F8F9] h-[40px] w-[40px] rounded-[9px] flex items-center justify-center">
                  <WithNotifications />
               </div>
               </section>
               <section>
                  <div className="flex gap-[5px]">
                     <Image src="/Profile/Picture.svg" width={38} height={23} alt="Profile picture" />
                     <div className="relative">
                        <div className="flex text-[11px] text-[#211C37] font-[600] items-center">
                           <p>Castella Ineza</p>
                           <button>
                             <DropDown />
                           </button>
                        </div>
                        <p className="text-[#85878D] text-[10px] absolute top-5">Admin</p>
                     </div>
                  </div>
               </section>
            </section>
         </section>
      </section>
      </>
    );
}
 
export default FeedHeader;