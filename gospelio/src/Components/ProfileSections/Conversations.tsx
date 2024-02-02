import Image from "next/image";
import Link from "next/link";

const Conversations = () => {
   return ( 
      <>
            <section className="relative top-80 profile-settings w-[400px] section-back flex flex-col justify-center">
         <section className="ml-5 mt-5">
            <h1 className="text-[#2D3748] font-[700]">Conversations</h1>
         </section>
         <section className="ml-5 mb-5">
         <section className="flex flex-col gap-4 mt-5">
         <section className="flex gap-4">
            <section>
            <section className="flex items-center gap-20 mb-5">
               <section className="flex gap-4 items-center text">
                  <div className="rounded-md  h-[60px] items-center flex justify-center">
                   <Image src="/Profile/Profile-photo.svg" width={44} height={2} alt="Profile Photo" className="rounded-xl"/>
                  </div>
                 <div className="">
                   <h1 className="text-[14px] font-[700] mb-[5px] text-[#2D3748]">Esthera Jackson</h1>
                   <p className="value">Hi! I need more informations...</p>
                </div>
            </section>
            <section>
               <Link href="/" className="reply">REPLY</Link>
            </section>
            </section>
            <section  className="flex items-center gap-36 mb-5">
               <section className="flex gap-4 items-center text">
                  <div className="rounded-md  h-[60px] items-center flex justify-center">
                   <Image src="/Profile/Profile-photo.svg" width={44} height={2} alt="Profile Photo" className="rounded-xl"/>
                  </div>
                 <div className="">
                   <h1 className="text-[14px] font-[700] mb-[5px] text-[#2D3748]">Esthera Jackson</h1>
                   <p className="value">Hi! I need more informations...</p>
                </div>
              </section>
            <section>
               <Link href="/" className="reply">REPLY</Link>
            </section>
            </section>
            <section  className="flex items-center gap-36 mb-5">
               <section className="flex gap-4 items-center text">
                  <div className="rounded-md  h-[60px] items-center flex justify-center">
                   <Image src="/Profile/Profile-photo.svg" width={44} height={2} alt="Profile Photo" className="rounded-xl"/>
                  </div>
                 <div className="">
                   <h1 className="text-[14px] font-[700] mb-[5px] text-[#2D3748]">Esthera Jackson</h1>
                   <p className="value">Hi! I need more informations...</p>
                </div>
               </section>
            <section>
               <Link href="/" className="reply">REPLY</Link>
            </section>
            </section>
            <section  className="flex items-center gap-36 mb-5">
            <section className="flex gap-4 items-center text">
                  <div className="rounded-md  h-[60px] items-center flex justify-center">
                   <Image src="/Profile/Profile-photo.svg" width={44} height={2} alt="Profile Photo" className="rounded-xl"/>
                  </div>
                 <div className="">
                   <h1 className="text-[14px] font-[700] mb-[5px] text-[#2D3748]">Esthera Jackson</h1>
                   <p className="value">Hi! I need more informations...</p>
                </div>
            </section>
            <section>
               <Link href="/" className="reply">REPLY</Link>
            </section>
            </section>
            </section>
            </section>
         </section>
         </section>
      </section>
      </>
    );
}
 
export default Conversations;