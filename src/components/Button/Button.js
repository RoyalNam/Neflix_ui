function Button({ title, icon, onlyIcon, onClick }) {
    return (
        <button
            className={`${
                onlyIcon ? 'onlyIcon' : 'rounded bg-white border-0 hover:bg-opacity-90'
            } btn flex items-center text-xl px-5 py-1 outline-none 
            text-black font-medium `}
            onClick={onClick}
        >
            {icon && <span className="text-[26px]">{icon}</span>}
            {title && <span className="ml-1">{title}</span>}
        </button>
    );
}

export default Button;
