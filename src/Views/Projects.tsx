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
        name: 'Basic CRUD',
        description: 'disini saya membuat aplikasi  backend sederhana menggunakan node js dan database mysql untuk melatih wawasan saya dari sisi backend',
        url: 'https://github.com/harispriantury/basic-crud',
        image: portfolio3
    }
]
export const Projects = () => {
    const handleHref = (url: string) => {
        window.open(url, '_blank')
    }
    return (
        <div className="text-white text-center">
            <div id="projects" className="flex flex-col items-center font-semibold pt-16 gap-8">
                <h1 className="text-3xl">My Projects</h1>
                {
                    projects.map((item: IProjects) => {
                        return (
                            <div
                                key={item.name}
                                className='flex flex-col gap-3 w-10/12 items-center mb-10 border border-white p-4 rounded-lg hover:shadow-lg hover:shadow-white hover:scale-105 duration-500'>
                                <div className='w-10/12'>
                                    <img src={item.image} alt="" />
                                </div>
                                <h1 className='text-xl'>{item.name}</h1>
                                <p>{item.description}</p>
                                <button
                                    onClick={() => handleHref(item.url)}
                                    className='bg-white px-3 py-2 flex justify-center gap-3 text-black rounded-lg items-center'>
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
