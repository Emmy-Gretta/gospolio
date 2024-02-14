import { Bar, MenuSolid, SolidDrop } from "@/assets/page";
import Link from "next/link";
import Image from "next/image";
import {
  Like,
  Menu,
  Messages,
  No,
  Photos,
  Share,
  View,
  File,
  Location,
  Public,
  PhotosFeed,
} from "@/assets/page";

const OverviewContent = () => {
   return ( 
      <>
      <section>
      <section className="grid grid-cols-2 gap-44 mb-5">
          <section>
            <Link href="/" className="text-[#211C37] font-[700]">
              Events
            </Link>
          </section>
          <section className="flex gap-3 text-[15px] items-center">
            <p className="text-[#8D9297] text-[13px]">Sort by:</p>
            <section className="flex items-center gap-2">
               <section className="flex items-center">
                 <p className="text-[#8D9297] text-[13px]">Most recent</p>
                 <button>
                  <SolidDrop />
                 </button>
               </section>
               <button>
                 <MenuSolid />
               </button>
            </section>
          </section>
        </section>
        <section className="flex flex-col">
       <section className="flex gap-6">
       <section className="rounded-[15px] bg-white w-[270px] h-[365px] mb-7">
            <section className="flex flex-col items-center justify-center">
               <section className="absolute top-[170px]">
               <Image src="/Overview/Image.svg" height={3} width={240} alt="Overview" className="rounded-[20px]" />
                  <div className="bg-white h-[70px] w-[50px] rounded-[10px] flex items-center justify-center flex-col bottom-8 relative left-[155px] box">
                     <h2 className="text-[#707070] text-[12px] font-[700]">AUG</h2>
                     <h1 className="font-[700] text-[20px]">29</h1>
                  </div>
                  <h1 className="text-[#A0AEC0] relative text-[12px] bottom-16 left-3">THU 7:20 PM</h1>
               </section>
               <section className="mt-[220px] flex justify-center ml-5">
                  <section>
                  <h1 className="font-[700]">Flowers of Mary</h1>
                  <p className="text-[#707070] text-[12px]">
                    Share something Share something  Share somethingShare something
                  </p>
                  </section>
               </section>
               <section className="flex items-center justify-center m-4">
                  <Bar />
               </section>
               <section className="relative right-[120px]">
                  <div className="absolute">
                     <Image src="/Overview/Header.svg" height={20} width={20} alt="Account" />
                     <div className="relative">
                     <Image src="/Overview/Header.svg" height={20} width={20} alt="Account" className="bottom-[22px] relative left-[13px]" />
                     <Image src="/Overview/Header.svg" height={20} width={20} alt="Account" className="bottom-[44px] relative left-[26px]" />
                     <Image src="/Overview/Header.svg" height={20} width={20} alt="Account" className="bottom-[66px] relative left-[39px]" />
                     <Image src="/Overview/Header.svg" height={20} width={20} alt="Account" className="bottom-[88px] relative left-[52px]" />
                     <button className="bg-[#D9D9D9] text-[#686868] rounded-[360px] w-[20px] h-[20px] flex items-center justify-center text-[11px] bottom-[110px] relative left-[65px]">+5</button>
                     </div>
                  </div>
               </section>
            </section>
         </section>
         <section className="rounded-[15px] bg-white w-[270px] h-[365px] ">
            <section className="flex flex-col items-center justify-center">
               <section className="absolute top-[170px]">
               <Image src="/Overview/Image.svg" height={3} width={240} alt="Overview" className="rounded-[20px]" />
                  <div className="bg-white h-[70px] w-[50px] rounded-[10px] flex items-center justify-center flex-col bottom-8 relative left-[155px] box">
                     <h2 className="text-[#707070] text-[12px] font-[700]">AUG</h2>
                     <h1 className="font-[700] text-[20px]">29</h1>
                  </div>
                  <h1 className="text-[#A0AEC0] relative text-[12px] bottom-16 left-3">THU 7:20 PM</h1>
               </section>
               <section className="mt-[220px] flex justify-center ml-5">
                  <section>
                  <h1 className="font-[700]">Flowers of Mary</h1>
                  <p className="text-[#707070] text-[12px]">
                    Share something Share something  Share somethingShare something
                  </p>
                  </section>
               </section>
               <section className="flex items-center justify-center m-4">
                  <Bar />
               </section>
               <section className="relative right-[120px]">
                  <div className="absolute">
                     <Image src="/Overview/Header.svg" height={20} width={20} alt="Account" />
                     <div className="relative">
                     <Image src="/Overview/Header.svg" height={20} width={20} alt="Account" className="bottom-[22px] relative left-[13px]" />
                     <Image src="/Overview/Header.svg" height={20} width={20} alt="Account" className="bottom-[44px] relative left-[26px]" />
                     <Image src="/Overview/Header.svg" height={20} width={20} alt="Account" className="bottom-[66px] relative left-[39px]" />
                     <Image src="/Overview/Header.svg" height={20} width={20} alt="Account" className="bottom-[88px] relative left-[52px]" />
                     <button className="bg-[#D9D9D9] text-[#686868] rounded-[360px] w-[20px] h-[20px] flex items-center justify-center text-[11px] bottom-[110px] relative left-[65px]">+5</button>
                     </div>
                  </div>
               </section>
            </section>
         </section>
       </section>
        <section className="flex gap-6">
        <section className="rounded-[15px] bg-white w-[270px] h-[365px] mb-7">
            <section className="flex flex-col items-center justify-center">
               <section className="absolute top-[565px]">
               <Image src="/Overview/Image2.svg" height={3} width={240} alt="Overview" className="rounded-[20px]" />
                  <div className="bg-white h-[70px] w-[50px] rounded-[10px] flex items-center justify-center flex-col bottom-8 relative left-[155px] box">
                     <h2 className="text-[#707070] text-[12px] font-[700]">AUG</h2>
                     <h1 className="font-[700] text-[20px]">29</h1>
                  </div>
                  <h1 className="text-[#A0AEC0] relative text-[12px] bottom-16 left-3">THU 7:20 PM</h1>
               </section>
               <section className="mt-[220px] flex justify-center ml-5">
                  <section>
                  <h1 className="font-[700]">Flowers of Mary</h1>
                  <p className="text-[#707070] text-[12px]">
                    Share something Share something  Share somethingShare something
                  </p>
                  </section>
               </section>
               <section className="flex items-center justify-center m-4">
                  <Bar />
               </section>
               <section className="relative right-[120px]">
                  <div className="absolute">
                     <Image src="/Overview/Header.svg" height={20} width={20} alt="Account" />
                     <div className="relative">
                     <Image src="/Overview/Header.svg" height={20} width={20} alt="Account" className="bottom-[22px] relative left-[13px]" />
                     <Image src="/Overview/Header.svg" height={20} width={20} alt="Account" className="bottom-[44px] relative left-[26px]" />
                     <Image src="/Overview/Header.svg" height={20} width={20} alt="Account" className="bottom-[66px] relative left-[39px]" />
                     <Image src="/Overview/Header.svg" height={20} width={20} alt="Account" className="bottom-[88px] relative left-[52px]" />
                     <button className="bg-[#D9D9D9] text-[#686868] rounded-[360px] w-[20px] h-[20px] flex items-center justify-center text-[11px] bottom-[110px] relative left-[65px]">+5</button>
                     </div>
                  </div>
               </section>
            </section>
         </section>
         <section className="rounded-[15px] bg-white w-[270px] h-[365px] mb-7">
            <section className="flex flex-col items-center justify-center">
               <section className="absolute top-[565px]">
               <Image src="/Overview/Image1.svg" height={3} width={240} alt="Overview" className="rounded-[20px]" />
                  <div className="bg-white h-[70px] w-[50px] rounded-[10px] flex items-center justify-center flex-col bottom-8 relative left-[155px] box">
                     <h2 className="text-[#707070] text-[12px] font-[700]">AUG</h2>
                     <h1 className="font-[700] text-[20px]">29</h1>
                  </div>
                  <h1 className="text-[#A0AEC0] relative text-[12px] bottom-16 left-3">THU 7:20 PM</h1>
               </section>
               <section className="mt-[220px] flex justify-center ml-5">
                  <section>
                  <h1 className="font-[700]">Flowers of Mary</h1>
                  <p className="text-[#707070] text-[12px]">
                    Share something Share something  Share somethingShare something
                  </p>
                  </section>
               </section>
               <section className="flex items-center justify-center m-4">
                  <Bar />
               </section>
               <section className="relative right-[120px]">
                  <div className="absolute">
                     <Image src="/Overview/Header.svg" height={20} width={20} alt="Account" />
                     <div className="relative">
                     <Image src="/Overview/Header.svg" height={20} width={20} alt="Account" className="bottom-[22px] relative left-[13px]" />
                     <Image src="/Overview/Header.svg" height={20} width={20} alt="Account" className="bottom-[44px] relative left-[26px]" />
                     <Image src="/Overview/Header.svg" height={20} width={20} alt="Account" className="bottom-[66px] relative left-[39px]" />
                     <Image src="/Overview/Header.svg" height={20} width={20} alt="Account" className="bottom-[88px] relative left-[52px]" />
                     <button className="bg-[#D9D9D9] text-[#686868] rounded-[360px] w-[20px] h-[20px] flex items-center justify-center text-[11px] bottom-[110px] relative left-[65px]">+5</button>
                     </div>
                  </div>
               </section>
            </section>
         </section>
        </section>
        </section>
        <section className="bg-[#F2F2FC] rounded-[15px] h-[140px] flex items-center justify-center flex-col">
          <section className="flex items-center justify-center">
            <button className="flex items-center justify-center h-[40px] bg-white p-1 rounded-l-[20px]">
              <Image
                src="/Profile/Picture.svg"
                width={30}
                height={23}
                alt="Profile picture"
              />
            </button>
            <input
              type="text"
              placeholder="Share something"
              name="feedback"
              className="w-[530px] h-[40px] placeholder:text-[12px] rounded-r-[20px] focus:border-transparent focus:outline-none text-[13px] p-2"
            />
          </section>
          <section className="flex gap-20 mt-4">
            <section className="flex gap-7">
              <button className="flex gap-2  items-center justify-center">
                <PhotosFeed />
                <p className="font-[700] text-[13px]">Photos</p>
              </button>
              <button className="flex gap-2  items-center justify-center">
                <File />
                <p className="font-[700] text-[13px]">File</p>
              </button>
              <button className="flex gap-2 items-center">
                <Location />
                <p className="font-[700] text-[13px] ">Location</p>
              </button>
              <button className="flex gap-2 items-center justify-center">
                <Public />
                <p className="font-[700] text-[13px]">Public</p>
              </button>
            </section>
            <section>
              <button className="text-[13px] font-[700] text-white bg-black w-[105px] h-[30px] rounded-[5.3px]">
                Send
              </button>
            </section>
          </section>
        </section>
      </section>
      </>
    );
}
 
export default OverviewContent;