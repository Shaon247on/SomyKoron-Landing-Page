import { SiGoogletranslate } from 'react-icons/si';

const LanguageDropdown = ({position='ml-8 mt-8'}) => {
    return (
        <div className={`flex items-center ${position}`}>
            <SiGoogletranslate className="text-xl" />
            <select id="dropdown" className="block cursor-pointer bg-transparent px-4 py-2 rounded-md outline-none text-xl" name="options">
                <option value="English" className="bg-[#121a2b] text-[#a1a3ab] text-xl">English</option>
                <option value="Монгол" className="bg-[#121a2b] text-[#a1a3ab] text-xl">Монгол</option>
            </select>
        </div>
    );
};

export default LanguageDropdown;