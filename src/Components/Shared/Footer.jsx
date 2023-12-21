import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className=" mt-10">
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <aside>
                    <img className=' w-14 h-14 rounded' src={logo} alt="" />
                    <p>Build your task site<br />Providing reliable tech since 2023</p>
                </aside>
                <nav>
                    <header className="footer-title">Social</header>
                    <div className="grid grid-flow-col gap-4">
                        <a></a>
                        <a></a>
                        <a></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;