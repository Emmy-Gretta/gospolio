import Image from "next/image";
import Link from "next/link";

const Page = () => {
   return ( 
      <>
     <section className="flex sideback">
      <section className="">
         <section className="flex justify-center items-center w-[100%] mt-5">
            <Link href="/"><Image src="/Profile/Cross.svg"  width={200} height={20} alt="Cross-logo"/></Link>
         </section>
         <section className="flex justify-center items-center mb-5">
           <Image src="/Profile/Bar.svg" height={100} width={800} alt="Bar Line" />
         </section>
         <section className="ml-10 w-[100%]">
         <section className="flex flex-col gap-7">
            <Link href="/">
               <div className="flex gap-5">
                  <Image src="/Profile/Dashboard.svg" height={12} width={18} alt="Dashboard" />
                  <h1 className="text-[#424242]">Dashboard</h1>
               </div>
            </Link>
            <Link href="/">
               <div className="flex gap-5">
                  <Image src="/Profile/Members.svg" height={12} width={18} alt="Dashboard" />
                  <h1 className="text-[#424242]">Members</h1>
               </div>
            </Link>
            <Link href="/">
               <div className="flex gap-5">
                  <Image src="/Profile/Chat.svg" height={12} width={18} alt="Dashboard" />
                  <h1 className="text-[#424242]">Chat</h1>
               </div>
            </Link>
            <Link href="/">
               <div className="flex gap-5">
                  <Image src="/Profile/Events.svg" height={12} width={20} alt="Dashboard" />
                  <h1 className="text-[#424242]">Events</h1>
               </div>
            </Link>
            <Link href="/">
               <div className="flex gap-5">
                  <Image src="/Profile/Sermons.svg" height={12} width={20} alt="Dashboard" />
                  <h1 className="text-[#424242]">Sermons</h1>
               </div>
            </Link>
            <Link href="/">
               <div className="flex gap-5">
                  <Image src="/Profile/Notifications.svg" height={12} width={18} alt="Dashboard" />
                  <h1 className="text-[#424242]">Notifications</h1>
               </div>
            </Link>
            <Link href="/">
               <div className="flex gap-5">
                  <Image src="/Profile/Prayers.svg" height={12} width={18} alt="Dashboard" />
                  <h1 className="text-[#424242]">Prayers</h1>
               </div>
            </Link>
            <Link href="/">
               <div className="flex gap-5">
                  <Image src="/Profile/Content.svg" height={12} width={18} alt="Dashboard" />
                  <h1 className="text-[#424242]">Content</h1>
               </div>
            </Link>
            <Link href="/">
               <div className="flex gap-5 ">
                  <Image src="/Profile/Reports.svg" height={12} width={18} alt="Dashboard" />
                  <h1 className="text-[#424242]">Reports</h1>
               </div>
            </Link>
            <section>
               <h1 className="text-[#2D3748]  font-[700]">ACCOUNT PAGES</h1>
            </section>
            <Link href="/">
               <div className="flex gap-5 ">
                  <Image src="/Profile/Reports.svg" height={12} width={18} alt="Dashboard" />
                  <h1 className="text-[#424242]">Reports</h1>
               </div>
            </Link>
            <Link href="/">
               <div className="flex gap-5 ">
                  <Image src="/Profile/Profile.svg" height={12} width={18} alt="Dashboard" />
                  <h1 className="text-[#424242]">Profile</h1>
               </div>
            </Link>
            <Link href="/">
               <div className="flex gap-5 ">
                  <Image src="/Profile/Settings.svg" height={12} width={18} alt="Dashboard" />
                  <h1 className="text-[#424242]">Settings</h1>
               </div>
            </Link>
            <Link href="/">
               <div className="flex gap-5 ">
                  <Image src="/Profile/Donations.svg" height={12} width={18} alt="Dashboard" />
                  <h1 className="text-[#424242]">Donations</h1>
               </div>
            </Link>
            <Link href="/">
               <div className="flex gap-5 ">
                  <Image src="/Profile/Activities.svg" height={12} width={18} alt="Activities" />
                  <h1 className="text-[#424242]">Activities</h1>
               </div>
            </Link>
         </section>
         </section>
         <section className="flex justify-center items-center mb-44">
            <div className="w-[230px] h-[180px] bg-[#76BDFF] rounded-[20px] mt-28">
              <div className="w-[40px] h-[40px] bg-white m-5 rounded-xl flex justify-center items-center">
               <Image src="/Profile/Help.svg" width={30} height={12} alt="Help" />
              </div>
              <div className="ml-5 mt-5 text-[#fff]">
               <p className="font-[700]">Need help?</p>
               <p className="font-[300]">Please check our docs</p>
              </div>
            </div>
         </section>
      </section>
     </section>
      </>
    );
}
 
export default Page;