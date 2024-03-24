'use client';
import Image from 'next/image';
import Link from 'next/link';
import { SyntheticEvent } from 'react';

export default function Header() {
  const changeCurrency = (e: SyntheticEvent) => {
    const prices = document.querySelectorAll('div[data-link="products-item-price"]');
    const currentCurrency = e.currentTarget.innerHTML;
    let newCurrency = '$';
    let coefficient = 1;

    if (currentCurrency === '$') {
      newCurrency = '₽';
      coefficient = 80;
    } else if (currentCurrency === '₽') {
      newCurrency = 'BYN';
      coefficient = 3;
    } else if (currentCurrency === 'BYN') {
      newCurrency = '€';
      coefficient = 0.9;
    } else if (currentCurrency === '€') {
      newCurrency = '¥';
      coefficient = 6.9;
    }
    e.currentTarget.innerHTML = newCurrency;

    for (let i = 0; i < prices.length; i++) {
      prices[i].innerHTML =
        +(Number(prices[i].getAttribute('data-base-price')) * coefficient).toFixed(1) +
        ' ' +
        newCurrency;
    }
  };
  return (
    <header className='py-10 px-10 z-10 '>
      <div className='flex justify-between items-center'>
        <div className='logo'>
          <Image
            src='/burgers-next/Logo.png'
            alt='Logo'
            className='align-bottom cursor-pointer'
            width={157}
            height={50}
            priority
          />
        </div>
        <nav className='hidden md:block'>
          <ul className='list-none flex  md:gap-x-5 lg:gap-x-20'>
            <li className='font-semibold text-sm md:text-lg lg:text-xl  text-white no-underline  hover:border-b-2 border-transparent border-b-2'>
              <Link href='#why' data-link='why' className='cursor-pointer'>
                Почему у нас
              </Link>
            </li>
            <li className='font-semibold text-sm md:text-lg lg:text-xl text-white no-underline hover:border-b-2 border-transparent border-b-2'>
              <Link href='#products' data-link='products' className='cursor-pointer'>
                Меню бургеров
              </Link>
            </li>
            <li className='font-semibold text-sm md:text-lg lg:text-xl text-white no-underline hover:border-b-2 border-transparent border-b-2'>
              <Link href='#order' data-link='order' className='cursor-pointer'>
                Оформление заказа
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className='border border-solid border-white py-2.5 box-border rounded-md w-11 y-11 text-center cursor-pointer text-lg select-none'
          title='Изменить валюту'
          id='change-currency'
          onClick={changeCurrency}>
          $
        </div>
      </div>
    </header>
  );
}
