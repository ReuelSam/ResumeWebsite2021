import {Fragment} from 'react'
// import MainCard from './../Cards/MainCard'
// import Card from './../Cards/Card'
import Timeline from './Timeline/Timeline';
import Github from '../Links/Github';
import LinkedIn from '../Links/LinkedIn';

import ReuelImage from '../Images/Reuel-Profile.jpg';


const Profile=()=>{
    return(
    <Fragment>
        <div class="w-full h-full bg-bg_color font-mono">
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div className="text-center pb-12">
                    <h2 className="text-base text-2xl md:text-3xl lg:text-4xl font-bold text-accent_color">
                        About Me
                    </h2>
                    {/* <h1 className="font-bold text-xl md:text-xl lg:text-2xl font-heading text-white">
                        Get to know me          
                    </h1>
                    <h1 className="font-bold text-sm md:text-base lg:text-lg font-heading text-gray-400">
                        Artificial Intelligence, Web Development and Robotics          
                    </h1> */}

                </div>
                
                <div className="bg-bg_color grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">

                    <div className="group text-center h-64 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-card_cover_color">
                        <img className="mb-8 mx-auto object-center object-cover rounded-full h-full w-auto p-5" src={ReuelImage} alt="card-icon"/>
                    </div>

                    <div className="group text-center h-64 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-card_cover_color">
                        <p className="text-justify p-4 mx-4 my-6 text-base text-white font-normal border rounded-lg hover:bg-card_content_color transition duration-200 ease-in-out hover:scale-110">Hi, I am Reuel Samuel Sam, a 21 year old eager and diligent Computer Science Undergraduate brimming for an opportunity to apply the knowledge and skills learnt in real life situations.</p>

                    </div>

                    <div className="group text-center h-64 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-card_cover_color">
                        <div className="text-justify p-4 mx-4 my-6 text-base text-white font-normal border rounded-lg hover:bg-card_content_color transition duration-200 ease-in-out hover:scale-110">
                            <h1>Find Me: </h1>
                            <h2 className="text-center">reuelsam@gmail.com</h2>
                            <h2 className="text-center">+974 66659649</h2>

                        
                        </div>
                        
                        <Github />
                        <LinkedIn />
                    </div>

                    

                </div>

                <Timeline />
            
            </section>
        </div>
    </Fragment>
    )
}

export default Profile;