import {Link} from 'react-router-dom';

const HomeContent = (props) => {
    return (
        <span className="scrollbar-thin scrollbar-thumb-card_cover_color scrollbar-track h-64 overflow-y-scroll">
                            
            <div className="group text-center">

                <p className="text-center text-xl text-white font-bold mb-2">{props.info.title}</p>
                {/* <p className="text-center text-lg text-blue-200 font-bold mb-2">{props.info.location}</p> */}
                {/* <p className="text-center text-base italic text-blue-200 font-bold mb-2">{props.info.time}</p> */}


                {/* <button className="align-middle text-center p-2 mx-full my-0 text-base text-white font-normal border rounded-lg bg-blue-800 hover:bg-gray-800">CGPA: {props.info.cgpa}</button> */}

                <p className="text-center p-4 m-4 text-base text-white font-normal border rounded-lg hover:bg-card_cover_color transition duration-200 ease-in-out hover:scale-110">{props.info.content1}</p>
                {!(props.info.id === 5) && 
                    <p className="text-center p-4 m-4 text-base text-white font-normal border rounded-lg hover:bg-card_cover_color">{props.info.content2}</p>
                }
            
                <Link className="bg-blue-500 hover:bg-blue-700 text-white text-xs py-2 px-4 rounded-full" to={props.info.websitePath} >
                    Expand
                </Link>

            </div>
        </span>
    )
    
}

export default HomeContent;