const Button = ({text}) => {
    return (
        <button className="px-10 py-4 rounded-lg bg-[#2d9f89] text-white text-xl font-medium border-0 hover:border-2 border-transparent hover:text-[#2d9f89] hover:bg-transparent hover:border-[#2d9f89] transition duration-500 ease-out">
            {text}
        </button>
    )
};

export default Button;