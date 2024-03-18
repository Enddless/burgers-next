import Image from 'next/image';
import './styles.css';

export default function OrderSection() {
  return (
    <section className='order bg-center bg-no-repeat pb-44 overflow-hidden' id='order'>
      <div className='container relative'>
        <div className='order-title common-title'>Оформление заказа</div>
        <Image
          src='/order_image.png'
          alt='order'
          className='absolute top-0 -left-60  -z-[1]'
          width={1046}
          height={867}
          priority
        />

        <div className='rounded-2xl bg-custom-black border border-solid border-custom-black mt-14 w-2/5 py-14 px-10 box-border relative left-2/4 flex flex-col items-center'>
          <div className='text-2xl text-center'>
            Заполните все данные и наш менеджер свяжется с вами для подтверждения заказа
          </div>
          <div className='flex flex-col mt-10'>
            <div className='w-custom-width-input-wrapper py-0.5 bg-custom-gradient rounded-lg mb-5 flex justify-center items-center'>
              <input
                className='py-4 px-2.5 bg-custom-input-bg rounded-lg text-white w-custom-width-input h-14 box-border outline-none border border-solid border-transparent'
                type='text'
                placeholder='Ваш заказ'
                id='burger'
              />
            </div>
            <div className='w-custom-width-input-wrapper py-0.5 bg-custom-gradient rounded-lg mb-5 flex justify-center items-center'>
              <input
                className='py-4 px-2.5 bg-custom-input-bg rounded-lg text-white w-custom-width-input h-14 box-border outline-none border border-solid border-transparent'
                type='text'
                placeholder='Ваше имя'
                id='name'
              />
            </div>
            <div className='w-custom-width-input-wrapper py-0.5 bg-custom-gradient rounded-lg mb-5 flex justify-center items-center'>
              <input
                className='py-4 px-2.5 bg-custom-input-bg rounded-lg text-white w-custom-width-input h-14 box-border outline-none border border-solid border-transparent'
                type='text'
                placeholder='Ваш телефон'
                id='phone'
              />
            </div>
            <button className='button custom-width-button' id='order-action'>
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
