import {Fragment} from 'react'
import Card from './../Cards/Card'

var data = require('../JSONFiles/Home.json');


const Home=()=>{
    return(
    <Fragment>
<div className="w-full h-full bg-bg_color font-mono">
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
            <h2 className="text-base text-2xl md:text-3xl lg:text-4xl font-bold text-accent_color font-mono">
                Welcome
            </h2>
            <h1 className="mt-2 font-bold text-lg md:text-xl lg:text-2xl font-heading text-white font-mono">
                Overview         
            </h1>
            {/* <h1 className="font-bold text-sm md:text-base lg:text-lg font-heading text-gray-400">
                Hope you get to know me :)          
            </h1> */}

        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <Card type={0} info={data[0]} imagePath={require('../Images/Home/profile_icon_white.png').default} />
            <Card type={0} info={data[1]} imagePath={require('../Images/Home/education_icon_white.png').default} />
            <Card type={0} info={data[2]} imagePath={require('../Images/Home/skill_icon_white.png').default} />
            <Card type={0} info={data[3]} imagePath={require('../Images/Home/project_icon_white.png').default} />
            <Card type={0} info={data[4]} imagePath={require('../Images/Home/research_icon_white.png').default} />
            <Card type={0} info={data[5]} imagePath={require('../Images/Home/extra_icon_white.png').default} />

        </div>
    
    </section>
</div>
    </Fragment>
    )
}

export default Home;