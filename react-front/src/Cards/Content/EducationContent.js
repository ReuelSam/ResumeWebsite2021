const EducationContent = (props) => {
    return (
        <span className="scrollbar-thin scrollbar-thumb-card_cover_color scrollbar-track h-72 overflow-y-scroll py-auto">
                            
            {/* <img className="mb-8 mx-auto object-center object-cover rounded-full h-36 w-36" src={props.imagePath} alt="card-icon" /> */}
                                        
                {!props.missingDataFlag ? ( 
                    <div className="group text-center">

                        <p className="text-center mx-auto text-xl text-white font-bold mb-2 max-w-xs">{props.info.name}</p>
                        <p className="text-center text-lg text-blue-200 font-bold mb-2">{props.info.location}</p>
                        <p className="text-center text-base italic text-blue-200 font-bold mb-2">{props.info.time}</p>


                        <button className="align-middle text-center p-2 mx-full my-0 text-base text-white font-normal border rounded-lg bg-card_cover_color hover:bg-bg_color">CGPA: {props.info.cgpa}</button>

                        <p className="text-justify p-4 m-4 text-base text-white font-normal border rounded-lg hover:bg-card_cover_color transition duration-200 ease-in-out hover:scale-110">{props.info.info}</p>
                        <p className="text-justify p-4 m-4 text-base text-white font-normal border rounded-lg hover:bg-card_cover_color">{props.info.content}</p>
                    </div>
                ):
                (
                    <div className="group text-center">

                        <p className="animate-bounce text-center my-28 text-4xl text-white font-bold mb-2">
                            Applying
                        </p>
                        

                    </div>
                )
                }
                


                {/* <Link className="bg-blue-500 hover:bg-blue-700 text-white text-xs py-2 px-4 rounded-full" to={props.websitePath} >
                    Learn More!
                </Link> */}
        </span>
    )
}

export default EducationContent