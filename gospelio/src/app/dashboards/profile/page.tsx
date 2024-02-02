import ProfSidebar from '../../../Components/ProfSidebar/page'
import ProfHeader from '../../../Components/ProfHeader/page'
import ProfileSettings from '@/Components/ProfileSections/ProfileSettings';
import ProfileInformation from '@/Components/ProfileSections/ProfileInformation';
import Conversations from '@/Components/ProfileSections/Conversations';

const Page = () => {
   return ( 
      <>
      <section className='flex flex-row'>
         <section className='w-[20%]'>
           <ProfSidebar />
         </section>
         <section className=' w-[80%]  bg-[#F8F8F8]'>
            <ProfHeader />
            <section className='flex gap-5'>
              <section className='w-[35%]'>
                <ProfileSettings />
              </section>
              <section  className='w-[35%]'>
                <ProfileInformation />
              </section>
              {/* <section  className='w-[25%]'>
                <Conversations />
              </section> */}
            </section>
          </section>
         </section>
      </>
    );
}
 
export default Page;