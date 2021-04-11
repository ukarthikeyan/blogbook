import Link from 'next/link'

const Header = () => {
    return (
        <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow-sm sm:items-baseline w-full">
            <div className="mb-2 sm:mb-0 inner">

                <a href="/home" className="text-2xl no-underline text-indigo-500 hover:text-blue-dark font-sans font-bold">BlogBook</a><br />
                <span className="text-xs text-gray-600">Beautiful New Tagline</span>

            </div>

            <div className="sm:mb-0 self-center">
                <div className="h-10" >

                    <Link href="#">
                        <a className="text-md no-underline text-gray-900 hover:text-indigo-600 ml-2 px-1">Sign In</a>
                    </Link>

                    <Link href="#">
                        <a className="text-md no-underline text-grey-darker hover:text-indigo-600 ml-2 px-1">Sign Up</a>
                    </Link>

                    <Link href="/blogs">
                        <a className="text-md no-underline text-grey-700 hover:text-indigo-600 ml-2">Blog Posts</a>
                    </Link>

                    <Link href="/blogs/create">
                        <a className="text-md no-underline text-grey-darker hover:text-indigo-600 ml-2 px-1">Create Post</a>
                    </Link>


                </div>

            </div>
        </nav>
    )
}

export default Header