import React from 'react'

export default function BlogCard({ id, img, title, description, design }) {
    return (
        <div className="blogCard max-w-[405px] max-h-auto flex flex-col gap-[1rem]">
            <div className="blogCard-img rounded-2xl ">
                <img src={img} alt="" />
            </div>
            <h2 className="font-semibold text-[1.5rem] leading-[1.5rem]">{title}</h2>
            <p className="text-[gray] text-[1rem]">{description}</p>
            <span className="text-[var(--main-color)] bg-[var(--backgroud-color)] inLine-flex  w-fit px-2 py-0.5 rounded-2xl">{design}</span>
        </div>
    );
}
