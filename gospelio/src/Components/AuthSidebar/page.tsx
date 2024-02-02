import AuthInputs from '../Inputs/AuthInputs'
import Image from 'next/image';

const Page = () => {
   return ( 
    <>
    {/* <section className='flex flex-row'> */}
      <section className='w-[25%] h-[100vh] Left-back smd:w-[25%] xxl:none'>
        <section className='flex items-center justify-center flex-col relative'>
          <section className='flex flex-row gap-x-[20px] mt-[52px]'>
            <Image src="/Logo/Main-Logo.svg" alt='Logo' height={10} width={40}  className='smd:w-[20px]'/>
            <Image src="/Logo/Logo-Name.svg" alt='Logo-Name' height={40} width={160} className='smd:w-[140px]' />
          </section>
          <Image src="/HandShake.svg" alt='Hand shalke' height={0} width={320} className='absolute -top-[10px]' />
        </section>
        <section className='flex items-center justify-center'>
          <section className='absolute top-96 items-center justify-center  text-[#fff] font-[900] text-[20px]  smd:text-[17px]'>
            <h1>
              <span className='ml-5 smd:ml-3'>Get growth in your <br /></span>
              <span>belief with us through <br /></span>
              <span className='ml-5 smd:ml-3'> different Gospels!</span>
           </h1>
          </section>
        </section>
        <section className='flex items-center justify-center'>
        <section className='absolute top-[480px]  mt-5'>
          <p className='text-[11px] text-[#BDBDBD] smd:text-[9px] xsmd:text-[10px] xsmd:mx-auto smd:items-center'>Lorem ipsum dolor sit amet, consectetur adipiscing <br /><span className='ml-5 smd:ml-2'>elit, sed do eiusmod tempor incididun.</span> </p>
        </section>
        </section>
        <section className='absolute top-[560px] flex gap-[10px] items-center justify-center w-full'>
         <div className='w-[40px] h-[3px] bg-[#fff]'></div>
         <div className='w-[35px] h-[2px] bg-[#9E9E9E]'></div>
         <div className='w-[35px] h-[2px] bg-[#9E9E9E]'></div>
        </section>
      </section>
    {/* </section> */}
    </>
    );
}
 
export default Page;