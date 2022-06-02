import React,{ Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import profile from './images/profile.png'
import resume from './Resume/NameeraResume.pdf' 

const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'About', href: '#', current: false },
    { name: 'Portfolio', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const NavbarComp = () => {

    const goToAbout =()=>{
      window.scrollTo(765,765)
      }
      const goToHome =(e)=>{
          window.scrollTo(0,0)
      }
      const goToProjects =()=>{
          window.scrollTo(1500,1500)
      }
      const goToContact =()=>{
          window.scrollTo(2900,2900)
      }

    return (

        <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-50">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
              <div className="relative flex items-center justify-between h-16">

                <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <img
                          className="h-8 w-8 rounded-full"
                          src={profile}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"  >
                        
                  <Menu.Items className="origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a href={resume} target="_blank" download>
                            <button className={classNames(active ? 'bg-gray-200' : '', 'line-l block px-4 py-2 text-md text-gray-700')}>
                             Resume
                            </button>
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>

                <div className="flex-1 flex items-center justify-center sm:items-stretch ">

                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                 
                        <button className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium' onClick={()=>goToHome()}>
                            {navigation[0].name}
                        </button>
                        <button className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium' onClick={()=>goToAbout()}>
                            {navigation[1].name}
                        </button>
                        <button className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium' onClick={()=>goToProjects()}>
                            {navigation[2].name}
                        </button>
                        <button className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium' onClick={()=>goToContact()}>
                            {navigation[3].name}
                        </button>
                   
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                <div className="inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-3 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>


                </div>
              </div>
            </div>
  
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 cursor-pointer rounded-md text-md font-medium"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
  
      

    )
}

export default NavbarComp