import RightTimeline from "./RightTimeline";
import LeftTimeline from "./LeftTimeline";

var data = require("../../JSONFiles/Timeline.json");

const Timeline = (props) => {
    return (
    //    <!-- component -->
        <div className="my-4 container bg-bg_color mx-auto w-full h-full transition duration-500 ease-in-out hover:bg-gray-900 transform hover:-translate-y-1 hover:scale-110 ">
            <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 absolute border-opacity-20 border-white h-full border" style={{left:'50%' }}></div>
                
                {data.map((name, index) => (
                    (index % 2 === 0 ? 
                        <RightTimeline info={data[index]} /> 
                        : 
                        <LeftTimeline info={data[index]}/>
                    )
                  ))}
            </div>
        </div>
    )
}

export default Timeline;