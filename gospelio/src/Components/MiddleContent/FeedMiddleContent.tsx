import Link from "next/link";
import Image from "next/image";
import { Like, Menu, Messages, No, View } from "@/assets/page";

const FeedContent = () => {
   return ( 
      <>
      <section>
         <section className="grid grid-cols-2 gap-44 my-5">
            <section>
              <Link href="/" className="text-[#211C37] font-[600]">Feeds</Link>
            </section>
            <section className="flex gap-5">
               <Link href="/" className="text-[#8D9297] font-[600]">Friends</Link>
               <Link href="/" className="text-[#8D9297] font-[600]">Friends</Link>
               <Link href="/" className="text-[#8D9297] font-[600]">Friends</Link>
            </section>
         </section>
         <section className="bg-[#DFEBFF] rounded-[15px] flex flex-col justify-center p-10">
         <section className="flex items-center justify-center gap-[400px]">
                    <div className="flex gap-[10px] ">
                      <Image
                        src="/Profile/Picture.svg"
                        width={35}
                        height={23}
                        alt="Profile picture"
                      />
                      <div className="relative">
                        <div className="flex text-[11px] text-[#002BC2] font-[600] items-center gap-5">
                          <p>Castella Cinta</p>
                        </div>
                        <p className="text-[#85878D] text-[10px] absolute top-5 font-[600]">
                          3 hours ago
                        </p>
                      </div>
                    </div>
                    <button className="">
                      <Menu />
                    </button>
                  </section>
                  <section className="flex items-center justify-center">
                  <section className="flex items-center flex-col justify-center gap-5">
                  <section className="flex items-center justify-center my-5">
               <p className="text-[13px] font-[600]">
                🙏 May we find solace in the presence of the Divine, for it is in our faith that we discover strength, hope,  enlightenment. 🌟🕊️ <span className="text-[#0048FF] font-[600]"> #FaithInUnity   #SpiritualReflections </span> 📖🌿 🌟 
               </p>
            </section>
            <section className="flex gap-10">
              <section className="flex gap-5">
              <section>
                <Image src="/Feed/Post1.svg" width={90} height={20} alt="Post" />
               </section>
               <section>
                <Image src="/Feed/Post2.svg" width={90} height={30} alt="Post" />
               </section>
              </section>
               <section className="relative">
                <Image src="/Feed/Post3.svg" width={330} height={30} alt="Post" />
                <section className="bg-white flex items-center absolute top-34 right-[55px] rounded-full p-1 transform rotate-12">
                  <button>🙏</button>
                  <button>💕 </button>
                  <button>😂</button>
                  <button>😭</button>
                  <button>👏</button>
                  <button><No /></button>
                </section>
               </section>
            </section>
            <section className="flex gap-52 items-center justify-center mt-10 ">
              <section className="flex gap-5">
                <section className="flex items-center gap-[7px]">
                  <View />
                  <p className="text-[#8D9297] text-[10px] font-[700]">View</p>
                </section>
                <section className="flex items-center gap-[7px]">
                  <button>
                    <Like />
                  </button>
                  <p className="text-[#8D9297] text-[10px] font-[700]">Like</p>
                </section>
                  <Link href="/">
                    <section className="flex items-center gap-[7px]">
                     <Messages />
                     <p className="text-[#8D9297] text-[10px] font-[700]">Comment</p>
                    </section>
                  </Link>
              </section>
              <section>
                <button className="bg-[#FF94EE] text-white rounded-[40px] h-[25px] w-[120px] text-[12px]">
                  Wooow!Amen
                </button>
              </section>
            </section>
                  </section>
                  </section>
         </section>
         <section className="flex items-center justify-center my-5 bg-[#FFF6DF] rounded-[15px]">
         <section className="flex flex-col w-[100%] mt-10">
         <section className="flex items-center justify-center gap-[400px]">
                    <div className="flex gap-[10px] ">
                      <Image
                        src="/Profile/Picture.svg"
                        width={35}
                        height={23}
                        alt="Profile picture"
                      />
                      <div className="relative">
                        <div className="flex text-[11px] text-[#002BC2] font-[600] items-center gap-5">
                          <p>Castella Cinta</p>
                        </div>
                        <p className="text-[#85878D] text-[10px] absolute top-5 font-[600]">
                          3 hours ago
                        </p>
                      </div>
                    </div>
                    <button className="">
                      <Menu />
                    </button>
                  </section>
                  <section className=" px-10 ">
                  <section className="flex items-center justify-center my-5 ">
               <p className="text-[13px] font-[600]">
               🙏 May we find solace in the presence of the Divine, for it is in our faith that we discover strength, hope, and love. Let us come together, sharing our prayers and reflections . 🌟🕊️ @FaithInUnity  📖🌿 🌟 May we find solace in the presence of the
               </p>
            </section>
            <section className="flex gap-5">
                <section className="flex items-center gap-[7px]">
                  <View />
                  <p className="text-[#8D9297] text-[10px] font-[700]">View</p>
                </section>
                <section className="flex items-center gap-[7px]">
                  <button>
                    <Like />
                  </button>
                  <p className="text-[#8D9297] text-[10px] font-[700]">Like</p>
                </section>
                  <Link href="/">
                    <section className="flex items-center gap-[7px]">
                     <Messages />
                     <p className="text-[#8D9297] text-[10px] font-[700]">Comment</p>
                    </section>
                  </Link>
              </section>
                  </section>
         </section>
         </section>
      </section>
      </>
    );
}
 
export default FeedContent;