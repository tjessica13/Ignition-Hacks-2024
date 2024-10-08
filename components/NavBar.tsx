import Link from 'next/link'

const Navbar = () => {

  return (
    <nav className="bg-green p-4 text-black">

        {/* Standard menu */}
        <div className="flex mx-auto justify-between items-center py-3">
        {/*<div className="mx-auto justify-between items-center py-3 hidden md:flex">*/}
            <h1 className="text-3xl ">
                <Link href="/">
                    <b>VTutor AI</b>
                </Link>
            </h1>
            <ul className="flex space-x-4">
                <li className="py-1">
                <Link href="/">
                    Home
                </Link>
                </li>
                <li className="py-1">
                <Link href="#">
                    Courses
                </Link>
                </li>
                <li>
                  <Link href="#">
                    <div className="bg-black text-white rounded py-1 px-6">
                      Profile
                    </div>
                  </Link>
                </li>
            </ul>
        </div>

      {/* Mobile hamburger menu */}
      {/*
      <div className="mx-auto flex justify-between items-center py-3 sm:hidden">
        <h1 className="text-3xl ">
            <Link href="/">
                <b>VT</b>
            </Link>
        </h1>
        <button className="flex items-center text-black">
        <svg className="h-10 w-10" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.879 103.609" enable-background="new 0 0 122.879 103.609" xmlSpace="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M10.368,0h102.144c5.703,0,10.367,4.665,10.367,10.367v0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,20.735,0,16.07,0,10.368v0C0,4.665,4.666,0,10.368,0L10.368,0z M10.368,82.875 h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0c0,5.702-4.664,10.367-10.367,10.367H10.368C4.666,103.609,0,98.944,0,93.242l0,0 C0,87.54,4.666,82.875,10.368,82.875L10.368,82.875z M10.368,41.438h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,62.173,0,57.507,0,51.805l0,0C0,46.103,4.666,41.438,10.368,41.438 L10.368,41.438z"/></g></svg>
        </button>
        <ul className="hidden absolute flex space-x-4">
          <li className="py-1">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="py-1">
            <Link href="#">
              Courses
            </Link>
          </li>
          <li>
            <div className="bg-black text-white rounded py-1 px-6">

                <Link href="#">
                    Profile
                </Link>
            </div>
            
          </li>
        </ul>
      </div>

      */}
    </nav>

    // Mobile hamburger menu if on mobile
  )
}

export default Navbar
