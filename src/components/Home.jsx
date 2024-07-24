import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { myContext } from "../Context/context"

import '../App.css'

import Login from './Authentication/Login'
import Signup from './Authentication/Signup'
import { useLocation, useNavigate } from 'react-router-dom'



const Home = () => {
    const [count, setCount] = useState(1)

    const allStates = useContext(myContext)
    const { user, setUser } = allStates

    const history = useNavigate()
    const location = useLocation()


    // console.log(location.pathname)

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"))
        if (user) {
            setUser(user)
            // console.log(user)
            history("/chat")
        }
    }, [history])

    useEffect(() => {

    }, [count])




    return (
        <section className="back">
            <div className=" flex flex-col items-center  px-6 py-8  mx-auto md:h-screen lg:py-0">
                <div className="flex justify-center rounded-lg items-center mt-14 mb-4 text-2xl p-[6px] font-semibold bg-white  border-2 border-[#2D728F] w-full sm:max-w-md    ">
                    Chat Unity
                </div>
                <div className="w-full bg-white rounded-lg shadow border-2 md:mt-0 sm:max-w-md xl:p-0  border-gray-700">
                    <div className="p-4 ">

                        <div className="  border-gray-200 dark:border-gray-700">
                            <ul className="flex justify-center flex-wrap -mb-px text-sm font-medium text-center " id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">

                                <li className={`me-2 w-[45%] h-[36px] rounded-lg ${count === 1 ? "bg-blue-100 border border-black" : ""}`} role="presentation ">
                                    <button className=" inline-block py-1.5 px-4 rounded-t-lg " id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false" onClick={() => { setCount(1) }} >Login</button>
                                </li>



                                <li className={`me-2 w-[45%] h-[36px] rounded-lg ${count === 2 ? "bg-blue-50 border border-black" : ""}`} role="presentation">
                                    <button className="inline-block py-1.5 px-4 rounded-t-lg  " id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false" onClick={() => { setCount(2) }} >Sign Up </button>
                                </li>

                            </ul>
                        </div>
                        <div id="default-tab-content" >
                            <div className={`${count === 2 ? "hidden" : ""} p-6 rounded-lg`} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <Login />

                            </div>
                            <div className={`${count === 1 ? "hidden" : ""} p-1 rounded-lg`} id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                                <Signup count={count} setCount={setCount} />
                            </div>

                        </div>



                    </div>
                </div>

                <div className=' font-medium '>
                    <p className="text-slate-400 text-center mt-[4rem]">
                        Copyright &copy;2024 All rights reserved || <span className="text-slate-400 ">CODE WORLD</span>
                    </p>
                </div>
            </div>
        </section>

    )
}

export default Home
