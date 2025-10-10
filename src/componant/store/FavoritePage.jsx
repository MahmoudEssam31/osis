import React from 'react'
import { useHandleFavList } from './HandleFavList';
import BuyPage from '../BuyPage';
import ProductDetails from '../productDetails/ProductDetails';
import { AiFillCloseSquare } from 'react-icons/ai';
// import { TopProductsData } from '../../data/Data';

export default function FavoritePage({ onNext, onClose}) {
    const { favList } = useHandleFavList();
    // const [inFavList] = useHandleFavList();
    // const proData = TopProductsData;
    const isEmpty = favList.length === 0;
    // console.log("favList content:", favList);
      const total = favList.reduce((acc, item) => {
          const price = item.newPrice ? item.newPrice : item.price;
          const quantity = item.quantity ? item.quantity : 1;
          return acc + price * quantity;
      }, 0);
    console.log("favList:", favList);

    // console.log(total);
    return (
        <div className="flex flex-col justify-center items-center ">
            {favList.length === 0 ? (
                <p className="text-[1.5rem] font-bold mt-[2rem] flex flex-col gap-[2rem] justify-center items-center">
                    No Favorite Category
                    <AiFillCloseSquare size={100} fill="var(--main-color)" />
                </p>
            ) : (
                <div className="favo-container flex flex-col gap-[1rem] overflow-y-auto h-[calc(100vh-150px)]">
                    {favList.map((item) => (
                        <BuyPage key={item.id} id={item.id} newPrice={item.newPrice} img={item.img} title={item.title} description={item.description} price={item.price} color1={item.color1} />
                    ))}
                </div>
            )}
            {!isEmpty && (
                <div className="total border-1 px-[1em] py-[.1em]  text-lg font-semibold text-[var(--main-color)]">
                    <span className='text-[var(--dark-color)] uppercase text-[1.1rem]'>Total:</span> ${total.toFixed(2)}
                </div>
            )}
            <button onClick={isEmpty ? onClose : onNext} className="flex justify-center items-center absolute bottom-0 w-full h-[3rem] bg-[var(--main-color)] cursor-pointer text-white">
                {isEmpty ? "Cancel" : "Next"}
            </button>
        </div>
    );
}
