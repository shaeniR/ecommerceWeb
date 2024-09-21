import {useContext, useEffect} from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title.jsx";


const LetestCollection = () => {
    const { products } = useContext(ShopContext);
    const [setLatestProducts] = useContext([]);

    useEffect(() => {
        setLatestProducts(products.slice(0,10));
    }, []);

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl '>
            <Title text1={'Latest'} text2={'Collection'} />

                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
                </p>
                </div>
        </div>
    );
}

export default LetestCollection;