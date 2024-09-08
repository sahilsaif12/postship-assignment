
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import React from "react"

export default function Navbar() {
  return (
    <header className="bg-[#ffffff] sticky z-10 top-0  border-b-2 pb-2  gap-4 px-4 w-screen flex items-center justify-between  py-2 sm:px-6">
          <Link to='/' className="font-medium md:hidden text-gray-900 hover:text-gray-700" >
            Home
          </Link>
          <div className="relative md:hidden w-2/5 max-w-md">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon  />
            </div>
            <Input
              type="search"
              placeholder="Search"
              className="  shadow-none rounded-none focus:rounded-md border-0  border-b-2 border-b-slate-400 bg-transparent py-2 pl-10 pr-3 text-gray-900 focus:outline-none  outline  focus:border-2  outline-transparent"
            />
          </div>
          <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild  >
              <Button variant="ghost" size="icon" className="rounded-full">
                <MenuIcon className="h-6 w-6 text-gray-900" />
                <span className="sr-only">Toggle navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">

      <div className="  mx-auto flex  flex-col ">
        <nav className="flex flex-col gap-y-6">
          <Link to='/order' className="font-medium text-gray-900 hover:text-gray-700" >
            Orders
          </Link>
          <Link to='/integrations' className="font-medium text-gray-900 hover:text-gray-700" >
            Integrations
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="font-medium text-gray-900 hover:text-gray-700 flex items-center space-x-1">
              <span>Tracking</span>
              <ChevronDownIcon/>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link  to='/overview' >
                  Overview
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link  to='/shipments' >
                  Shipments
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to='/reports' >
                  Reports
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to='/reports'  className="font-medium text-gray-900 hover:text-gray-700" >
            Partner With Us
          </Link>
          <div className="self-start">

          <DropdownMenu   >
            <DropdownMenuTrigger >
              <Button variant="ghost" size="icon" className="w-auto">
                <UserIcon/> 
                <span className="sr-onl">Account</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>My Account</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
          <Button variant="ghost" size="icon" className="w-auto self-start ">
            <SettingsIcon/>
            <span className="sr-onl">Settings</span>
          </Button>
        </nav>
       
      </div>
      </SheetContent>
      </Sheet>
      </div>
      <div className="container hidden  mx-auto md:flex items-center justify-between">
        <nav className="flex items-center  space-x-6">
        <Link to='/' className="font-medium  text-gray-900 hover:text-gray-700" >
            Home
          </Link>
          <Link to='/order' className="font-medium text-gray-900 hover:text-gray-700" >
            Orders
          </Link>
          <Link to='/integrations' className="font-medium text-gray-900 hover:text-gray-700" >
            Integrations
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="font-medium text-gray-900 hover:text-gray-700 flex items-center space-x-1">
              <span>Tracking</span>
              <ChevronDownIcon/>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link  to='/overview' >
                  Overview
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link  to='/shipments' >
                  Shipments
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to='/reports' >
                  Reports
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to='/reports'  className="font-medium text-gray-900 hover:text-gray-700" >
            Partner With Us
          </Link>
        </nav>
        <div className="flex items-center  space-x-4">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon  />
            </div>
            <Input
              type="search"
              placeholder="Search"
              className="  shadow-none rounded-none focus:rounded-md border-0  border-b-2 border-b-slate-400 bg-transparent py-2 pl-10 pr-3 text-gray-900 focus:outline-none  outline  focus:border-2  outline-transparent"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger >
              <Button variant="ghost" size="icon" className="w-auto">
                <UserIcon/> 
                <span className="sr-onl">Account</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>My Account</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="icon" className="w-auto">
            <SettingsIcon/>
            <span className="sr-onl">Settings</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

interface MenuIconProps extends React.SVGProps<SVGSVGElement> {}
const MenuIcon: React.FC<MenuIconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
};


function ChevronDownIcon() {
  return (
    <svg
     className="h-4 w-4" 
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function SearchIcon() {
  return (
    <svg
    className="h-5 w-5 text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#363636"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SettingsIcon() {
  return (
    <svg
    className="h-6 w-6 text-gray-900" 
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function UserIcon() {
  return (
    <svg
     className="h-6 w-6 text-gray-900" 
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}