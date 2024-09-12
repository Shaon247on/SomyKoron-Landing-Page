

const SideMenuList = () => {
    return (
        <ul className="space-y-5 mt-10">
            <li className="text-xl ml-10 font-medium hover:text-white">Home</li>
            <li>
                <details >
                    <summary className="text-xl ml-4 font-medium hover:text-white -mt-2">AI Services</summary>
                    <ul className="bg-[#1a253d] rounded-none pt-4 pl-4 ml-8 absolute">
                        <li className="text-xl mt-4 mr-4 hover:text-white cursor-pointer">Youtube Translation</li>
                        <li className="text-xl mt-4 mr-4 hover:text-white cursor-pointer">Youtube Watch</li>
                        <li className="text-xl mt-4 mr-4 hover:text-white cursor-pointer">A.I Research Assistant</li>
                        <li className="text-xl mt-4 mr-4 hover:text-white cursor-pointer mb-3">Image Generation</li>
                    </ul>
                </details>
            </li>
            <li className="text-xl ml-8 font-medium hover:text-white">About Us</li>
            <li className="text-xl ml-8 font-medium hover:text-white">Pricing</li>
            <li className="text-xl ml-8 font-medium hover:text-white">FAQ</li>
            <li className="text-xl ml-8 font-medium hover:text-white">Contact Us</li>
        </ul>
    );
};

export default SideMenuList;