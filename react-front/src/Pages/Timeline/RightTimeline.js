const RightTimeline = (props) => {
    return (
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">{props.info.id}</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">{props.info.title}</h3>
                <h3 className="italic mb-3 font gray-800 text-lg">{props.info.time}</h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-gray-900 text-opacity-100">{props.info.content}</p>
            </div>
        </div>
        )
}

export default RightTimeline;