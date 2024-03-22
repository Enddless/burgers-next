import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Main from '@/components/main/main';
import OrderSection from '@/components/order';
import ProductsSection from '@/components/products';
import WhySection from '@/components/why';

export default function Home() {
  return (
    <>
      <section className='main'>
        <Header />
        <Main />
      </section>
      <WhySection />
      <ProductsSection />
      <OrderSection />
      <Footer />
    </>
  );
}

