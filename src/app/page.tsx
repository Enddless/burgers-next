import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import WhySection from './components/why';
import ProductsSection from './components/products';
import OrderSection from './components/order';

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

