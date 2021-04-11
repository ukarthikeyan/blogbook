import Link from 'next/link'

const Snippet = ({_id, title, author}) => {

    return (
    
        <section className="flex items-center px-4 bg-white">
            <div className="w-full rounded-lg shadow-lg p-4">
                <h3 className="font-light text-lg tracking-wide text-right">{'- ' + author}</h3>
                <p className="text-indigo-500 my-1">
                    {title.toUpperCase()}
                </p>
                <div className="mt-2">
                    <Link href={`/blogs/${_id}`}>

                        <a className="text-blue-700 inline-flex items-center  tracking-wide ">
                            <span className="hover:underline">
                                Details...
                    </span>
                            <span className="text-xl ml-2">&#8594;</span>
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Snippet