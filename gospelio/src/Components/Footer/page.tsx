import Image from 'next/image'

const Footer = () => {
   return (  
      <>
         <footer className='ml-10 mt-16 flex gap-[400px] my-10 mxl:gap-[376px] nxl:gap-[374px] lg:gap-[271px] pxl:gap-[269px] txl:gap-[264px] dxl:gap-[250px] xmd:gap-[220px] smd:gap-[100px] xsmd:gap-[70px]'>
        <section className='flex flex-row w-[70%]'>
          <h1 className='font-[300] text-[12.8px]'>Copyright 2021  - 2022 Gospelio. All Rights Reserved</h1>
        </section>
        <section className='flex text-[12.8px] justify-center items-center gap-[8px] w-[20%] '>
          <Image src="/Help.svg" alt="Help" height={20} width={10} />
          <h1 className='text-[#424242] font-[400] text-[12.8px]'>Need help?</h1>
        </section>
      </footer>
      </>
    );
}
 
export default Footer;