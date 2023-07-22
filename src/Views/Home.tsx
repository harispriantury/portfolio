import { FaSquareGithub, FaSquareInstagram } from 'react-icons/fa6'
import { RxLinkedinLogo } from 'react-icons/rx'
import profile from '../assets/profile.jpg'
import { IconType } from 'react-icons'

interface ILink {
    name: string
    icon: IconType
    url: string
}

const links: ILink[] = [
    {
        name: 'linkedin',
        icon: RxLinkedinLogo,
        url: 'https://www.linkedin.com/in/haris-priantury-673951250/'
    },
    {
        name: 'github',
        icon: FaSquareGithub,
        url: 'https://github.com/harispriantury'
    },
    {
        name: 'instagram',
        icon: FaSquareInstagram,
        url: 'https://www.instagram.com/haris_priantury/'
    }
]

export const Home = () => {
    return (
        <div className="text-white  dark:text-[#010138] dark:bg-white">
            <div id='welcome' className="pt-16 text-center flex flex-col items-center gap-3">
                <div className='w-1/2'>
                    <img src={profile} alt="" style={{
                        borderRadius: '100%'
                    }} />
                </div>
                <h1 className='text-3xl font-semibold'>Hi, my name is <span className='font-extrabold'>HARIS</span></h1>
                <h1 className=' font-semibold'>
                    Welcome to my portfolio website
                </h1>
                <p className='font-medium'>
                </p>
            </div>
            <div id='introducing' className='py-20 text-center flex flex-col items-center gap-3 font-semibold'>
                <h1 className='text-3xl font-semibold'>LET ME INTRODUCE MYSELF</h1>
                <p className=''>
                    I am a junior Frontend Developer with 1 year experience self taught
                </p>
                <p>
                    My experience includes developing several web applications using various technologies.
                </p>
                <p className=''>
                    For code i use javascript / typescript language.
                </p>

            </div>
            <div className='flex flex-col items-center gap-3'>
                <p className='text-base'>Feel free to connect with me</p>
                <div className="flex gap-3 text-4xl">
                    {
                        links.map((item: ILink) => (
                            <a key={item.name} onClick={() => window.open(item.url, '_blank')} ><item.icon /></a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
