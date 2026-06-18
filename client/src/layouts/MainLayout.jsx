import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollTop from '../components/ScrollTop/ScrollTop';

function MainLayout({ children }) {
  return (
    <div className="app-shell">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default MainLayout;
