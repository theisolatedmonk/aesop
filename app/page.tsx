import Image from 'next/image'
import hero_desktop from '@/public/hero_desktop.png'
import hero_mobile from '@/public/hero_mobile.png'
import hero_tablet from '@/public/hero_tablet.png'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full ">
      <div className="bg-stone-300 w-full sm:text-center p-2">Trained Aesop consultations are available to provide bespoke skin care advise. <span className='hover:underline font-semibold'><a href="https://www.aesop.com/hk/en/r/live-video-consultations/">Book a video consultation</a> </span> </div>

      <a href="https://www.aesop.com/hk/en/" className="hover:underline p-2 w-full  bg-gray-900 text-white sm:text-center">Click and Collect is now available at Hong Kong. Enjoy complimentary shipping on orders over HK$400 +</a>

      <div className=" hidden justify-between w-full p-4 text-sm font-medium sm:hidden">
        <div className="flex gap-2">
          <a href="/">Skin Care</a>
          <a href="/">Body & Hand</a>
          <a href="/">Hair</a>
          <a href="/">Home</a>
          <a href="/">Kits & Travel</a>
          <a href="/">Gifts</a>
          <a href="/">Read</a>
          <a href="/">
            Stores</a>
          <a href="">Facial Appointments</a>
          <button className=''>
            <svg className="feather feather-search " fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8" /><line x1="21" x2="16.65" y1="21" y2="16.65" /></svg>
          </button>
        </div>
        <div className="flex gap-2">
          <a href="/">Log</a>
          <a href="/">Cabinet</a>
          <a href="/">Cart</a>
        </div>
      </div>
      <Image src={hero_desktop} alt={''} />
      <div className="flex flex-col w-full bg-[#704524] text-white gap-2 p-4">
        <p className='text-sm '>Doorways to the undiscovered</p>
        <p className="text-lg">Othertopias: a collection of unorthodox fragrances</p>
        <p className="text-sm">Step inside six fragrant worlds that transcend our immediate perception —vivid and distinctive.</p>
        <div className='flex p-2 border border-white w-full justify-between'>
          <p className=''>Discover the fragrances</p>
          <p>-</p>
        </div>
      </div>

      <div className="gap-4 flex flex-col p-4">
        <p className="text-sm">Fragrance</p>
        <p className="text-lg">Our personal scents</p>
        <p className="">Unorthodox, evocative, and refined, Aesop fragrances are sensory bridges to memory and connection points to those around us.</p>
        <a href="" className="gap-2 text-sm">
          See all Fragrance <span>-</span>
        </a>
      </div>
      <div className="flex flex-col">

      </div>

    </main>
  )
}
