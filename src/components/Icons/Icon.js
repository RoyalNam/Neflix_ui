function Icon({ isBorder, icon }) {
    return (
        <div className={isBorder && 'rounded-full border-slate-300 hover:border-white border-2 p-1'}>
            <span className="text-white text-3xl">{icon}</span>
        </div>
    );
}

export default Icon;
