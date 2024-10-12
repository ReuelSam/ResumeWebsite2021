import PDF from '../Resources/Reuel_Resume.pdf';
import Github from '../Links/Github';
import LinkedIn from '../Links/LinkedIn';

const Footer = () => {
    return (
        <div className="font-mono bg-header_color dark:bg-gray-800">
            <div className="container flex flex-col items-center px-4 py-6 mx-auto space-y-6 lg:space-y-0 lg:flex-row lg:justify-between">
                <div className="w-48 text-gray-700 dark:text-gray-200">
                    <div className="flex items-center flex-no-shrink text-white mr-6">
                        
                        <h1 className="pl-4 max-w-3xl py-4 font-bold text-lg md:text-lg lg:text-lg font-heading text-accent_color">
                            <p>Reuel Samuel Sam</p>
                            <p className="font-serif text-sm italic text-accent_color max-w-24">reuelsam@gmail.com</p>
                            <p className="font-serif text-sm italic text-accent_color max-w-24">+974 66659649</p>

                        </h1>
                        
                    </div>      
                </div>
    
                <p className="text-sm text-center text-accent_color dark:text-gray-300">&copy; 2021 </p>
    
                <div className="flex items-center space-x-6">
                    <a href={PDF} target="_blank" rel="noreferrer" className="text-sm text-accent_color dark:text-gray-300 hover:underline">Resume</a>
        
                    <Github />
                    <LinkedIn />

                </div>
            </div>
        </div>
        )
}

export default Footer;