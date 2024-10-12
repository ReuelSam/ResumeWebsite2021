import {Fragment} from 'react'
import Card from './../Cards/Card'

var data = require('../JSONFiles/Education.json');

const Education=()=>{
    return(
    <Fragment>
        <div className="w-full bg-bg_color font-mono">
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div className="text-center pb-12">
                    <h2 className="text-base text-2xl md:text-3xl lg:text-4xl font-bold text-accent_color">
                        Education
                    </h2>
                    {/* <h1 className="font-bold text-xl md:text-2xl lg:text-3xl font-heading text-white">
                        Enlightment through Education          
                    </h1> */}
                    
                    {/* <h1 className="font-bold text-sm md:text-base lg:text-lg font-heading text-gray-400">
                        Progress through Knowledge          
                        <br />
                        Enlightment through Education          
                    </h1> */}

                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <Card type={2} info={data[0]} websitePath="/" imagePath={require('../Images/Education/birla_logo.png').default}/>
                    <Card type={2} info={data[1]} websitePath="/" imagePath={require('../Images/Education/ceg_logo.png').default}/>
                    <Card type={2} info={data[2]} websitePath="/" imagePath={require('../Images/Education/graduate_logo_white.png').default} />

                    {/* <Card websitePath="/" title="Project" subTitle="-" imagePath={require('../Images/Home/project_icon_white.png').default} />
                    <Card websitePath="/" title="Publications" subTitle="-" imagePath={require('../Images/Home/research_icon_white.png').default} />
                    <Card websitePath="/" title="Extra-Curricular" subTitle="-" imagePath={require('../Images/Home/extra_icon_white.png').default} /> */}

                </div>
            
            </section>
        </div>
    </Fragment>
    )
}

export default Education;