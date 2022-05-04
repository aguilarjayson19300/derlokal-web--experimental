import Header from './Header';
import Footer from './Footer';
import NavBar from './Navbar';

interface LayoutProps {
    children: React.ReactNode,
}

const Layout = ({ children }: LayoutProps) => (
    <div className='w-full'>
        <Header />
        <NavBar />
        <div className="w-full sm:pt-20 pt-32" >
            {children}
        </div>
        <Footer />
    </div>

);

export default Layout;