// "use client"
// import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import React from 'react'
// import { CartItem as CartItemTypes } from '../types/cart.types'
// import Swal from 'sweetalert2'
// import { removeProductFromCart, updateProductQuantity } from '../server/cart.actions'
// import { toast } from 'react-toastify'
// import { removeProduct, setCartInfo } from '../store/cart.slice'
// import { useAppDispatch } from '@/features/auth/store/store'

// export default function Cartitems({infoo}:CartItemTypes) {
//     const {_id,count,price,product,}=infoo;
//     const{brand,category,imageCover,quantity,title,id}=product;
//     const dispatch=useAppDispatch();


//     const handelRemove = async ()=>{
//   const result= await    Swal.fire({
//         html:`<div className="text-center py-2">
//         <div className="w-16 h-16 mx-auto mb-4 fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         </div>
//         <h3 className="text-xl font-bold text-gray-900 mb-2 ">Remove Item</h3>
//         <p className="text-gray-500 text-sm leading-relaxed">Remove
//         <span className="font-semibold text-gray-700 ">${title.slice(0,40)}${title.length > 40 ? "...":""}</span>
//         From
//         </p>
//         </div>`,
//         showCancelButton:true,
//         showConfirmButton:true,
        
//         confirmButtonText:"Remove",
//         cancelButtonText:"Cansel",
//         customClass:{
//           confirmButton:`bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6rounded-xl transition-colors duration-200`,
//           popup:"rounded-2xl shadow-2xl border-0 p-0",
//           htmlContainer:"p-6 m-0",
//           actions:"px-6 pb-6 pt-0 gap-3 flex-row-reverse",
//           cancelButton:"bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all"
//         },
//       });
//       if(result.isConfirmed){
//         dispatch(removeProduct({id}))
//     const result=   await  removeProductFromCart(id)
//         toast.success("Product is Removed")
       

//       }



//     }

//    const handelUpdate = async (newCount:number)=>{
//     if(newCount<1) return;
//     try{
//       const response= await updateProductQuantity(id,newCount)
//       dispatch(setCartInfo(response))

//     }catch(error){

//     }

//     }



//   return (
//     <>
//     <div className="bg-white rounded-lg p-4 border border-gray-200">
//               <div className="flex gap-4">
//                 <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
//                   <img
//                     src={imageCover}
//                     alt={title}
//                     className="w-full h-full object-cover rounded"
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="font-semibold text-gray-900">{title}</h3>
//                   <p className="text-sm text-gray-500">Women Fashion</p>
                  
//                   <div className="mt-2">
//                     <p className="text-lg font-bold text-green-600">
//                       {price}EGP
//                       <span className="text-xs text-gray-500">per unit</span>
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex flex-col items-end justify-between">
//                   <div className="flex gap-2">
//                     <button className="p-1 hover:bg-gray-100 rounded">
//                       <FontAwesomeIcon
//                         icon={faHeart}
//                         className="w-5 h-5 text-gray-400"
//                       />
//                     </button>
//                     <button className="p-1 hover:bg-red-100 rounded"
//                     onClick={handelRemove}>
//                       <FontAwesomeIcon
//                         icon={faTrash}
//                         className="w-5 h-5 text-red-500"
//                       />
//                     </button>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-sm text-gray-500">Total</p>
//                     <p className="font-bold">{price * count} EGP</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2 mt-4">
//                 <button className="bg-green-500 text-white px-3 py-1 rounded text-sm font-semibold">
//                   - In Store
//                 </button>
//                 <div className="flex items-center border border-gray-300 rounded">
//                   <button className="px-3 py-1 text-gray-600"
//                   disabled={count<=1}
//                   onClick={()=>{
//                     handelUpdate(count-1)
//                   }}>−</button>
//                   <span className='w-12 text-center font-bold'>{count}</span>
//                   <button className="px-3 py-1 text-green-600 font-bold"
//                   disabled={count>=quantity }
//                   onClick={()=>{
//                     handelUpdate(count+1)
//                   }}>
//                     +
//                   </button>
//                 </div>
//               </div>
//             </div>
      
//     </>
//   )
// }


"use client"
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { CartItem as CartItemTypes } from '../types/cart.types'
import Swal from 'sweetalert2'
import { removeProductFromCart, updateProductQuantity } from '../server/cart.actions'
import { toast } from 'react-toastify'
import { removeProduct, setCartInfo } from '../store/cart.slice'
import { useAppDispatch } from '@/features/auth/store/store'

interface CartItemProps {
  infoo: CartItemTypes;
}

export default function Cartitems({ infoo }: CartItemProps) {
  const { _id, count, price, product } = infoo;
  const { brand, category, imageCover, quantity, title, id } = product;
  const dispatch = useAppDispatch();

  const handelRemove = async () => {
    const result = await Swal.fire({
      html: `<div className="text-center py-2">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Remove Item</h3>
        <p className="text-gray-500 text-sm leading-relaxed">Remove
        <span className="font-semibold text-gray-700 ">${title.slice(0,40)}${title.length > 40 ? "..." : ""}</span>
        From</p>
        </div>`,
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: "Remove",
      cancelButtonText: "Cancel",
      customClass: {
        confirmButton: `bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200`,
        popup: "rounded-2xl shadow-2xl border-0 p-0",
        htmlContainer: "p-6 m-0",
        actions: "px-6 pb-6 pt-0 gap-3 flex-row-reverse",
        cancelButton: "bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all"
      },
    });

    if (result.isConfirmed) {
      dispatch(removeProduct({ id }));
      await removeProductFromCart(id);
      toast.success("Product is Removed");
    }
  };

  const handelUpdate = async (newCount: number) => {
    if (newCount < 1) return;
    try {
      const response = await updateProductQuantity(id, newCount);
      dispatch(setCartInfo(response));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200">
      <div className="flex gap-4">
        <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
          <img
            src={imageCover}
            alt={title}
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{title}</h3>
          {/* <p className="text-sm text-gray-500">{brand} - {category}</p> */}
          <div className="mt-2">
            <p className="text-lg font-bold text-green-600">
              {price} EGP
              <span className="text-xs text-gray-500"> per unit</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between">
          <div className="flex gap-2">
            <button className="p-1 hover:bg-gray-100 rounded">
              <FontAwesomeIcon
                icon={faHeart}
                className="w-5 h-5 text-gray-400"
              />
            </button>
            <button className="p-1 hover:bg-red-100 rounded" onClick={handelRemove}>
              <FontAwesomeIcon
                icon={faTrash}
                className="w-5 h-5 text-red-500"
              />
            </button>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Total</p>
            <p className="font-bold">{price * count} EGP</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <button className="bg-green-500 text-white px-3 py-1 rounded text-sm font-semibold">
          - In Store
        </button>
        <div className="flex items-center border border-gray-300 rounded">
          <button
            className="px-3 py-1 text-gray-600"
            disabled={count <= 1}
            onClick={() => handelUpdate(count - 1)}
          >
            −
          </button>
          <span className="w-12 text-center font-bold">{count}</span>
          <button
            className="px-3 py-1 text-green-600 font-bold"
            disabled={count >= quantity}
            onClick={() => handelUpdate(count + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}