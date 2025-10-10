import React, {useState } from 'react'
import TopProducts from './homePage/TopProducts'
import { TopProductsData } from '../../data/Data'
import CustomContainer from '../ui/CustomContainer'
import MostRecentButton from './homePage/common/MostRecentButton';

export default function ContainerTopPro() {
    const [mostRecent, setMostRecent] = useState(true);
    const showAll = mostRecent ? TopProductsData.filter((item) => item.important === true) : TopProductsData;

    return (
        <CustomContainer>
            <div className="containerTop-Pro">
                <div className="containerTop-Pro-header flex justify-between items-center ">
                    <h2 className="font-bold xl:text-[1.7rem] mt-[3rem] mb-[.5rem]">Top Products</h2>
                    <MostRecentButton mostRecent={mostRecent} setMostRecent={setMostRecent} />
                </div>
                <div className="topProducts grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-auto gap-[1.2rem] mt-[2rem] md:ms-[0rem] ms-[1.5rem] mb-8">
                    {showAll.map((item, index) => (
                        <TopProducts
                            key={index}
                            title={item.title}
                            img={item.img}
                            price={item.price}
                            color1={item.color1}
                            color2={item.color2}
                            slug={item.slug}
                            newPrice={item.newPrice}
                            id={item.id}
                            colVisible1={item.colVisible1}
                            colVisible2={item.colVisible2}
                            colVisible3={item.colVisible3}
                        />
                    ))}
                </div>
            </div>
        </CustomContainer>
    );
}
