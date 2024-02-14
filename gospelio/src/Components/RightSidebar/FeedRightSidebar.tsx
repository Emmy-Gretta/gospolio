
import Link from "next/link";
import Image from "next/image";
import { FeedNotif, Line } from "@/assets/page";

const FeedRightSidebar = () => {
   return ( 
      <>
      <section>
         <section className="mb-5">
            <Link href="/" className="text-[#211C37] font-[700]">
              Stories
            </Link>
          </section>
          <section>
          <section>
            <section className="absolute right-48">
               <Image src="/Feed/Stories/Story.svg" width={85} height={20} alt="Story"   className="rounded-[20px]"/>
               <section className="flex items-center justify-center relative bottom-8">
            <button className="flex items-center justify-center h-[25px] bg-white p-1 rounded-l-[20px]">
              <Image
                src="/Profile/Picture.svg"
                width={18}
                height={23}
                alt="Profile picture"
              />
            </button>
            <input
              type="text"
              placeholder="Castella"
              name="feedback"
              className="w-[50px] h-[25px] placeholder:text-[11px] rounded-r-[20px] focus:border-transparent focus:outline-none text-[10px] px-0"
            />
          </section>
            </section>
            </section>
            <section>
            <section className="absolute right-24">
               <Image src="/Feed/Stories/Story1.svg" width={85} height={20} alt="Story"   className="rounded-[20px]"/>
               <section className="flex items-center justify-center relative bottom-8">
            <button className="flex items-center justify-center h-[25px] bg-white p-1 rounded-l-[20px]">
              <Image
                src="/Profile/Picture.svg"
                width={18}
                height={23}
                alt="Profile picture"
              />
            </button>
            <input
              type="text"
              placeholder="Castella"
              name="feedback"
              className="w-[50px] h-[25px] placeholder:text-[11px] rounded-r-[20px] focus:border-transparent focus:outline-none text-[10px] px-0"
            />
          </section>
            </section>
            </section>
            <section>
            <section className="absolute right-0">
               <Image src="/Feed/Stories/Story2.svg" width={85} height={20} alt="Story"   className="rounded-[20px]"/>
               <section className="flex items-center justify-center relative bottom-8">
            <button className="flex items-center justify-center h-[25px] bg-white p-1 rounded-l-[20px]">
              <Image
                src="/Profile/Picture.svg"
                width={18}
                height={23}
                alt="Profile picture"
              />
            </button>
            <input
              type="text"
              placeholder="Castella"
              name="feedback"
              className="w-[50px] h-[25px] placeholder:text-[11px] rounded-r-[20px] focus:border-transparent focus:outline-none text-[10px] px-0"
            />
          </section>
            </section>
            </section>
          </section>
            <section className="my-10 mt-48  rounded-[15px] bg-white w-[270px] py-5">
              <section className="flex ml-5">
                <Link
                  href="/"
                  className="text-[#000] text-[14px] font-[700]"
                >
                  Suggested for you
                </Link>
              </section>
              <section className="m-2">
              <Image
                src="/Profile/FeedBar.svg"
                width={1000}
                height={23}
                alt="Bar"
              />
            </section>
              <section className="flex flex-col items-center justify-center">
                <section className="grid grid-cols-2 mt-2">
                  <section className="mb-1">
                    <div className="flex gap-[12px]">
                      <Image
                        src="/Profile/Picture.svg"
                        width={35}
                        height={23}
                        alt="Profile picture"
                      />
                      <div className="relative">
                        <div className="flex text-[11px] text-[#D6008D] font-[600] items-center gap-5">
                          <p>Castella Cinta</p>
                        </div>
                        <p className="text-[#85878D] text-[10px] absolute top-5 font-[600]">
                          @Cast_Ella
                        </p>
                      </div>
                    </div>
                  </section>
                  <section className="ml-10">
                    <button className="bg-[#FF94EE] rounded-[5px] text-white text-[12px] w-[75px] h-[25px]">
                      Follow
                    </button>
                  </section>
                </section>
                <section className="grid grid-cols-2 mt-5">
                  <section className="mb-1">
                    <div className="flex gap-[10px]">
                      <Image
                        src="/Profile/Picture.svg"
                        width={35}
                        height={23}
                        alt="Profile picture"
                      />
                      <div className="relative">
                        <div className="flex text-[11px] text-[#D6008D] font-[600] items-center gap-5">
                          <p>Castella Cinta</p>
                        </div>
                        <p className="text-[#85878D] text-[10px] absolute top-5 font-[600]">
                          @Cast_Ella
                        </p>
                      </div>
                    </div>
                  </section>
                  <section className="ml-10">
                    <button className="bg-[#FF94EE] rounded-[5px] text-white text-[12px] w-[75px] h-[25px]">
                      Follow
                    </button>
                  </section>
                </section>
                <section className="grid grid-cols-2 mt-5">
                  <section className="mb-1">
                    <div className="flex gap-[10px]">
                      <Image
                        src="/Profile/Picture.svg"
                        width={35}
                        height={23}
                        alt="Profile picture"
                      />
                      <div className="relative">
                        <div className="flex text-[11px] text-[#D6008D] font-[600] items-center gap-5">
                          <p>Castella Cinta</p>
                        </div>
                        <p className="text-[#85878D] text-[10px] absolute top-5 font-[600]">
                          @Cast_Ella
                        </p>
                      </div>
                    </div>
                  </section>
                  <section className="ml-10">
                    <button className="bg-[#FF94EE] rounded-[5px] text-white text-[12px] w-[75px] h-[25px]">
                      Follow
                    </button>
                  </section>
                </section>
                <section className="grid grid-cols-2 mt-5">
                  <section className="mb-1">
                    <div className="flex gap-[10px]">
                      <Image
                        src="/Profile/Picture.svg"
                        width={35}
                        height={23}
                        alt="Profile picture"
                      />
                      <div className="relative">
                        <div className="flex text-[11px] text-[#D6008D] font-[600] items-center gap-5">
                          <p>Castella Cinta</p>
                        </div>
                        <p className="text-[#85878D] text-[10px] absolute top-5 font-[600]">
                          @Cast_Ella
                        </p>
                      </div>
                    </div>
                  </section>
                  <section className="ml-10">
                    <button className="bg-[#FF94EE] rounded-[5px] text-white text-[12px] w-[75px] h-[25px]">
                      Follow
                    </button>
                  </section>
                </section>
              </section>
            </section>
            <section className="rounded-[15px] bg-white w-[270px] py-5">
               <section className="flex gap-24 mb-5">
                  <h1 className="font-[800] ml-5">Notifications</h1>
                  <button>
                    <FeedNotif />
                  </button>
               </section>
               <section className="flex flex-col gap-5">
               <section className="flex gap-5 items-center justify-center px-5">
                  <Line />
                  <section>
                     <section className="text-[13px] flex items-center gap-7">
                       <h1 className="text-[10px] font-[700]">$2400, Design changes</h1>
                       <p className="text-[7px] text-[#A0AEC0]">22 DEC 7:20 PM</p>
                     </section>
                     <p className="text-[10px] text-[#8D8A97]">Lorem ipsum dolor sit amet consectetur. Dictum sociis fermentum......</p>
                  </section>
               </section>
               <section className="flex gap-5 items-center justify-center px-5">
                  <Line />
                  <section>
                     <section className="text-[13px] flex items-center gap-7">
                       <h1 className="text-[10px] font-[700]">$2400, Design changes</h1>
                       <p className="text-[7px] text-[#A0AEC0]">22 DEC 7:20 PM</p>
                     </section>
                     <p className="text-[10px] text-[#8D8A97]">Lorem ipsum dolor sit amet consectetur. Dictum sociis fermentum......</p>
                  </section>
               </section>
               <section className="flex gap-5 items-center justify-center px-5">
                  <Line />
                  <section>
                     <section className="text-[13px] flex items-center gap-7">
                       <h1 className="text-[10px] font-[700]">$2400, Design changes</h1>
                       <p className="text-[7px] text-[#A0AEC0]">22 DEC 7:20 PM</p>
                     </section>
                     <p className="text-[10px] text-[#8D8A97]">Lorem ipsum dolor sit amet consectetur. Dictum sociis fermentum......</p>
                  </section>
               </section>
               <section className="flex gap-5 items-center justify-center px-5">
                  <Line />
                  <section>
                     <section className="text-[13px] flex items-center gap-7">
                       <h1 className="text-[10px] font-[700]">$2400, Design changes</h1>
                       <p className="text-[7px] text-[#A0AEC0]">22 DEC 7:20 PM</p>
                     </section>
                     <p className="text-[10px] text-[#8D8A97]">Lorem ipsum dolor sit amet consectetur. Dictum sociis fermentum......</p>
                  </section>
               </section>
               <section className="flex gap-5 items-center justify-center px-5">
                  <Line />
                  <section>
                     <section className="text-[13px] flex items-center gap-7">
                       <h1 className="text-[10px] font-[700]">$2400, Design changes</h1>
                       <p className="text-[7px] text-[#A0AEC0]">22 DEC 7:20 PM</p>
                     </section>
                     <p className="text-[10px] text-[#8D8A97]">Lorem ipsum dolor sit amet consectetur. Dictum sociis fermentum......</p>
                  </section>
               </section>
               <section className="flex gap-5 items-center justify-center px-5">
                  <Line />
                  <section>
                     <section className="text-[13px] flex items-center gap-7">
                       <h1 className="text-[10px] font-[700]">$2400, Design changes</h1>
                       <p className="text-[7px] text-[#A0AEC0]">22 DEC 7:20 PM</p>
                     </section>
                     <p className="text-[10px] text-[#8D8A97]">Lorem ipsum dolor sit amet consectetur. Dictum sociis fermentum......</p>
                  </section>
               </section>
               </section>
            </section>
      </section>
      </>
    );
}
 
export default FeedRightSidebar;