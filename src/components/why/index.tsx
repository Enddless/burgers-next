import Image from 'next/image';
import './styles.css';

export default function WhySection() {
  return (
    <section
      className='why flex justify-center bg-no-repeat bg-center bg-cover pb-44'
      id='why'>
      <div className='container'>
        <div className='why-title common-title'>Почему нас выбирают</div>
        <div className='mt-14  flex flex-col gap-y-7 md:grid md:gap-7 lg:gap-24 grid-cols-3 justify-center'>
          <div className='text-center'>
            <Image
              src='/burger.png'
              alt='burger'
              className='mx-auto'
              width={100}
              height={24}
              priority
            />
            <div className='text-2xl py-6'>Авторские рецепты</div>
            <div className='text-base'>
              Наши бургеры обладают уникальным сочетанием вкусов и не похожи ни на какие
              другие. Мы тщательно отбираем лучшие ингредиенты и сочетания вкусов для
              нашего меню.
            </div>
          </div>
          <div className='text-center'>
            <Image
              src='/meat.png'
              alt='meat'
              className='mx-auto'
              width={100}
              height={24}
              priority
            />
            <div className='text-2xl py-6'>Мраморная говядина</div>
            <div className='text-base'>
              Для наших бургеров мы используем отборную 100% мраморную говядину, которую
              закупаем исключительно у фермеров. Мы уверены в качестве нашего мяса.
            </div>
          </div>
          <div className='text-center'>
            <Image
              src='/truck.png'
              alt='truck'
              className='mx-auto'
              width={100}
              height={24}
              priority
            />
            <div className='text-2xl py-6'>Быстрая доставка</div>
            <div className='text-base'>
              Мы доставляем в пределах МКАД за 30 минут, а если не успеем — доставка
              бесплатно. Мы тщательно упаковываем наши бургеры, чтобы по дороге они не
              остыли.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
