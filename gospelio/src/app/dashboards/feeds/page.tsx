import FeedHeader from "@/Components/Headers/FeedHeader";
import FeedContent from "@/Components/MiddleContent/FeedMiddleContent";
import FeedRightSidebar from "@/Components/RightSidebar/FeedRightSidebar";
import FeedSidebar from "@/Components/Sidebars/FeedSideBar";

const page = () => {
   return ( 
      <>
        <section className="w-full top-0 sticky z-50 bg-[#F8F8F9]">
          <FeedHeader />
        </section>
      <section className="bg-[#F8F8F9] pt-[0.1px] flex">
          <section className="w-[25%] bg-[#F8F8F9]">
            <FeedSidebar />
          </section>
          <section className="w-[50%] ml-5 pt-10">
            <FeedContent />
          </section>
          <section className="w-[25%] pt-10 ml-5">
            <FeedRightSidebar />
          </section>
      </section>
      </>
    );
}
 
export default page;