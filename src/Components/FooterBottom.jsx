import brands from '../assets/Images/card.png'

const FooterBottom = () => {
    return (
        <>
            <aside className="grid-flow-col items-center text-xl text-[#95989d] mt-3 lg:mt-0">
                <p>Copyright © 2024 MAZAL.AI . All rights reserved.</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <img src={brands} alt="" className='w-[500px] lg:w-auto' />
            </nav>
        </>
    );
};

export default FooterBottom;