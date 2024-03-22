'use client';
import Image from 'next/image';
import './styles.css';
import { useState } from 'react';

export default function OrderSection() {
  const [formData, setFormData] = useState({
    burger: '',
    name: '',
    phone: ''
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
          <form className='flex flex-col mt-10'>
            <div className='w-custom-width-input-wrapper py-0.5 rounded-lg mb-5 flex justify-center items-center bg-custom-gradient'>
              <input
                className='py-4 px-2.5 bg-custom-input-bg rounded-lg text-white w-custom-width-input h-14 box-border outline-none border border-solid border-transparent'
                type='text'
                placeholder='Ваш заказ'
                value={formData.burger}
                onChange={handleChange}
                name='burger'
                id='burger'
              />
            </div>
            <div className='w-custom-width-input-wrapper py-0.5 rounded-lg mb-5 flex justify-center items-center bg-custom-gradient'>
              <input
                className='py-4 px-2.5 bg-custom-input-bg rounded-lg text-white w-custom-width-input h-14 box-border outline-none border border-solid border-transparent'
                type='text'
                placeholder='Ваше имя'
                value={formData.name}
                onChange={handleChange}
                name='name'
                id='name'
              />
            </div>
            <div className='w-custom-width-input-wrapper py-0.5 rounded-lg mb-5 flex justify-center items-center bg-custom-gradient'>
              <input
                className='py-4 px-2.5 bg-custom-input-bg rounded-lg text-white w-custom-width-input h-14 box-border outline-none border border-solid border-transparent'
                type='text'
                placeholder='Ваш телефон'
                value={formData.phone}
                onChange={handleChange}
                name='phone'
                id='phone'
              />
            </div>
            <button className={'button custom-width-button'} id='order-action'>
              Оформить заказ
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
