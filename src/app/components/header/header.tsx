import Image from 'next/image';

export default function Header() {
  return (
    <header className='py-10'>
      <div className='container flex items-center'>
        <div className='logo'>
          <Image
            src='/Logo.png'
            alt='Logo'
            className='align-bottom cursor-pointer'
            width={157}
            height={50}
            priority
          />
        </div>
        <nav className='ml-48'>
          <ul className='list-none flex gap-x-20'>
            <li className='font-semibold text-xl text-white no-underline cursor-pointer hover:border-b-2 border-transparent border-b-2'>
              <a data-link='why'>Почему у нас</a>
            </li>
            <li className='font-semibold text-xl text-white no-underline cursor-pointer hover:border-b-2 border-transparent border-b-2'>
              <a data-link='products'>Меню бургеров</a>
            </li>
            <li className='font-semibold text-xl text-white no-underline cursor-pointer hover:border-b-2 border-transparent border-b-2'>
              <a data-link='order'>Оформление заказа</a>
            </li>
          </ul>
        </nav>
        <div
          className='border border-solid border-white py-2.5 box-border rounded-md w-11 y-11 text-center cursor-pointer ml-auto text-lg select-none'
          title='Изменить валюту'
          id='change-currency'>
          $
        </div>
      </div>
    </header>
  );
}
