import Image from "next/image";
import Link from "next/link";

const Page = () => {
   return ( 
      <>
      <section className="w-[75%]">
      <section className="absolute">
      <section className="bg-[#FF94EE] rounded-3xl h-[170px] m-5">
         <div className="flex gap-5 items-center justify-end">  
         <div className="flex items-center justify-center gap-3 mt-5">
            <div>
              <Image src="/Profile/Profilepro.svg" width={18} height={0} alt="Profile header" />
            </div>
            <div>
              <Link href="/" className="items-center text-[#fff] font-[700]" >Sign in</Link>
            </div>
         </div>
         <div className="flex gap-4 mr-5 mt-5">
         <Image src="/Profile/Settingspro.svg" width={20} height={20} alt="Settings" className="text-[#fff]" />
         <Image src="/Profile/Notificationspro.svg" width={20} height={20} alt="Notifications" />
         </div>
         </div>
      </section>
      <section className="m-10 rounded-2xl p-5 gradient relative -top-24 bg-[#f2f0f0] h-[110px] flex items-center">
         <section className="flex gap-52 mb-[7px]">
            <section className="flex gap-4">
               <section className="absolute">
                <div className="border p-[3px] rounded-md w-[60px] h-[60px] items-center flex justify-center">
                 <Image src="/Profile/Profile.svg" width={40} height={2} alt="Profile Photo" />
                </div>
                <button className="relative -top-5 left-[37px] hover:bg-[#F8F8F8]">
                  <Image src="/Profile/EditProfile.svg" height={120} width={35} alt="Edit profile" className="hover:w-[40px]" />
                </button>
               </section>
              <div className="relative left-20 top-2">
               <h1 className="text-[14px] font-[700] mb-[5px] text-[#2D3748]">Cinta Castella Ineza</h1>
               <p className="text-[#718096] text-[12px] font-[500]">castellaine23@gmail.com</p>
              </div>
            </section>
            <section className="flex items-center justify-center">
               <section className="flex gap-12 ">
                  <div className="flex gap-3 w-[134px] bg-white justify-center h-[35px] rounded-3xl items-center overview">
                     <Image src="/Profile/Overview.svg" width={20} height={12} alt="Overview" />
                     <Link href="/" className="text-[#2D3748] text-[12px] font-[700] ">OVERVIEW</Link>
                  </div>
                  <div className="flex gap-3 items-center">
                     <Image src="/Profile/Posts.svg" width={20} height={12} alt="Posts" />
                     <Link href="/" className="text-[#2D3748] text-[12px] font-[700]">POSTS</Link>
                  </div>
                  <div className="flex gap-3 items-center">
                     <Image src="/Profile/Profile.svg" width={20} height={12} alt="Teams" />
                     <Link href="/" className="text-[#2D3748] text-[12px] font-[700]">TEAMS</Link>
                  </div>
               </section>
            </section>
         </section>
      </section>
      <section className="relative m-5 w-[100%] -top-[470px] right-10">
         <Image src="/Profile/Blur.svg" height={23} width={1593} alt="Blur" />
      </section>
      </section>
      </section>
      </>
    );
}
 
export default Page;

