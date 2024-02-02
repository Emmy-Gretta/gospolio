import Link from "next/link";
import Image from "next/image";

const FeedContent = () => {
   return ( 
      <>
      <section>
         <section className="grid grid-cols-2">
            <section>
              <Link href="/" className="text-[#211C37] font-[600]">Feeds</Link>
            </section>
            <section className="flex gap-5">
               <Link href="/" className="text-[#8D9297] font-[600]">Friends</Link>
               <Link href="/" className="text-[#8D9297] font-[600]">Friends</Link>
               <Link href="/" className="text-[#8D9297] font-[600]">Friends</Link>
            </section>
         </section>
         <section>
         <section>
                    <div className="flex gap-[10px]">
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
                  </section>
            <section>
               <p className="text-[14px] font-[600]">
                🙏 May we find solace in the presence of the Divine, for it is in our faith that we discover strength, hope,  enlightenment. 🌟🕊️ <span className="text-[#0048FF] font-[600]"> #FaithInUnity   #SpiritualReflections </span> 📖🌿 🌟 
               </p>
            </section>
            <section>
               <section></section>
               <section></section>
               <section></section>
            </section>
         </section>
      </section>
      </>
    );
}
 
export default FeedContent;