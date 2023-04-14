import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='w-full flex flex-row justify-between py-7 px-12'>
      <aside>
         <img className="self-start" src='../src/assets/devchallenges.svg' alt='devchallenges_logo'/>
      </aside>
      <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" className="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white" type="button">
          <span className="sr-only">Open user menu</span>
          Xanthe Neal
      </button>
      <div id="dropdownAvatarName" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
            <li>
              <Link to={'/profile'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My Profile</Link>
            </li>
            <li>
              <Link to={'/'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Group Chat</Link>
            </li>
          </ul>
          <div className="py-2">
            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logout</button>
          </div>
      </div>
    </header>
  )
}
