import React from 'react'

const Bookcard = ({thumbnail, title, author, publisher, alt, link}) => {
    return (
        <div className="w-full lg:text-lg sm:text-sm text-black bg-gray-light m-4 p-4 rounded-xl">


        <a className="mr-4" href={link}>
            <img src={thumbnail} alt={alt}/>
        </a>
            <p className="">Title: {title}</p>
            <p>Author: {author}</p>
            <p>Publisher: {publisher}</p>
        </div>
    )
}

export default Bookcard
