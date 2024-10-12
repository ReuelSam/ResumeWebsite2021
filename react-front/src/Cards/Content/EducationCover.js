// import {Link} from 'react-router-dom';

const EducationCover = (props) => {
    // console.log("PROPS: ", "../"+props.imagePath);

    return (
        <span className="transition duration-500 ease-in-out h-72">
                            
        <img className="mb-8 mx-auto object-cover rounded-full h-32 w-32" src={props.imagePath} alt="card-icon"/>

        <div className="group text-center">
            <p className="text-xl text-white font-bold mb-2">{props.info.title}</p>
            <p className="text-base text-gray-400 font-normal max-w-xs">{props.info.name}</p>
            
            {/* <Link className="bg-blue-500 hover:bg-blue-700 text-white text-xs py-2 px-4 rounded-full" to={props.websitePath} >
                Learn More!
            </Link> */}
        </div>
        </span>
    )
}

export default EducationCover;