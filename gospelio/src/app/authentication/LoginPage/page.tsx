import AuthSidebar from '../../../Components/AuthSidebar/page'
import Link from 'next/link';
import Image from 'next/image';
import AuthInputs from '@/Components/Inputs/AuthInputs';
import MainButton from '@/Components/Buttons/MainButton';
import Google from '@/Components/Cards/WithGoogle';
import Apple from '@/Components/Cards/WithApple';
import Facebook from '@/Components/Cards/WithFacebook';
import Footer from '@/Components/Footer/page';

const Page = () => {
   return ( 
    <>
    <section className='flex flex-row'>
      <section className='w-[25%]'>
        <AuthSidebar />
      </section>
      <section>
      <header className='ml-10 mt-5 grid grid-cols-2 gap-[390px] mxl:w-[100%] mxl:gap-[320px] nxl:gap-[320px] lg:gap-[280px] pxl:gap-[260px] txl:gap-[230px] dxl:gap-[200px] xmd:gap-[180px] smd:gap-[140px] xsmd:gap-[40px]'>
        <section className='flex flex-row mxl:items-center pxl:items-center'>
          <Image src="/Logo/ChevronIcon.svg" alt='Back Icon' height={12} width={20} />
          <h1 className='font-[600]'><span className='return'>Return </span><span className='home'>Home</span></h1>
        </section>
        <section className='flex text-[12.8px]'>
          <h1 className='text-[#424242] font-[300] text-[15px] mr-5'>Not a member yet?</h1>
          <Link href="/" className='text-[15px]'>JOIN NOW</Link>
        </section>
      </header>
      <section className='flex items-center justify-center mt-10 flex-col'>
        <h1 className='text-[35px] mb-5'> <span className='welcome'>WELCOME </span><span className='back'>BACK </span><span className='to'>TO </span><span className='gospelio'>GOSPELIO</span></h1>
        <p className='text-[#424242] font-[300]'>Login to continue</p>
      </section>
      <section>
        <AuthInputs 
           labelName='Email'
           type='text'
           placeholder='castellaine@gmail.com'
         />
          <AuthInputs 
           labelName='Password'
           type='password'
           placeholder='*****************'
         />
      </section>
      <section className='flex items-center justify-center gap-[150px] text-[14px]'>
        <div className='flex items-center gap-2'>
          <input type="checkbox" />
          <label htmlFor="remenber" className='font-[400]'>Remember me</label>
        </div>
        <div>
          <p className='text-[#424242]'>Forgot password?</p>
        </div>
      </section>
      <section className='flex flex-col items-center justify-center mt-10'>
        <MainButton title='CONTINUE' />
        <p className='mt-5 font-[600]'>Or</p>
      </section>
      <section>
        <Google />
        <Facebook />
        <Apple />
      </section>
      <section>
        <Footer />
      </section>
    </section>
    </section>
    </>
    );
}
 
export default Page;