
import Image from "next/image";
import banner from "@/images/bannerimg.jpg";
import logo from "@/images/logo.png";
import PosterRust from "@/images/antikaratPoster.jpg";
import ImageCoating from "@/images/coatingcar.jpg";
import ImageDetailing from "@/images/detailing.jpeg";
import ImageGlass from "@/images/kaca-film.jpg";
import ImageAbout1 from "@/images/aboutus-1.png";
import ImageAbout2 from "@/images/aboutus-2.png";
import Link from "next/link";
import { CardComponent } from "@/components/Card";
import ButtonComponent from "@/components/TopButton";

export default function Home() {
  return (
    <div className="flex flex-col bg-color-white min-h-screen mb-auto overflow-auto">
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
              <Link
                href=" https://wa.me/6282254335598?text=Halo!%20Saya%20Ingin%20Konsultasi%20Mobil%20Saya..."
                target="_blank"
                className="border-2 border-color-primary w-76 md:w-64 text-center py-1.5 md:px-3 py-4 md:py-6 rounded-lg shadow-md shadow-color-primary hover:bg-color-primary font-bold text-lg md:text-xl hover:scale-105"
              >
                Konsultasi Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-color-secondary" id="about">
        <div className="grid grid-cols-1 md:grid-cols-2 p-8 gap-4 3xl:mx-96">
          <div className="flex text-color-white justify-center items-center p-4 md:p-8">
            <Image src={logo} alt="" width={400} height={400} />
          </div>

          <div className="flex flex-col text-color-white p-8 md:p-16 mx-auto space-y-4 text-2xl">
            <h1 className="text-color-primary font-semibold">Siapa Kami?</h1>
            <h2 className="text-justify">
              Selamat datang di Kabuki Auto Shop – Tempat Terbaik untuk
              Perawatan dan Salon Mobil Anda. Dengan tim ahli mekanik kami dan
              layanan berkualitas tinggi, kami siap memberikan solusi terbaik
              untuk semua kebutuhan otomotif Anda. Hubungi kami sekarang untuk
              mendapatkan layanan yang handal dan profesional.
            </h2>
            <Link
              href=" https://wa.me/6282254335598?text=Halo!%20Saya%20Ingin%20Konsultasi%20Mobil%20Saya"
              target="_blank"
              className="border-2 border-color-primary w-76 md:w-64 text-center py-1.5 md:px-3 py-4 md:py-6 rounded-lg shadow-md shadow-color-primary hover:bg-color-primary font-bold text-lg md:text-xl hover:scale-105"
            >
              Konsultasi Sekarang
            </Link>
          </div>
        </div>
        <div className="flex flex-col  mt-8 space-y-4">
            {" "}
            <h1 className="text-color-primary text-center text-3xl md:text-4xl">Kenapa Memilih Kami?</h1>
            <h1 className="text-color-white text-center text-2xl md:text-3xl font-bold">Kabuki Auto Shop Samarinda</h1>
            <h2 className="text-color-white  px-12 md:px-24 md:text-xl text-justify font-semibold">Kabuki Auto Shop Samarinda – Layanan Otomotif Terpercaya dan Berpengalaman. Dapatkan perawatan dan salon mobil yang berkualitas tinggi dengan layanan terbaik dari tim kami. Nikmati keahlian kami dalam menangani segala jenis kendaraan Anda. Hubungi kami sekarang untuk mendapatkan layanan terbaik!</h2>
          </div>
      </section>
      <section
        className="pt-16 md:pt-40 from-color-secondary text-color-white w-full bg-gradient-to-b to-color-primary/75 min-h-screen"
        id="services"
      >
        <div className="p-8">
          <h1 className="text-3xl text-color-primary font-semibold p-8 tracking-wider text-center">
            Pelayanan
          </h1>
          <h2 className="text-4xl text-center font-bold">
            Salon Mobil <span>Coating</span> Car Detailing ,{" "}
            <span>Kaca Film</span> & <span>Karpet Mobil</span>
          </h2>
          <h3 className="text-2xl text-center font-bold mt-8">
            Berikut adalah Layanan yang kami tawarin di Kabuki Autoshop
            Samarinda
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 3xl:mx-96 p-12 md:p-20 md:pl-40 justify-center items-center">
          <CardComponent
            imagedata={PosterRust}
            title="Anti Karat Mobil"
            description="Anti karat adalah lapisan pelindung yang diterapkan pada bagian mobil untuk mencegah korosi atau karat."
            pesanWA={"Saya Ingin Layanan Anti Karat Mobil"}
          />
          <CardComponent
            imagedata={ImageCoating}
            title="Coating Ceramic Dan Sapphire"
            description={
              "Membuat mobil anda mengkilat seperti baru dan melindungi cat mobil anda setiap hari."
            }
            pesanWA={"Saya Ingin Layanan Coating Mobil"}
          />
          <CardComponent
            imagedata={ImageDetailing}
            title="Detailing Mobil"
            description="Pembersih interior mobil dari noda yang membandel, bikin interior mobil anda seperti baru."
            pesanWA={"Saya Ingin Layanan Detailing Mobil"}
          />
          <CardComponent
            imagedata={ImageGlass}
            title="Kaca Film Mobil"
            description="Kaca film premium tolak panas, untuk menjaga interior dalam kendaraan dari panas sinar matahari."
            pesanWA={"Saya Ingin Layanan Kaca Film Mobil"}
          />
        </div>
      </section>
      <section
        className="min-h-screen  bg-gradient-to-b from-color-primary/75 to-color-white"
        id="contact"
      >
        <h1 className="mt-24 text-color-white font-bold text-2xl font-bold text-center">
          Hubungi Kami
        </h1>
        <h2 className="text-color-white text-center mt-4 text-xl p-4">
          Kabuki auto shop Samarinda adalah bergerak di bidang jasa salon mobil
          terdekat di kota Samarinda yang melayani coating ceramic dan sapphire,
          serta kami juga memiliki kaca film mobil dan karpet mobil kualitas
          premium.
        </h2>
        <div className="flex justify-center items-center mb-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15958.694269657253!2d117.1529731!3d-0.4880632!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df67f004810ccbb%3A0xf8b411f6d0c0f89c!2sKabuki%20Autoshop%20Samarinda!5e0!3m2!1sen!2sid!4v1725556726429!5m2!1sen!2sid"
  
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <ButtonComponent/>
    </div>
  );
}
