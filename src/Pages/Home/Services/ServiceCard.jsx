
const ServiceCard = ({ number, icon, title, subtitle, iconBGColor, position, border,lastNumber}) => {
    return (
        <div className={`col-span-4 lg:col-span-1 relative ml-8 ${position}`}>

            <h1 className="text-center text-[56px] font-semibold font-lexend text-[#2b3142]">{number}</h1>
            <h1 className="text-center text-[56px] font-semibold font-lexend relative top-[77px] text-[#2b3142]">{lastNumber}</h1>
            <p className={`${iconBGColor} p-4 rounded-full w-[65px] z-[3] relative`}>
                {icon}
            </p>
            {
                border && <div className="border-dashed border-t-2 border-r-2 rounded-tr-lg absolute z-[2] top-[120px] left-[40px] border-[#647296] w-[316px] h-[66px]"/>
            }
            <h1 className="font-lexend mt-6 text-[32px] font-semibold text-white mb-3">{title}</h1>
            <p className="font-medium">{subtitle}</p>


        </div>
    );
};

export default ServiceCard;