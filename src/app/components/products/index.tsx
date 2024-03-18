import Image from 'next/image';
import './styles.css';

export default function ProductsSection() {
  return (
    <section className='products bg-no-repeat bg-center bg-contain pb-44' id='products'>
      <div className='container'>
        <div className='products-title common-title'>выберите свой бургер</div>
        <div className='grid grid-cols-3 gap-6 mt-14'>
          <div className='p-7 bg-custom-black rounded-2xl border border-solid border-custom-black'>
            <div className='h-64'>
              <Image
                src='/1.png'
                alt='burger 1'
                className='max-w-full m-auto'
                width={324}
                height={250}
                priority
              />
            </div>
            <div className='text-2xl my-6'>Бургер чеддер & бекон</div>
            <div className='text-base mb-6'>
              Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук
              красный, салат айсбер, майонез, кетчуп, сырный соус
            </div>
            <div className='flex justify-between'>
              <div className='products-item-info'>
                <div className='text-3xl mb-2' data-base-price='8'>
                  8 $
                </div>
                <div className='text-base text-slate-400'>360 гр</div>
              </div>
              <div className='products-item-action'>
                <button className='button product-button'>
                  <span>Заказать</span>
                  <span>
                    <svg
                      width='25'
                      height='24'
                      viewBox='0 0 25 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M17.5 18C18.0304 18 18.5391 18.2107 18.9142 18.5858C19.2893 18.9609 19.5 19.4696 19.5 20C19.5 20.5304 19.2893 21.0391 18.9142 21.4142C18.5391 21.7893 18.0304 22 17.5 22C16.9696 22 16.4609 21.7893 16.0858 21.4142C15.7107 21.0391 15.5 20.5304 15.5 20C15.5 18.89 16.39 18 17.5 18ZM1.5 2H4.77L5.71 4H20.5C20.7652 4 21.0196 4.10536 21.2071 4.29289C21.3946 4.48043 21.5 4.73478 21.5 5C21.5 5.17 21.45 5.34 21.38 5.5L17.8 11.97C17.46 12.58 16.8 13 16.05 13H8.6L7.7 14.63L7.67 14.75C7.67 14.8163 7.69634 14.8799 7.74322 14.9268C7.79011 14.9737 7.8537 15 7.92 15H19.5V17H7.5C6.96957 17 6.46086 16.7893 6.08579 16.4142C5.71071 16.0391 5.5 15.5304 5.5 15C5.5 14.65 5.59 14.32 5.74 14.04L7.1 11.59L3.5 4H1.5V2ZM7.5 18C8.03043 18 8.53914 18.2107 8.91421 18.5858C9.28929 18.9609 9.5 19.4696 9.5 20C9.5 20.5304 9.28929 21.0391 8.91421 21.4142C8.53914 21.7893 8.03043 22 7.5 22C6.96957 22 6.46086 21.7893 6.08579 21.4142C5.71071 21.0391 5.5 20.5304 5.5 20C5.5 18.89 6.39 18 7.5 18ZM16.5 11L19.28 6H6.64L9 11H16.5Z'
                        fill='#191411'
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className='p-7 bg-custom-black rounded-2xl border border-solid border-custom-black'>
            <div className='h-64'>
              <Image
                src='/2.png'
                alt='burger 2'
                className='max-w-full m-auto'
                width={324}
                height={250}
                priority
              />
            </div>
            <div className='text-2xl my-6'>BBQ с беконом и курицей</div>
            <div className='text-base mb-6'>
              Булочка бриошь с кунжутом, куриная котлета, сыр чеддер, томат, огурец
              маринованный, лук маринованный, салат Ромен, бекон, соус BBQ
            </div>
            <div className='flex justify-between'>
              <div className='products-item-info'>
                <div className='text-3xl mb-2' data-base-price='7'>
                  7 $
                </div>
                <div className='text-base text-slate-400'>390 гр</div>
              </div>
              <div className='products-item-action'>
                <button className='button product-button'>
                  <span>Заказать</span>
                  <span>
                    <svg
                      width='25'
                      height='24'
                      viewBox='0 0 25 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M17.5 18C18.0304 18 18.5391 18.2107 18.9142 18.5858C19.2893 18.9609 19.5 19.4696 19.5 20C19.5 20.5304 19.2893 21.0391 18.9142 21.4142C18.5391 21.7893 18.0304 22 17.5 22C16.9696 22 16.4609 21.7893 16.0858 21.4142C15.7107 21.0391 15.5 20.5304 15.5 20C15.5 18.89 16.39 18 17.5 18ZM1.5 2H4.77L5.71 4H20.5C20.7652 4 21.0196 4.10536 21.2071 4.29289C21.3946 4.48043 21.5 4.73478 21.5 5C21.5 5.17 21.45 5.34 21.38 5.5L17.8 11.97C17.46 12.58 16.8 13 16.05 13H8.6L7.7 14.63L7.67 14.75C7.67 14.8163 7.69634 14.8799 7.74322 14.9268C7.79011 14.9737 7.8537 15 7.92 15H19.5V17H7.5C6.96957 17 6.46086 16.7893 6.08579 16.4142C5.71071 16.0391 5.5 15.5304 5.5 15C5.5 14.65 5.59 14.32 5.74 14.04L7.1 11.59L3.5 4H1.5V2ZM7.5 18C8.03043 18 8.53914 18.2107 8.91421 18.5858C9.28929 18.9609 9.5 19.4696 9.5 20C9.5 20.5304 9.28929 21.0391 8.91421 21.4142C8.53914 21.7893 8.03043 22 7.5 22C6.96957 22 6.46086 21.7893 6.08579 21.4142C5.71071 21.0391 5.5 20.5304 5.5 20C5.5 18.89 6.39 18 7.5 18ZM16.5 11L19.28 6H6.64L9 11H16.5Z'
                        fill='#191411'
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className='p-7 bg-custom-black rounded-2xl border border-solid border-custom-black'>
            <div className='h-64'>
              <Image
                src='/3.png'
                alt='burger 3'
                className='max-w-full m-auto'
                width={324}
                height={250}
                priority
              />
            </div>
            <div className='text-2xl my-6'>Дабл биф бургер</div>
            <div className='text-base mb-6'>
              Две говяжьи котлеты, сыр чеддер, салат романо, маринованные огурцы, свежий
              томат, бекон, красный лук, соус бургер, горчица
            </div>
            <div className='flex justify-between'>
              <div className='products-item-info'>
                <div className='text-3xl mb-2' data-base-price='10'>
                  10 $
                </div>
                <div className='text-base text-slate-400'>420 гр</div>
              </div>
              <div className='products-item-action'>
                <button className='button product-button'>
                  <span>Заказать</span>
                  <span>
                    <svg
                      width='25'
                      height='24'
                      viewBox='0 0 25 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M17.5 18C18.0304 18 18.5391 18.2107 18.9142 18.5858C19.2893 18.9609 19.5 19.4696 19.5 20C19.5 20.5304 19.2893 21.0391 18.9142 21.4142C18.5391 21.7893 18.0304 22 17.5 22C16.9696 22 16.4609 21.7893 16.0858 21.4142C15.7107 21.0391 15.5 20.5304 15.5 20C15.5 18.89 16.39 18 17.5 18ZM1.5 2H4.77L5.71 4H20.5C20.7652 4 21.0196 4.10536 21.2071 4.29289C21.3946 4.48043 21.5 4.73478 21.5 5C21.5 5.17 21.45 5.34 21.38 5.5L17.8 11.97C17.46 12.58 16.8 13 16.05 13H8.6L7.7 14.63L7.67 14.75C7.67 14.8163 7.69634 14.8799 7.74322 14.9268C7.79011 14.9737 7.8537 15 7.92 15H19.5V17H7.5C6.96957 17 6.46086 16.7893 6.08579 16.4142C5.71071 16.0391 5.5 15.5304 5.5 15C5.5 14.65 5.59 14.32 5.74 14.04L7.1 11.59L3.5 4H1.5V2ZM7.5 18C8.03043 18 8.53914 18.2107 8.91421 18.5858C9.28929 18.9609 9.5 19.4696 9.5 20C9.5 20.5304 9.28929 21.0391 8.91421 21.4142C8.53914 21.7893 8.03043 22 7.5 22C6.96957 22 6.46086 21.7893 6.08579 21.4142C5.71071 21.0391 5.5 20.5304 5.5 20C5.5 18.89 6.39 18 7.5 18ZM16.5 11L19.28 6H6.64L9 11H16.5Z'
                        fill='#191411'
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className='p-7 bg-custom-black rounded-2xl border border-solid border-custom-black'>
            <div className='h-64'>
              <Image
                src='/4.png'
                alt='burger 4'
                className='max-w-full m-auto'
                width={324}
                height={250}
                priority
              />
            </div>
            <div className='text-2xl my-6'>Баварский бургер</div>
            <div className='text-base mb-6'>
              Булочка для бургера, говяжья котлета, красный лук, сыр, охотничья колбаска,
              соус барбекю, соус сырный, салат айсберг
            </div>
            <div className='flex justify-between'>
              <div className='products-item-info'>
                <div className='text-3xl mb-2' data-base-price='7'>
                  7 $
                </div>
                <div className='text-base text-slate-400'>220 гр</div>
              </div>
              <div className='products-item-action'>
                <button className='button product-button'>
                  <span>Заказать</span>
                  <span>
                    <svg
                      width='25'
                      height='24'
                      viewBox='0 0 25 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M17.5 18C18.0304 18 18.5391 18.2107 18.9142 18.5858C19.2893 18.9609 19.5 19.4696 19.5 20C19.5 20.5304 19.2893 21.0391 18.9142 21.4142C18.5391 21.7893 18.0304 22 17.5 22C16.9696 22 16.4609 21.7893 16.0858 21.4142C15.7107 21.0391 15.5 20.5304 15.5 20C15.5 18.89 16.39 18 17.5 18ZM1.5 2H4.77L5.71 4H20.5C20.7652 4 21.0196 4.10536 21.2071 4.29289C21.3946 4.48043 21.5 4.73478 21.5 5C21.5 5.17 21.45 5.34 21.38 5.5L17.8 11.97C17.46 12.58 16.8 13 16.05 13H8.6L7.7 14.63L7.67 14.75C7.67 14.8163 7.69634 14.8799 7.74322 14.9268C7.79011 14.9737 7.8537 15 7.92 15H19.5V17H7.5C6.96957 17 6.46086 16.7893 6.08579 16.4142C5.71071 16.0391 5.5 15.5304 5.5 15C5.5 14.65 5.59 14.32 5.74 14.04L7.1 11.59L3.5 4H1.5V2ZM7.5 18C8.03043 18 8.53914 18.2107 8.91421 18.5858C9.28929 18.9609 9.5 19.4696 9.5 20C9.5 20.5304 9.28929 21.0391 8.91421 21.4142C8.53914 21.7893 8.03043 22 7.5 22C6.96957 22 6.46086 21.7893 6.08579 21.4142C5.71071 21.0391 5.5 20.5304 5.5 20C5.5 18.89 6.39 18 7.5 18ZM16.5 11L19.28 6H6.64L9 11H16.5Z'
                        fill='#191411'
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className='p-7 bg-custom-black rounded-2xl border border-solid border-custom-black'>
            <div className='h-64'>
              <Image
                src='/5.png'
                alt='burger 5'
                className='max-w-full m-auto'
                width={324}
                height={250}
                priority
              />
            </div>
            <div className='text-2xl my-6'>Бекон чизбургер</div>
            <div className='text-base mb-6'>
              Булочка для бургера, говяжья котлета, грудинка, помидор, огурец
              маринованный, сыр, сырный соус, кетчуп, зелень
            </div>
            <div className='flex justify-between'>
              <div className='products-item-info'>
                <div className='text-3xl mb-2' data-base-price='8'>
                  8 $
                </div>
                <div className='text-base text-slate-400'>220 гр</div>
              </div>
              <div className='products-item-action'>
                <button className='button product-button'>
                  <span>Заказать</span>
                  <span>
                    <svg
                      width='25'
                      height='24'
                      viewBox='0 0 25 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M17.5 18C18.0304 18 18.5391 18.2107 18.9142 18.5858C19.2893 18.9609 19.5 19.4696 19.5 20C19.5 20.5304 19.2893 21.0391 18.9142 21.4142C18.5391 21.7893 18.0304 22 17.5 22C16.9696 22 16.4609 21.7893 16.0858 21.4142C15.7107 21.0391 15.5 20.5304 15.5 20C15.5 18.89 16.39 18 17.5 18ZM1.5 2H4.77L5.71 4H20.5C20.7652 4 21.0196 4.10536 21.2071 4.29289C21.3946 4.48043 21.5 4.73478 21.5 5C21.5 5.17 21.45 5.34 21.38 5.5L17.8 11.97C17.46 12.58 16.8 13 16.05 13H8.6L7.7 14.63L7.67 14.75C7.67 14.8163 7.69634 14.8799 7.74322 14.9268C7.79011 14.9737 7.8537 15 7.92 15H19.5V17H7.5C6.96957 17 6.46086 16.7893 6.08579 16.4142C5.71071 16.0391 5.5 15.5304 5.5 15C5.5 14.65 5.59 14.32 5.74 14.04L7.1 11.59L3.5 4H1.5V2ZM7.5 18C8.03043 18 8.53914 18.2107 8.91421 18.5858C9.28929 18.9609 9.5 19.4696 9.5 20C9.5 20.5304 9.28929 21.0391 8.91421 21.4142C8.53914 21.7893 8.03043 22 7.5 22C6.96957 22 6.46086 21.7893 6.08579 21.4142C5.71071 21.0391 5.5 20.5304 5.5 20C5.5 18.89 6.39 18 7.5 18ZM16.5 11L19.28 6H6.64L9 11H16.5Z'
                        fill='#191411'
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className='p-7 bg-custom-black rounded-2xl border border-solid border-custom-black'>
            <div className='h-64'>
              <Image
                src='/6.png'
                alt='burger 6'
                className='max-w-full m-auto'
                width={324}
                height={250}
                priority
              />
            </div>
            <div className='text-2xl my-6'>Индиана бургер</div>
            <div className='text-base mb-6'>
              Булочка для бургера, котлета куриная, грудинка, яйцо, огурец маринованный,
              криспи лук, кетчуп, соус сырный, горчица, зелень
            </div>
            <div className='flex justify-between'>
              <div className='products-item-info'>
                <div className='text-3xl mb-2' data-base-price='9'>
                  9 $
                </div>
                <div className='text-base text-slate-400'>320 гр</div>
              </div>
              <div className='products-item-action'>
                <button className='button product-button'>
                  <span>Заказать</span>
                  <span>
                    <svg
                      width='25'
                      height='24'
                      viewBox='0 0 25 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M17.5 18C18.0304 18 18.5391 18.2107 18.9142 18.5858C19.2893 18.9609 19.5 19.4696 19.5 20C19.5 20.5304 19.2893 21.0391 18.9142 21.4142C18.5391 21.7893 18.0304 22 17.5 22C16.9696 22 16.4609 21.7893 16.0858 21.4142C15.7107 21.0391 15.5 20.5304 15.5 20C15.5 18.89 16.39 18 17.5 18ZM1.5 2H4.77L5.71 4H20.5C20.7652 4 21.0196 4.10536 21.2071 4.29289C21.3946 4.48043 21.5 4.73478 21.5 5C21.5 5.17 21.45 5.34 21.38 5.5L17.8 11.97C17.46 12.58 16.8 13 16.05 13H8.6L7.7 14.63L7.67 14.75C7.67 14.8163 7.69634 14.8799 7.74322 14.9268C7.79011 14.9737 7.8537 15 7.92 15H19.5V17H7.5C6.96957 17 6.46086 16.7893 6.08579 16.4142C5.71071 16.0391 5.5 15.5304 5.5 15C5.5 14.65 5.59 14.32 5.74 14.04L7.1 11.59L3.5 4H1.5V2ZM7.5 18C8.03043 18 8.53914 18.2107 8.91421 18.5858C9.28929 18.9609 9.5 19.4696 9.5 20C9.5 20.5304 9.28929 21.0391 8.91421 21.4142C8.53914 21.7893 8.03043 22 7.5 22C6.96957 22 6.46086 21.7893 6.08579 21.4142C5.71071 21.0391 5.5 20.5304 5.5 20C5.5 18.89 6.39 18 7.5 18ZM16.5 11L19.28 6H6.64L9 11H16.5Z'
                        fill='#191411'
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
