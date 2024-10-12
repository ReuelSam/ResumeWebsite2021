import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
// import useGoogleSheets from 'use-google-sheets';

const MainCard=(props)=>{
    // console.log(props);
    // const { data, loading, error } = useGoogleSheets({
    //     apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    //     sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
    //   });

    // console.log(JSON.stringify(error));

    // console.log(JSON.stringify(data));

    const [isShown, setIsShown] = useState(true);

    return (
        <Fragment>

            <div className="w-full bg-gray-900 rounded-lg shadow-lg py-12 flex flex-col justify-center items-center transition duration-500 ease-in-out hover:bg-gray-700 transform hover:-translate-y-1 hover:scale-110 ..." onMouseEnter={() => setIsShown(false)} onMouseLeave={() => setIsShown(true)}>
                
                {
                    isShown ? 
                    (
                        <span className="transition duration-500 ease-in-out h-64">
                            
                            <img className="mb-8 mx-auto object-center object-cover rounded-full h-36 w-36" src={props.imagePath} alt="card-icon"/>
                            
                            <div className="group text-center">
                                <p className="text-xl text-white font-bold mb-2">{props.title}</p>
                                {/* <p className="text-base text-gray-400 font-normal">{props.subTitle}</p> */}
                                
                                {/* <Link className="bg-blue-500 hover:bg-blue-700 text-white text-xs py-2 px-4 rounded-full" to={props.websitePath} >
                                    Learn More!
                                </Link> */}
                            </div>
                        </span>
                    ):
                    (
                        // <span className="transition duration-500 ease-in-out  overflow-y-auto h-64">
                        <span className="scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 h-64 overflow-y-scroll">
                            
                            <img className="mb-8 mx-auto object-center object-cover rounded-full h-36 w-36" src={props.imagePath} alt="card-icon" />
                            
                            <div className="group text-center">
                                <p className="text-xl text-white font-bold mb-2">{props.title}</p>
                                <p className="text-base text-gray-400 font-normal">{props.subTitle}</p>
                                <p>
                                    fdsfdlsfsdfssfdsfksdjnfn
                                    <br />
                                    <br />
                                    <br />
                                    fdsfdlsfsdfssfdsfksdjnfn
                                    <br />
                                    fdsfdlsfsdfssfdsfksdjnfn
                                    fdsfdlsfsdfssfdsfksdjnfn
                                    <br />
                                    <br />
                                    fdsfdlsfsdfssfdsfksdjnfn
                                    fdsfdlsfsdfssfdsfksdjnfn

                                </p>
                                <Link className="bg-blue-500 hover:bg-blue-700 text-white text-xs py-2 px-4 rounded-full" to={props.websitePath} >
                                    Learn More!
                                </Link>
                            </div>
                        </span>
                    )
                }
                
            </div>
        </Fragment>
        )
}

export default MainCard;    