import portfolio0 from '../assets/quran.png'
import portfolio1 from '../assets/playmemories.png'
import portfolio2 from '../assets/totallyrecipe.png'
import portfolio3 from '../assets/portfolio3.png'
import { BiLinkExternal } from 'react-icons/bi'

interface IProjects {
    name: string,
    description: string,
    url: string,
    image: string
}

const projects: IProjects[] = [
    {
        name: 'Quran App',
        description: `This project was built using the next js framework, and I use the public api to access the surah al quran easily and available many features such as search, interpretation, murotal player, and prayer schedules in the Indonesian region and so on`,
        url: "https://quran-app-lyart-beta.vercel.app/quran",
        image: portfolio0
    },
    {
        name: 'Play Memories',
        description: 'Apart from being a programmer, I also have a photography business, that\'s why I created my own photography website',
        url: 'https://playmemories.netlify.app/',
        image: portfolio1
    },
    {
        name: 'Totally Recipe',
        description: 'This website is to provide information to everyone about recipes from food using the public api from edamam.com',
        url: 'https://totally-recipe.netlify.app/',
        image: portfolio2
    },
    {
        name: 'Blog App CMS',
        description: 'I have created a simple blog with content management system with supabase / postgresql and next js 13',
        url: 'https://haris-priantury.vercel.app/',
        image: portfolio3
    }
]
export const Projects = () => {
    const handleHref = (url: string) => {
        window.open(url, '_blank')
    }
    return (
        <div className="text-white text-center dark:text-[#010138] lg:px-32">
            <div id="projects" className="flex flex-col items-center font-semibold pt-16 gap-8 lg:gap-36 lg:mb-20">
                <h1 className="text-3xl lg:text-6xl">My Projects</h1>
                {
                    projects.map((item: IProjects) => {
                        return (
                            <div
                                key={item.name}
                                className='flex flex-col gap-3 w-10/12 items-center mb-10 border border-white dark:border-[#010138] p-4 rounded-lg hover:shadow-lg hover:shadow-white hover:scale-105 duration-500 lg:p-16'>
                                <div className='w-10/12'>
                                    <img src={item.image} alt="" />
                                </div>
                                <h1 className='text-xl lg:text-3xl'>{item.name}</h1>
                                <p className='lg:text-2xl'>{item.description}</p>
                                <button
                                    onClick={() => handleHref(item.url)}
                                    className='bg-white px-3 py-2 flex justify-center gap-3 text-[#010138] dark:text-white dark:bg-[#010138] rounded-lg items-center'>
                                    <BiLinkExternal /> <span>View Project</span>
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
