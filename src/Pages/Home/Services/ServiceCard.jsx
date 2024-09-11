
const ServiceCard = ({colSpan=1, number, icon, title, subtitle}) => {
    return (
        <div className={`col-span-${colSpan} relative`}>

            <p>{number}</p>
            <div>
                {icon}
            </div>
            <div/>
            <h1>{title}</h1>
            <p>{subtitle}</p>

            
        </div>
    );
};

export default ServiceCard;