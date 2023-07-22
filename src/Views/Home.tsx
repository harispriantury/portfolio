import { FaSquareGithub, FaSquareInstagram } from 'react-icons/fa6'
import { RxLinkedinLogo } from 'react-icons/rx'
import profile from '../assets/profile.jpg'
import { IconType } from 'react-icons'
import { TypeAnimation } from 'react-type-animation'

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
        <div className="text-white  dark:text-[#010138] lg:px-36">
            <div id='welcome' className="pt-16 text-center flex flex-col items-center gap-3 lg:gap-8">
                <div className='w-1/2 lg:w-1/3'>
                    <img src={profile} alt="" style={{
                        borderRadius: '100%'
                    }} />
                </div>
                <div className='text-3xl font-semibold lg:text-6xl'>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            'Hi, may name is HARIS',
                            1000,
                            'Hello , I am a Programmer',
                            1000,
                        ]}
                        speed={10}
                        repeat={Infinity}
                    />
                </div>
                <h1 className='lg:text-3xl font-semibold'>
                    Welcome to my portfolio website !
                </h1>
                <p className='font-medium'>
                </p>
            </div>
            <div id='introducing' className='py-20 lg:p-60 text-center flex flex-col items-center gap-3 lg:gap-6 font-semibold lg:text-3xl'>
                <h1 className='text-3xl font-semibold lg:text-6xl'>LET ME INTRODUCE MYSELF</h1>
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
            <div className='flex flex-col items-center gap-3 lg:pb-40'>
                <p className='text-base lg:text-3xl'>Feel free to connect with me</p>
                <div className="flex gap-3 text-4xl lg:text-6xl">
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
