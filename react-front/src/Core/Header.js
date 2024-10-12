import {Fragment} from 'react'
import HeaderImage from '../Images/Reuel-Header.jpg';
import {Link} from 'react-router-dom';
import PDF from '../Resources/Reuel_Resume.pdf';
import Github from '../Links/Github';
import LinkedIn from '../Links/LinkedIn';

const Header=()=>{
    return (
        <Fragment>
            <nav className="flex items-center justify-between flex-wrap bg-header_color p-6 font-mono">
                <div className="flex items-center flex-no-shrink text-white mr-6">
                    
                    <img className="object-center object-cover rounded-full h-28 w-28" src={HeaderImage} alt="reuel" />
                    <h1 className="pl-4 max-w-3xl py-4 font-bold text-3xl md:text-4xl lg:text-2xl font-heading text-accent_color">
                        <p>Reuel Samuel Sam</p>
                        {/* <p className="text-xl">Computer Science Undergraduate</p> */}
                        <p className="font-serif text-base italic text-accent_color max-w-24">Web Developer | ML Enthusiast</p>
                        <Github /><LinkedIn />
                    </h1>
                    
                </div>
 
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow"></div>
                
                    <div>
                        <Link className="mx-4 inline-block text-2xl px-2 py-2 leading-none rounded text-white border-white hover:border-transparent hover:text-accent_color mt-4 lg:mt-0" to="/" >
                            Home
                        </Link>
                                                
                        <a href={PDF} target="_blank" rel="noreferrer" className="mx-4 inline-block text-2xl p-5 leading-none border rounded text-accent_color border-accent_color hover:border-transparent hover:text-bg_color hover:bg-accent_color mt-4 lg:mt-0">Resume</a>

                        {/* <button href="" className="mx-4 inline-block text-2xl px-4 py-2 leading-none border rounded text-white border-blue-300 hover:border-transparent hover:text-yellow-300 hover:bg-gray-800 mt-4 lg:mt-0">
                            <i className="far fa-lightbulb"/>
                        </button> */}

                    </div>
                
                </div>

            </nav>
            
            
        </Fragment>
        )
}

export default Header;