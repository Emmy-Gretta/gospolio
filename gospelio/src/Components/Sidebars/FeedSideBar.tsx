import {
  Events,
  Feed,
  Logout,
  Messages,
  Photos,
  Post,
  WatchVideos,
} from "@/assets/page";
import Image from "next/image";
import Link from "next/link";

const FeedSidebar = () => {
  return (
    <>
      <section className="ml-5">
        <section>
          <section className="bg-white mt-10 w-[270px] h-[170px] flex items-center justify-center rounded-[15px]">
            <section className="bg-[#F8F8F9] w-[240px] h-[140px] rounded-[15px] flex items-center justify-center">
              <section className="flex flex-col gap-5">
                <section>
                  <div className="flex gap-[10px]">
                    <Image
                      src="/Profile/Picture.svg"
                      width={38}
                      height={23}
                      alt="Profile picture"
                    />
                    <div className="relative">
                      <div className="flex text-[11px] text-[#211C37] font-[600] items-center gap-5">
                        <p>Castella Cinta</p>
                        <p>💦</p>
                      </div>
                      <p className="text-[#85878D] text-[10px] absolute top-5 font-[600]">
                        @Cast_Ella
                      </p>
                    </div>
                  </div>
                </section>
                <section className="flex gap-5">
                  <section>
                    <h1 className="text-[#211C37] text-[12px] font-[600]">
                      2.3K
                    </h1>
                    <Link href="/">
                      <p className="text-[#85878D] text-[12px] font-[600]">
                        Follower
                      </p>
                    </Link>
                  </section>
                  <section>
                    <h1 className="text-[#211C37] text-[12px] font-[600]">
                      233
                    </h1>
                    <Link href="/">
                      <p className="text-[#85878D] text-[12px] font-[600]">
                        Following
                      </p>
                    </Link>
                  </section>
                  <section>
                    <h1 className="text-[#211C37] text-[12px] font-[600]">
                      80
                    </h1>
                    <Link href="/">
                      <p className="text-[#85878D] text-[12px] font-[600]">
                        post
                      </p>
                    </Link>
                  </section>
                </section>
              </section>
            </section>
          </section>
          <section className="flex flex-col items-center justify-center rounded-[15px] mt-4 bg-white w-[270px]">
            <section className="flex flex-col gap-5 mt-4">
              <button className="flex gap-[40px] items-center bg-[#FF94EE] w-[260px] h-[35px] rounded-[40px] justify-center hover:bg-[#ffccf7]">
                <div className="flex  gap-[19px]">
                  <Feed />
                  <p className="text-[#0048FF] text-[14px] font-[500]">
                    News feed
                  </p>
                </div>
                <div>
                  <div className="bg-[#D6008D] w-[20px] h-[20px] rounded-full flex  items-center justify-center">
                    <p className="text-[#fff] text-[10px]">30</p>
                  </div>
                </div>
              </button>
              <div className="flex flex-col gap-5 ml-10">
                <button className="flex gap-[19px] items-center hover:bg-[#ccc] hover:h-[30px] rounded-[15px] hover:p-3">
                  <Messages />
                  <p className="font-[600] text-[14px]">Messages</p>
                </button>
                <button className="flex gap-[19px] items-center hover:bg-[#ccc] hover:h-[30px] rounded-[15px] hover:p-3">
                  <Events />
                  <p className="font-[600] text-[14px]">Events</p>
                </button>
                <button className="flex gap-[19px] items-center hover:bg-[#ccc] hover:h-[30px] rounded-[15px] hover:p-3">
                  <WatchVideos />
                  <p className="font-[600] text-[14px]">Watch videos</p>
                </button>
                <button className="flex gap-[19px] items-center hover:bg-[#ccc] hover:h-[30px] rounded-[15px] hover:p-3">
                  <Photos />
                  <p className="font-[600] text-[14px]">Photos</p>
                </button>
                <button className="flex gap-[19px] items-center hover:bg-[#ccc] hover:h-[30px] rounded-[15px] hover:p-3">
                  <Post />
                  <p className="font-[600] text-[14px]">My post</p>
                </button>
              </div>
            </section>
            <section className="m-7">
              <Image
                src="/Profile/FeedBar.svg"
                width={1000}
                height={23}
                alt="Bar"
              />
            </section>
            <section className="mb-10">
              <section className="grid grid-cols-2 gap-10">
                <Link
                  href="/"
                  className="text-[#D6008D] text-[14px] font-[700]"
                >
                  Top Creators
                </Link>
                <Link href="/" className="text-[14px] font-[700] ml-[35px]">
                  See all
                </Link>
              </section>
              <section>
                <section className="grid grid-cols-2 mt-5">
                  <section>
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
                  <section>
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
                  <section>
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
          </section>
          <section>
            <section className="flex  mb-12">
              <div className="w-[230px] h-[190px] bg-[#76BDFF] rounded-[20px] mt-8">
                <div className="w-[40px] h-[40px] bg-white m-5 rounded-xl flex justify-center items-center">
                  <Image
                    src="/Profile/Help.svg"
                    width={30}
                    height={12}
                    alt="Help"
                  />
                </div>
                <div className="ml-5 mt-4 text-[#fff] text-[12px]">
                  <p className="font-[700]">Need help?</p>
                  <p className="font-[300]">Please check our docs</p>
                </div>
                <div className="flex items-center justify-center mt-4">
                  <button className="bg-white text-[12px] text-[#2D3748] font-[600] h-[35px] w-[190px] rounded-[12px] hover:bg-[#e1dddd]">
                    Documentation
                  </button>
                </div>
              </div>
            </section>
          </section>
          <section className="mb-6">
          <section className="flex gap-5">
            <Logout />
            <h1 className="text-[#8D9297] font-[600] text-[14px]">LOGOUT</h1>
          </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default FeedSidebar;
