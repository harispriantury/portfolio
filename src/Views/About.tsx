import { skills, ISkill } from "../data/skills"
import { datas, Idata } from "../data/biodata"


export const About = () => {
    return (
        <div className="text-white text-center">
            <div id="About Me" className="flex flex-col pt-16 gap-3 font-semibold">
                <h1 className="text-3xl">About Me</h1>
                <p>
                    Hi Everyone, I am Haris Priantury from Kebumen , Jawa Tengah Indonesia.
                </p>
                <p>
                    During 1 year of learning by doing, I am familiar with jobs like slicing UI with responsive interface, data fetching api, team collaboration with git , creating clean code etc.
                </p>
            </div>
            <div id="data" className="pt-16 flex flex-col gap-6 items-center">
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
                <button className="bg-white text-black px-3 py-2 font-bold rounded-lg">DOWNLOAD CV</button>
            </div>
            <div id="skills" className="pt-16 flex flex-col gap-3 font-semibold">
                <h1 className="text-3xl">My Skillset</h1>
                <div className='grid grid-cols-2 gap-5'>
                    {
                        skills.map((item: ISkill) => {
                            return (
                                <div
                                    key={item.name}
                                    className='border border-white shadow-md shadow-white flex justify-center py-5 text-8xl rounded-md hover:scale-105 duration-500'>
                                    <item.icon />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
