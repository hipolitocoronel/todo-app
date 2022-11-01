import React from 'react'
import iconSun from '../images/icon-sun.svg'
import iconMoon from '../images/icon-moon.svg'

export default function Header({handleDarkMode, darkMode, setNewTask, handlePressEnter, newTask}) {
    
    
    return (
        <header className={'px-6 py-10 space-y-6 md:px-32 lg:px-60 xl:px-80 bg-cover dark:bg-slate-900 '.concat( darkMode ? 'bg-mobile-dark ' : 'bg-mobile-light')}>
            <div className='flex justify-between'>
                <h1 className='text-slate-200 font-bold text-2xl tracking-lg'>TODO</h1>
                <button onClick={()=>handleDarkMode(!darkMode)}>
                    {
                        darkMode
                        ? <img src={iconSun} alt="theme app" />
                        : <img src={iconMoon} alt="theme app" />
                    }
                </button>
            </div>

            <input className='w-full py-4 rounded-md px-4 outline-none dark:bg-dark-100 dark:text-slate-300' 
                placeholder='Create a new todo...' 
                type="text" 
                onKeyDown={handlePressEnter}
                onChange={ e =>setNewTask(e.target.value)}
                value={newTask}
            />
        </header>
    )
}
