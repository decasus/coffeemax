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
                <h1 className="text-2xl md:text-3xl font-black mb-4 font-heading ">
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
              <div className="flex space-x-4">
                <Link href="https://vk.com/cofemaks_yar" target="_blank" rel="noopener">
                  <Image src="/vk.png" alt="VK" width={32} height={32}/>
                </Link>
                <Link href="https://instagram.com/coffeemax.yar" target="_blank" rel="noopener">
                  <Image
                      src="/instagram.png"
                      alt="Instagram"
                      width={32}
                      height={32}
                  />
                </Link>
              </div>
            </div>

            {/* Правый блок: карта */}
            <div>
              <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab4beabdf61cc9891b67de0231b3f70a62334b96c7606a00477db3cd139ee8a88&amp;source=constructor"

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
