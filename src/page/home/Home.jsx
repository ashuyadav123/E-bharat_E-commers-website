import React, { useContext } from 'react'
import Layout from '../../component/layout/Layout';
import myContext from '../../context/data/myContext';
import HeroSection from '../../component/herosection/HeroSection';
import Filter from '../../component/filter/Filter';
import ProductCard from '../../component/productCart/ProductCart';
import Track from '../../component/track/Track';
import Testimonial from '../../component/testimonial/Testimonial';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../../redux/cartSlice';


const Home = () => {
   const dispatch=useDispatch();
   const cartItem=useSelector((state)=>state.cart)
   console.log(cartItem);

   const addCart=()=>{
    dispatch(addToCart('shirt'))
   }
   const deleteCart=()=>{
    dispatch(deleteFromCart('shirt'))
   }
  return (
    <Layout>
        {/* <div className='flex gap-5 jsutify-center'>
            <button className='bg-gray-300 p-5' onClick={()=>addCart()}>add</button>
            <button className='bg-gray-300 p-5' onClick={()=>deleteCart()}>delete</button>
        </div> */}
      <HeroSection />
      <Filter/>
      <ProductCard />
      <Track />
      <Testimonial/>
    
    </Layout>
  )
}

export default Home