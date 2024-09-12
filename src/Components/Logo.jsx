import logo from "../assets/Images/footer-logo.png"

const Logo = ({width='w-[200px]', height='h-[35px]', position='pl-5 lg:pl-14'}) => {
    return (
        <div className={`${position}`}>
            <img src={logo} alt="Logo" className={`${width} ${height}`} />
        </div>
    );
};

export default Logo;