import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <main className="w-full overflow-hidden bg-white">
        {/* Hero: две колонки */}
        <section className="grid grid-cols-1 md:grid-cols-2 h-[1000px]">
          {/* левая колонка: фон + полупрозрачный оверлей */}
          <div className="relative">
            <Image
                src="/hero.jpg"
                alt="Интерьер кафе"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-[#7C4A31]/70 flex flex-col justify-center px-8 md:px-16 text-white">
              <div className="w-full flex flex-col justify-center items-center text-center w-full">
                <Image
                    src="/logo.svg"
                    alt="Кофемакс"
                    width={120}
                    height={120}
                    className="mb-8"
                />
                <h1 className="text-2xl md:text-3xl font-normal mb-4 font-heading">
                  МЕСТО ПРИТЯЖЕНИЯ <br/> УСПЕШНЫХ ЛЮДЕЙ
                </h1>
                <p className="text-xl">Скоро открытие, следи за нами</p>
              </div>
            </div>
          </div>

          {/* правая колонка: просто изображение */}
          <div className="relative">
            <Image
                src="/hero2.jpg"
                alt="Интерьер кафе"
                fill
                className="object-cover"
                priority
            />
          </div>
        </section>


        {/* Contacts */}
        <section id="contacts" className="py-16 px-8 md:px-16">
        <h2 className="text-3xl font-black text-[#7C4A31] mb-8">Контакты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Левый блок: адрес и телефон */}
            <div className="space-y-6 text-black flex flex-col justify-center">
              <div>
                <h3 className="font-semibold">Адрес:</h3>
                <p>Ярославль, Волжская набережная 43</p>
              </div>
              <div>
                <h3 className="font-semibold">Телефон:</h3>
                <Link href="tel:00000000000" className="text-brown hover:underline">
                  8 000 000-00-00
                </Link>
              </div>
              <h2 className="font-bold text-xl text-[#7C4A31]">Присоединяйся к нам</h2>
              <div className="flex space-x-4">

                <Link href="https://vk.com/cofemaks_yar" target="_blank" rel="noopener">
                  <Image src="/vk.png" alt="VK" width={56} height={56}/>
                </Link>
                <Link href="https://instagram.com/coffeemax.yar" target="_blank" rel="noopener">
                  <Image
                      src="/instagram.png"
                      alt="Instagram"
                      width={56}
                      height={56}
                  />
                </Link>
              </div>
            </div>

            {/* Правый блок: карта */}
            <div>
              <iframe
                  src="https://maps.google.com/maps?q=Yaroslavl%20Volzhskaya%20naberezhnaya%2043&t=&z=15&ie=UTF8&iwloc=&output=embed"

                  loading="lazy"
                  allowFullScreen
                  className="w-full h-64 rounded"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
  );
}
