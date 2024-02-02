"use client";

import Toggle from "../Buttons/Toggle";

const ProdileSettings = () => {
   return ( 
      <section className="relative top-80 profile-settings  section-back flex flex-col justify-center">
         <section className="ml-5 mt-5">
            <h1 className="text-[#2D3748] font-[700]">Platform Settings</h1>
         </section>
         <section className="ml-5 mb-5">
         <section className="flex flex-col gap-4 mt-5">
            <h1 className="prof-account">ACCOUNT</h1>
            <div className="flex items-center justify gap-3">
              <Toggle />
              <p className="email-me">Email me when someone follows me</p>
            </div>
            <div className="flex items-center justify gap-3">
              <Toggle />
              <p className="email-me">Email me when someone replies on my post</p>
            </div>
            <div className="flex items-center justify gap-3">
              <Toggle />
              <p className="email-me">Email me when someone mentions me</p>
            </div>
         </section>
         <section className="flex flex-col gap-4 mt-5">
            <h1 className="prof-account">APPLICATION</h1>
            <div className="flex items-center justify gap-3">
              <Toggle />
              <p className="email-me">New launches and projects</p>
            </div>
            <div className="flex items-center justify gap-3">
              <Toggle />
              <p className="email-me">Monthly product updates</p>
            </div>
            <div className="flex items-center justify gap-3">
              <Toggle />
              <p className="email-me">Subscribe to newsletter</p>
            </div>
         </section>
         </section>
      </section>
    );
}
 
export default ProdileSettings;