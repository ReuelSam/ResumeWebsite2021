const RightTimeline = (props) => {
    return (
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline ">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">{props.info.id}</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <h3 className="mb-3 font-bold text-white text-xl">{props.info.title}</h3>
                <h3 className="italic mb-3 font text-white text-lg">{props.info.time}</h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">{props.info.content}</p>
            </div>
        </div>
        )
}

export default RightTimeline;