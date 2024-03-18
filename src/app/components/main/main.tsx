import Image from 'next/image';
import './styles.css';

export default function Main() {
  return (
    <section className='pt-24 pb-48'>
      <div className='relative'>
        <div className='max-w-screen-sm'>
          <span className='bg-red-600 rounded-full py-3 px-4 inline-block text-lg'>
            Новое меню
          </span>
          <div className='flex flex-col gap-y-14'>
            <h1 className='main-title font-black text-9xl tracking-widest uppercase '>
              Бургер чеддер
            </h1>
            <p className='text-2xl leading-7'>
              Мы обновили наше меню, спешите попробовать сезонные новинки и насладиться
              отличным вкусом наших бургеров. Готовим для вас лучшие бургеры в городе из
              отборной мраморной говядины.
            </p>
            <div className='main-action'>
              <button className='button' id='main-action-button'>
                Смотреть меню
              </button>
            </div>
          </div>
        </div>
        <Image
          src='/main_burger.png'
          alt='big burger'
          className='absolute -top-44 left-64'
          width={1286}
          height={980}
          priority
        />
      </div>
    </section>
  );
}
