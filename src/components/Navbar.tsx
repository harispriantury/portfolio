import { IoMdMenu } from "react-icons/io";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoHome } from "react-icons/io5";
import { BsPersonVcard } from "react-icons/bs";
import { RxMoon } from "react-icons/rx";
import { WiDaySunny } from 'react-icons/wi'
import { FaComputer } from 'react-icons/fa6'
import { useState } from "react";
import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";
import { LoadingOverlay } from "./LoadingOverlay";


interface IListName {
    name: string,
    url: string,
    icon: IconType
}

export const Navbar = () => {
    const navigate = useNavigate();
    const [darkmode, setDarkmode] = useState<boolean>(true)
    const [isLoading, setIsloading] = useState<boolean>(false)

    const listName: IListName[] = [
        {
            name: 'HOME',
            url: '/',
            icon: IoHome
        },
        {
            name: 'ABOUT',
            url: '/about',
            icon: BsPersonVcard
        },
        {
            name: 'PROJECTS',
            url: '/projects',
            icon: FaComputer
        }
    ]

    const handleClickList = (url: string) => {
        setNavList(false)
        setIsloading(true)
        setTimeout(() => {
            navigate(`${url}`)
            setIsloading(false)
        }, 1000);
    }

    const handleClickMode = () => {
        setDarkmode(!darkmode)
        const docs = document.documentElement.classList

        if (docs.contains('dark')) {
            docs.remove('dark')
        } else {
            docs.add('dark')
        }
    }

    window.addEventListener('scroll', () => {
        setNavList(false)
    })

    const [navList, setNavList] = useState<boolean>(false);
    return (
        <nav className=" fixed z-50 top-0 text-white w-full bg-[#010138] dark:text-white dark:bg-[#0c0c5c]">
            {isLoading && (<LoadingOverlay />)}
            <div className="p-6 flex items-center justify-between">
                <h1 className="text-2xl">HARIS PRIANTURY</h1>
                <div className="flex items-center text-2xl gap-3" >
                    {
                        darkmode ? (
                            <div className="text-4xl" onClick={handleClickMode}>
                                <WiDaySunny />
                            </div>
                        ) :
                            (
                                <div className="mr-2" onClick={handleClickMode}>
                                    <RxMoon />
                                </div>
                            )
                    }

                    <span className="text-4xl cursor-pointer" onClick={() => setNavList(!navList)} >
                        {navList ? <AiFillCloseCircle /> : <IoMdMenu />}
                    </span>
                </div>
            </div>
            <ul className={`absolute w-full flex flex-col items-center py-4 gap-4 bg-[#010138] dark:bg-[#010138] dark:text-white dark:bg-opacity-70 bg-opacity-70 duration-500 ${navList ? '' : '-translate-y-64'}  dark:text-[#010138] dark:bg-white`}>
                {
                    listName.map((item: IListName) => {
                        return (
                            <a
                                className={`flex items-center gap-3 cursor-pointer ${location.pathname === item.url && 'font-semibold'}`}
                                onClick={() => handleClickList(item.url)}>
                                <item.icon />
                                {item.name}
                            </a>
                        )
                    })
                }
            </ul>
        </nav>
    )
}