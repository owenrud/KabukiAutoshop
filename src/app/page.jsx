import Image from "next/image";
import banner from "@/images/bannerimg.jpg"

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
    <section>
      <div className="relative ">
      <Image className="" src={banner}  style={{ objectPosition:'60% 40%', objectFit:'cover', width: '100%', height: '700px' }}/>

      <div className="absolute bottom-0 bg-color-secondary bg-opacity-40 w-full h-full ">
        <div className="flex flex-col md:w-1/2 text-left p-10 mt-40 md:mt-0 md:p-72 space-y-4 text-color-white ">
        <h1 className="text-color-primary text-2xl md:text-3xl font-light">Kabuki Autoshop Samarinda</h1>
        <h2 className="text-3xl md:text-6xl">Premium Car <span className="text-color-primary">Detailing</span> & <span className="text-color-primary">Kaca Film</span></h2>
        <h3 className="text-lg text-justify tracking-tight">Kabuki Auto Shop Samarinda adalah jasa pelayanan salon mobil terdekat di kota samarinda , kami memiliki berbagai macam produk salon mobil seperti nano ceramic coating , kaca film masterpiece dan anti karat mobil pertama di kota samarinda !!</h3>
        </div>
       
      </div>

      </div>
    </section>
    </div>

  );
}
