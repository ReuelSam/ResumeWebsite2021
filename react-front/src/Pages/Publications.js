import {Fragment} from 'react'
import Card from './../Cards/Card'

var data = require('../JSONFiles/Publications.json');

const Publications=()=>{
    return(
    <Fragment>
        <div className="w-full bg-bg_color font-mono">
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div className="text-center pb-12">
                    <h2 className="text-base text-2xl md:text-3xl lg:text-4xl font-bold text-accent_color">
                        Publications
                    </h2>
                    

                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {data.map((name, index) => (
                        <Card type={5} info={data[index]} />
                    
                    ))}
                   
                </div>
            
            </section>
        </div>
    </Fragment>
    )
}

export default Publications;