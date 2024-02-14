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

const FeedContent = () => {
  return (
    <>
      <section>
        <section className="grid grid-cols-2 gap-44 mb-5">
          <section>
            <Link href="/" className="text-[#211C37] font-[700]">
              Feeds
            </Link>
          </section>
          <section className="flex gap-5 text-[15px]">
            <Link href="/" className="text-[#8D9297] font-[600]">
              Friends
            </Link>
            <Link href="/" className="text-[#8D9297] font-[600]">
              Friends
            </Link>
            <Link href="/" className="text-[#8D9297] font-[600]">
              Friends
            </Link>
          </section>
        </section>
        <section className="bg-[#DFEBFF] rounded-[15px] flex flex-col justify-center p-5">
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
          <section className="flex items-center justify-center ml-24 mr-5">
            <section className="flex items-center flex-col justify-center gap-5">
              <section className="flex items-center justify-center my-2 w-[85%] mr-6">
                <p className="text-[13px] font-[600]">
                  🙏 May we find solace in the presence of the Divine, for it is
                  in our faith that we discover strength, hope, enlightenment.
                  🌟🕊️{" "}
                  <span className="text-[#0048FF] text-[13px] font-[600]">
                    {" "}
                    #FaithInUnity #SpiritualReflections{" "}
                  </span>{" "}
                  📖🌿 🌟
                </p>
              </section>
              <section className="flex gap-10 w-[86%] mr-5">
                <section className="flex gap-5 ">
                  <section>
                    <Image
                      src="/Feed/Post1.svg"
                      width={90}
                      height={20}
                      alt="Post"
                    />
                  </section>
                  <section>
                    <Image
                      src="/Feed/Post2.svg"
                      width={90}
                      height={30}
                      alt="Post"
                    />
                  </section>
                </section>
                <section className="relative">
                  <Image
                    src="/Feed/Post3.svg"
                    width={330}
                    height={30}
                    alt="Post"
                  />
                  <section className="bg-white flex items-center absolute top-34 right-[55px] rounded-full p-1 transform rotate-12 ">
                    <button>🙏</button>
                    <button>💕 </button>
                    <button>😂</button>
                    <button>😭</button>
                    <button>👏</button>
                    <button>
                      <No />
                    </button>
                  </section>
                </section>
              </section>
              <section className="flex gap-40 items-center justify-center mt-6 mr-10 ml-8">
                <section className="flex gap-5">
                  <section className="flex items-center gap-[7px]">
                    <View />
                    <p className="text-[#8D9297] text-[10px] font-[700]">
                      View
                    </p>
                  </section>
                  <section className="flex items-center gap-[7px]">
                    <button>
                      <Like />
                    </button>
                    <p className="text-[#8D9297] text-[10px] font-[700]">
                      Like
                    </p>
                  </section>
                  <Link href="/">
                    <section className="flex items-center gap-[7px]">
                      <Messages />
                      <p className="text-[#8D9297] text-[10px] font-[700]">
                        Comment
                      </p>
                    </section>
                  </Link>
                </section>
                <section className="mr-3">
                  <button className="bg-[#FF94EE] text-white rounded-[40px] h-[25px] w-[120px] text-[12px]">
                    Wooow!Amen
                  </button>
                </section>
              </section>
            </section>
          </section>
        </section>
        <section className="flex items-center justify-center my-3 bg-[#FFF6DF] rounded-[15px] flex-col">
          <section className="flex flex-col w-[100%] mt-6 ">
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
          </section>
          <section className=" px-10 flex flex-col justify-center ml-10 mb-2">
            <section className="flex items-center justify-center my-4 ">
              <p className="text-[13px] font-[600]">
                🙏 May we find solace in the presence of the Divine, for it is
                in our faith that we discover strength, hope, and love. Let us
                come together, sharing our prayers and reflections . 🌟🕊️
                <span className="text-[#0048FF] text-[13px] font-[600]">
                  {" "}
                  @FaithInUnity 📖🌿 🌟{" "}
                </span>{" "}
                May we find solace in the presence of the
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
                  <p className="text-[#8D9297] text-[10px] font-[700]">
                    Comment
                  </p>
                </section>
              </Link>
            </section>
          </section>
        </section>
        <section className="flex items-center justify-center my-3 bg-[#FBCEDB] rounded-[15px] flex-col">
          <section className="flex flex-col w-[100%] mt-6 ">
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
          </section>
          <section className=" px-10 flex flex-col justify-center ml-10 mb-2">
            <section className="flex items-center justify-center my-4 ">
              <p className="text-[13px] font-[600]">
                🙏 May we find solace in the presence of the Divine, for it is
                in our faith that we discover strength, hope, and love. Let us
                come together, sharing our prayers and reflections, as we
                journey towards spiritual enlightenment. 🌟🕊️ 📖🌿 🌟 May we
                find solace in the presence of the Divine, for it is in our
                faith that we discover strength, sharing our prayers and
                reflections, as we journey towards spiritual enlightenment. 🙏✨
                #FaithInUnity #SpiritualReflections 🕊️
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
                  <p className="text-[#8D9297] text-[10px] font-[700]">
                    Comment
                  </p>
                </section>
              </Link>
              <Link href="/" className="items-center flex">
                <section className="flex items-center gap-[7px]">
                  <Share />
                  <p className="text-[#8D9297] text-[10px] font-[700]">Share</p>
                </section>
              </Link>
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
};

export default FeedContent;
