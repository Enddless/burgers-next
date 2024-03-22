import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='py-14 px-10'>
      <div className='flex items-center justify-between'>
        <div className='logo'>
          <Image
            src='/Logo.png'
            alt='Logo'
            className='dark:invert'
            width={157}
            height={50}
            priority
          />
        </div>
        <div className='text-base'>Все права защищены</div>
      </div>
    </footer>
  );
}
