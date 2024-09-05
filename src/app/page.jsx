import Image from "next/image";
import banner from "@/images/bannerimg.jpg";
import logo from "@/images/logo.png";

export default function Home() {
  return (
    <div className="flex flex-col bg-color-white min-h-screen mb-auto">
      <section id="home">
        <div className="relative">
          <div className="Image absoulte bottom-0"></div>

          <div className="absolute bottom-0 bg-color-secondary bg-opacity-40 w-full h-full ">
            <div className="flex flex-col md:w-1/2 text-left p-10 mt-40 md:mt-0 xl:p-36 3xl:p-72 space-y-4 text-color-white ">
              <h1 className="text-color-primary text-2xl md:text-3xl font-light">
                Kabuki Autoshop Samarinda
              </h1>
              <h2 className="text-3xl md:text-6xl">
                Premium Car{" "}
                <span className="text-color-primary">Detailing</span> &{" "}
                <span className="text-color-primary">Kaca Film</span>
              </h2>
              <h3 className="text-lg text-justify tracking-tight">
                Kabuki Auto Shop Samarinda adalah jasa pelayanan salon mobil
                terdekat di kota samarinda , kami memiliki berbagai macam produk
                salon mobil seperti nano ceramic coating , kaca film masterpiece
                dan anti karat mobil pertama di kota samarinda !!
              </h3>
              <button className="border-2 border-color-primary w-76 md:w-64 text-center py-1.5 md:px-3 py-4 md:py-6 rounded-lg shadow-md shadow-color-primary hover:bg-color-primary font-bold text-lg md:text-xl">Konsultasi Sekarang</button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-color-secondary" id="about">
        <div className="grid grid-cols-1 md:grid-cols-2 p-8 gap-4 md:mx-96">
          <div className="flex text-color-white justify-center items-center p-4 md:p-8">
            <Image src={logo} alt="" width={400} height={400}/>
          </div>

          <div className="flex-1 flex-col text-color-white p-8 md:p-16 mx-auto space-y-4 text-2xl">
            <h1 className="text-color-primary font-semibold">Siapa Kami?</h1>
            <h2 className="text-justify">
              Selamat datang di Kabuki Auto Shop – Tempat Terbaik untuk Perawatan
              dan Salon Mobil Anda. Dengan tim ahli mekanik kami dan layanan
              berkualitas tinggi, kami siap memberikan solusi terbaik untuk
              semua kebutuhan otomotif Anda. Hubungi kami sekarang untuk
              mendapatkan layanan yang handal dan profesional.
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
