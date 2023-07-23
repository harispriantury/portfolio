import { skills, ISkill } from "../data/skills"
import { datas, Idata } from "../data/biodata"
import { useState } from "react"
import { Popup } from "../components/Popup"


export const About = () => {
    const [cv, setCv] = useState<boolean>(false)
    return (
        <div className="text-white text-center dark:text-[#010138] lg:px-36">
            <div id="About Me" className="flex flex-col pt-16 gap-3 lg:gap-8 lg:text-3xl font-semibold">
                <h1 className="text-3xl lg:text-6xl">About Me</h1>
                <p>
                    Hi Everyone, I am Haris Priantury from Kebumen , Jawa Tengah Indonesia.
                </p>
                <p>
                    for 1 year
                    I learned by doing for web development, I am familiar with jobs like slicing UI with responsive and interactive media, data fetch api, team collaboration with git, creating clean code etc.
                </p>
            </div>
            <div id="data" className="pt-16 lg:pt-36 lg:text-3xl lg:px-5 xl:px-32 flex flex-col gap-6 items-center">
                {
                    datas.map((item: Idata) => {
                        return (
                            <div
                                key={item.label}
                                className="grid grid-cols-7 w-full text-start">
                                <label className="col-span-2 font-bold">
                                    {item.label}
                                </label>
                                <p className="col-span-5">: {item.value}</p>
                            </div>
                        )
                    })
                }
                <button
                    onClick={() => setCv(!cv)}
                    className="bg-white text-[#010138] dark:bg-[#010138] dark:text-white px-3 py-2 lg:my-3 font-bold rounded-lg hover:scale-105 duration-500">DOWNLOAD CV</button>
            </div>
            {
                cv && (
                    <Popup handleClose={() => setCv(false)} />
                )
            }
            <div id="skills" className="pt-16 flex flex-col gap-3 font-semibold lg:my-20">
                <h1 className="text-3xl lg:text-6xl lg:py-20">My Skills</h1>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {
                        skills.map((item: ISkill) => {
                            return (
                                <div
                                    key={item.name}
                                    className='md:flex md:flex-col md:items-center border border-white dark:border-[#010138] shadow-md shadow-white flex justify-center py-5 text-8xl rounded-md hover:scale-105 duration-500 lg:gap-5 dark:shadow-xl'>
                                    <item.icon />
                                    <h1 className="max-md:hidden text-2xl xl:text-3xl">{item.name}</h1>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
