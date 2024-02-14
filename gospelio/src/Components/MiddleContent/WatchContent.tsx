import Link from "next/link";
import Image from "next/image";
import { MenuSolid, SolidDrop, Menu } from "@/assets/page";

const WatchContent = () => {
   return ( 
      <>
      <section>
      <section className="grid grid-cols-2 gap-44 mb-5">
          <section>
            <Link href="/" className="text-[#211C37] font-[700]">
              Watch videos
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
        <section className="bg-[#fff] rounded-[15px] flex flex-col justify-center p-3">
        <section className="flex items-center justify-center gap-[360px]">
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
            <div className="flex items-center gap-4">
               <Link href="/" className="text-[13px] font-bold text-[#002BC2]">+Follow</Link>
            <button className="">
              <Menu />
            </button>
            </div>
          </section>
        </section>
      </section>
      </>
    );
}
 
export default WatchContent;