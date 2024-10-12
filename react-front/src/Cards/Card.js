import React, {Fragment, useState} from 'react';
// import {Link} from 'react-router-dom';
import {useEffect} from 'react';

import HomeCover from './Content/HomeCover';
import HomeContent from './Content/HomeContent';
import EducationContent from './Content/EducationContent';
import EducationCover from './Content/EducationCover';
import SkillsCover from './Content/SkillsCover';
import SkillsContent from './Content/SkillsContent';
import ProjectsCover from './Content/ProjectsCover';
import ProjectsContent from './Content/ProjectsContent';
import PublicationsCover from './Content/PublicationsCover';
import PublicationsContent from './Content/PublicationsContent';

// import useGoogleSheets from 'use-google-sheets';


const Card=(props)=>{

    // const getData = async () => {
    //     try {
    //         const res = await fetch('https://v1.nocodeapi.com/reuelsamuelsam/google_sheets/YnjfJmLQPohGCSVk?tabId=Sheet2')
    //         const data = await res.json();
    //         console.log(data.data[0])
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    useEffect(() => {
        // getData();
    }, [])

    if (props.type !== 1)
    {
        var missingDataFlag = true ? props.info.id === -1 : false;
        // if (!missingDataFlag)
        // {
            var info = props.info;
            // console.log("INFO: ", info);
        // }  
    }
      
    const [isShown, setIsShown] = useState(true);

    const renderSwitchCover = (param) => {
        switch(param) {
            case 0:
                return <HomeCover imagePath={props.imagePath} info={info} />;
            // case 1:
            //     return <ProfileCover imagePath={props.imagePath} title={props.title} />;
            case 2:
                return <EducationCover info={info} imagePath={props.imagePath} />;
            case 3:
                return <SkillsCover info={info}/>;   
            case 4:
                return <ProjectsCover info={info}/>;
            case 5:
                return <PublicationsCover info={info}/>;    
            default:
                return 'foo';
        }
    }

    const renderSwitchContent = (param) => {
        switch(param) {
            case 0:
                return <HomeContent info={info} />;
            // case 1:
            //     return <ProfileContent imagePath={props.imagePath} title={props.title} subTitle={props.subTitle} websitePath={props.websitePath} />;
            case 2:
                return <EducationContent info={info} missingDataFlag={missingDataFlag} />;
            case 3:
                return <SkillsContent info={info} missingDataFlag={missingDataFlag} />;
            case 4:
                return <ProjectsContent info={info}/>; 
            case 5:
                return <PublicationsContent info={info}/>; 
            default:
                return 'foo';
        }
    }
    
    return (
        <Fragment>

            <div className="w-full bg-card_cover_color rounded-lg shadow-lg py-6 flex flex-col justify-center items-center transition duration-500 ease-in-out hover:bg-card_content_color transform hover:-translate-y-1 hover:scale-110 ..." onMouseEnter={() => setIsShown(false)} onMouseLeave={() => setIsShown(true)}>
                
                {
                    isShown ? 
                    (
                        renderSwitchCover(props.type)
                        // <EducationCover imagePath={props.imagePath} title={props.title} subTitle={props.subTitle} />
                    ):
                    (
                        renderSwitchContent(props.type)
                        // <EducationContent info={info} missingDataFlag={missingDataFlag} />
                    )
                }
                
            </div>
        </Fragment>
        )
}

export default Card;    