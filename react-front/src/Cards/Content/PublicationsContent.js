// import {Link} from 'react-router-dom';

const PublicationsContent = (props) => {

    return (
        <span className="flex transition duration-500 ease-in-out h-72">
                            

        <div className="m-auto group text-center">
            <p className="px-6 text-justify text-base text-white font-bold mb-2">{props.info.content}</p>
            
            <a className="align-middle text-center p-2 mx-full my-0 text-base text-white font-normal border rounded-lg bg-card_cover_color hover:bg-bg_color" href={props.info.journal} target="_blank" rel="noreferrer">Journal</a>

            <br /><br />
            <a className="align-middle text-center p-2 mx-full my-0 text-base text-white font-normal border rounded-lg bg-card_cover_color hover:bg-bg_color" href={props.info.code} target="_blank" rel="noreferrer">
            Github <i className="fab fa-github"></i> 
            </a>
            
            
        </div>
        </span>
    )
}

export default PublicationsContent;