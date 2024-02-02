import { Facebook, Instagram, ProfileLine, Twitter } from "@/assets/page";
import Link from "next/link";

const ProfileInformation = () => {
   return ( 
      <section className="relative top-80 profile-settings  section-back flex flex-col justify-center">
         <section className="ml-5 mt-5">
            <h1 className="text-[#2D3748] font-[700]">Profile Information</h1>
         </section>
         <section className="ml-5 mb-5">
         <section className="flex flex-col gap-4 mt-5">
            <p className="email-me">
            Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
            </p>
            <div className="my-5">
             <ProfileLine/>
            </div>
         </section>
         <section className="flex flex-col gap-4 mt-5">
           <div className="flex gap-4">
            <h1 className="prop">Full Name:</h1>
            <p className="email-me">Alec M Thompson</p>
           </div>
           <div className="flex gap-4">
            <h1 className="prop">Mobile:</h1>
            <p className="email-me"> (44) 123 1234 123</p>
           </div>
           <div className="flex gap-4">
            <h1 className="prop">Email:</h1>
            <p className="email-me">alecthompson@mail.com</p>
           </div>
           <div className="flex gap-4">
            <h1 className="prop">Location:</h1>
            <p className="email-me">United States</p>
           </div>
           <div className="flex gap-4">
            <h1 className="prop">Full Name:</h1>
            <div className="flex gap-3 items-center">
               <Link href="/">  <Facebook /></Link>
               <Link href="/">   <Twitter /></Link>
               <Link href="/">  <Instagram /></Link>
            </div>
           </div>
         </section>
         </section>
      </section>
    );
}
 
export default ProfileInformation;