const Title = ({title, subTitle}) => {
    return (
        <div className='text-center'>
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-semibold font-lexend text-white'>{title}</h1>
            <p className='text-base lg:text-lg md:w-[655px] mx-auto px-5 mt-5'>{subTitle}</p>
        </div>
    );
};

export default Title;