const HomeEvent = ({img, title, desc}) => {
    return (
        <div className="flex flex-col bg-brand-primary-black w-4/5 landscape:w-1/4 lg:w-1/5">
            {/* Top Section */}
            <img src={img} alt={title} className="h-3/4" style={{backgroundSize: 'cover', backgroundPosition: 'center'}}/>
            {/* Bottom Section */}
            <div className="p-6">
                <h1 className="text-brand-primary-gold">{title}</h1>
                <p className="text-white line-clamp-7">{desc}</p>
            </div>
        </div>
    )
}

export default HomeEvent