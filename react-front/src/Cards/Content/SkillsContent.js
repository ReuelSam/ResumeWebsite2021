// import {Link} from 'react-router-dom';

const SkillsContent = (props) => {

    return (
        <span className="flex transition duration-500 ease-in-out h-72">
                            
        <div className="m-auto group text-center">
            
            {props.info.items.map((name, index) => (
                        
                    <p className="text-center p-1 m-2 text-xl text-white font-normal border rounded-lg hover:bg-card_cover_color">{name}</p>
                    
                    ))}
            
            
        </div>
        </span>
    )
}

export default SkillsContent;