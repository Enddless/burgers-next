import Image from 'next/image';
import './styles.css';
import Link from 'next/link';

export default function Main() {
  return (
    <section className='sm:py-2.5 sm:px-2.5 sm:pb-16  md:pt-16 md:px-5 md:pb-28    lg:pt-32 lg:px-10 lg:pb-48'>
      <div className='relative flex flex-col md:block'>
        <div className='order-2 md:max-w-xs  lg:max-w-xl'>
          <div className='flex flex-col sm:gap-y-5 md:gap-y-14 items-start'>
            <span className='bg-red-600 rounded-full py-3 px-4 inline-block text-lg cursor-pointer'>
              Новое меню
            </span>
            <h1 className='main-title font-black text-3xl md:text-7xl lg:text-8xl tracking-widest uppercase '>
              Бургер чеддер
            </h1>
            <p className='text-lg md:text-xl lg:text-2xl  leading-7'>
              Мы обновили наше меню, спешите попробовать сезонные новинки и насладиться
              отличным вкусом наших бургеров. Готовим для вас лучшие бургеры в городе из
              отборной мраморной говядины.
            </p>
            <div className='main-action'>
              <Link href='#products'>
                <button className='button' id='main-action-button'>
                  Смотреть меню
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Image
          src='/burgers-next/main_burger.png'
          alt='big burger'
          className=' relative order-1 md:absolute md:-top-28 md:left-40 lg:-top-44 lg:left-64'
          width={1286}
          height={980}
          priority
        />
      </div>
    </section>
  );
}
