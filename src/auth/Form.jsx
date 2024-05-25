import React, { useState } from 'react';
import Login from './Login.jsx';
import Register from './Register.jsx';

export default function Form() {
    const [tabs] = useState([
        { title: 'login', content: <Login /> },
        { title: 'register', content: <Register /> },
    ]);
    const [activeTab, setActiveTab] = useState('login');

    return (
        <div className='container flex flex-col   h-full bg-gray-50 rounded-md py-5  mt-[130px] w-full  sm:w-[80%] lg:w-[50%] xxl:w-[40%] '>
            <div className="flex justify-between items-center  space-x-4 bg-gray-300  w-[90%]   mx-auto p-2 my-4 rounded-md ">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(tab.title)}
                        className={`px-4 w-[50%] py-2 rounded-lg transition-all duration-500  ${
                            activeTab === tab.title ? 'bg-main text-white' : 'bg-gray-100'
                        }`}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            <div className="mt-4">
                {tabs.find(tab => tab.title === activeTab).content}
            </div>
        </div>
    );
}
