import {Fragment} from 'react'
import Card from './../Cards/Card'

var data = require('../JSONFiles/Skills.json');

const Skills=()=>{
    return(
    <Fragment>
        <div className="w-full h-full bg-bg_color font-mono">
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div className="text-center pb-12">
                    <h2 className="text-base text-2xl md:text-3xl lg:text-4xl font-bold text-accent_color">
                        Skills
                    </h2>
                    

                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {data.map((name, index) => (
                        <Card type={3} info={data[index]} />
                    
                    ))}
                    {/* <Card type={3} info={data[0]} />
                    <Card type={3} info={data[1]} />
                    <Card type={3} info={data[2]} /> */}

                    {/* <Card websitePath="/" title="Project" subTitle="-" imagePath={require('../Images/Home/project_icon_white.png').default} />
                    <Card websitePath="/" title="Publications" subTitle="-" imagePath={require('../Images/Home/research_icon_white.png').default} />
                    <Card websitePath="/" title="Extra-Curricular" subTitle="-" imagePath={require('../Images/Home/extra_icon_white.png').default} /> */}

                </div>
            
            </section>
        </div>
    </Fragment>
    )
}

export default Skills;