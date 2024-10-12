// import {Link} from 'react-router-dom';

const SkillsCover = (props) => {
    // console.log(props.info.items)
    return (
        <span className="flex transition duration-500 ease-in-out h-72">
                            
        {/* <img className="mb-8 mx-auto object-cover rounded-full h-32 w-32" src={props.imagePath} alt="card-icon"/> */}

        <div className="group text-center m-auto">
            <p className="text-4xl text-white font-bold mb-2">{props.info.title}</p>
        </div>

        </span>
    )
}

export default SkillsCover;