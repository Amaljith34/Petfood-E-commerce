// import React from 'react'
// import * as Yup from 'yup'
// import axios from 'axios'
// import { useFormik } from 'formik'

// const initialValues={name:'',description:'',Price:'',image:''}
// const validationSchema=Yup.object({
//     name:Yup.string('Enter the name'),
//     description:Yup.string('Enter the description'),
//     price: Yup.string().required("Enter the price"),
//     img: Yup.string().required("Enter the image URL")
// })

// const Productmodal = ({ isOpen, onClose, values }) => {
//     const  onSubmit=(values)=>{
//         axios.get('http://localhost:8000/products')
//         .then(res=>{
//             let check=res.data.find(element=>{
//               return element.name===values.name
//             })
//             if(check){
//               alert('alredy added')
//             }
//             else{
//               axios.post('http://localhost:8000/products',values)
//               .then(res=>alert('item added'))
//             }
//         })
//         .catch(error=>alert('error'))
//     }
//     const formik=useFormik({
//       initialValues,
//       onSubmit,
//       validationSchema,
//       handleSubmit,
//       values
//     })
//   return (
//     <div className='fixed inset-0 bg-gray-600 bg-opacity-50 backdrop-blur-sm flex justify-center items-center'>
//       <div className='relative w-full max-w-lg mx-auto bg-white rounded-lg shadow-lg'>
//         <button className='absolute top-3 right-3' onClick={onClose}>
//           <CircleX size={30} />
//         </button>
//         <div className='px-8 py-6'>
//           <h1 className='text-2xl font-bold mb-4 text-center'>Enter the product details</h1>
//           <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4'>
//             <div>
//               <input type='text' id='title' name='title' value={formik.values.title} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter the product name'
//                 className='w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
//               {formik.touched.title && formik.errors.title && <p className='text-sm text-red-600'>{formik.errors.title}</p>}
//             </div>

//             <div>
//               <input type='text' id='description' name='description' value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter the product description'
//                 className='w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
//               {formik.touched.description && formik.errors.description && <p className='text-sm text-red-600'>{formik.errors.description}</p>}
//             </div>

//             <div>
//               <input type='text' id='price' name='price' value={formik.values.price} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter the product price'
//                 className='w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
//               {formik.touched.price && formik.errors.price && <p className='text-sm text-red-600'>{formik.errors.price}</p>}
//             </div>

//             <div>
//               <input type='text' id='category' name='category' value={formik.values.category} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter the product category'
//                 className='w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
//               {formik.touched.category && formik.errors.category && <p className='text-sm text-red-600'>{formik.errors.category}</p>}
//             </div>

//             <div>
//               <input type='text' id='quantity' name='quantity' value={formik.values.quantity} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter the product quantity'
//                 className='w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
//               {formik.touched.quantity && formik.errors.quantity && <p className='text-sm text-red-600'>{formik.errors.quantity}</p>}
//             </div>

//             <div>
//               <input type='text' id='img' name='img' value={formik.values.img} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter the image URL'
//                 className='w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
//               {formik.touched.img && formik.errors.img && <p className='text-sm text-red-600'>{formik.errors.img}</p>}
//             </div>

//             <button type='submit' className='mt-4 w-full flex items-center justify-center gap-2 px-5 py-3 font-medium bg-black rounded-md text-white'>Add product</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Productmodal




// // import React, { useRef } from 'react'
// // import { CircleX } from 'lucide-react';
// // import { useFormik } from 'formik';
// // import * as Yup from 'yup'
// // import axios from 'axios';

// // const initialValues = {
// //   title: "",
// //   description: "",
// //   price: "",
// //   category: "",
// //   quantity: "",
// //   img: ""
// // }

// // const validationSchema = Yup.object({
// //   title: Yup.string().required("Enter the name"),
// //   description: Yup.string().required("Enter the description"),
// //   price: Yup.string().required("Enter the price"),
// //   category: Yup.string().required("Enter the category"),
// //   quantity: Yup.string().required("Enter the quantity"),
// //   img: Yup.string().required("Enter the image URL")
// // })

// // function Modal({ onClose }) {
// //   const onSubmit = (values) => {
// //     axios.get("http://localhost:5000/products")
// //       .then(res => {
// //         let existing = res.data.find(elem => {
// //           return elem.name === values.title
// //         })
// //         if (existing) {
// //           alert("Item already added")
// //         } else {
// //           axios.post('http://localhost:5000/products', values)
// //             .then(res => alert("Item added"))
// //         }
// //       }).catch(error=>alert("oops error occured while "))
// //   }

// //   const formik = useFormik({
// //     initialValues,
// //     onSubmit,
// //     validationSchema
// //   })


 
// //   return (
// //     <div className='fixed inset-0 bg-gray-600 bg-opacity-50 backdrop-blur-sm flex justify-center items-center'>
// //       <div className='relative w-full max-w-lg mx-auto bg-white rounded-lg shadow-lg'>
// //         <button className='absolute top-3 right-3' onClick={onClose}>
// //           <CircleX size={30} />
// //         </button>
// //         <div className='px-8 py-6'>
// //           <h1 className='text-2xl font-bold mb-4 text-center'>Enter the product details</h1>
// //           <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4'>
// //             <div>
// //               <input type='text' id='title' name='title' value={formik.values.title} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter the product name'
// //                 className='w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
// //               {formik.touched.title && formik.errors.title && <p className='text-sm text-red-600'>{formik.errors.title}</p>}
// //             </div>

// //             <div>
// //               <input type='text' id='description' name='description' value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter the product description'
// //                 className='w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
// //               {formik.touched.description && formik.errors.description && <p className='text-sm text-red-600'>{formik.errors.description}</p>}
// //             </div>

// //             <div>
// //               <input type='text' id='price' name='price' value={formik.values.price} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter the product price'
// //                 className='w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
// //               {formik.touched.price && formik.errors.price && <p className='text-sm text-red-600'>{formik.errors.price}</p>}
// //             </div>

// //             <div>
// //               <input type='text' id='category' name='category' value={formik.values.category} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter the product category'
// //                 className='w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
// //               {formik.touched.category && formik.errors.category && <p className='text-sm text-red-600'>{formik.errors.category}</p>}
// //             </div>

// //             <div>
// //               <input type='text' id='quantity' name='quantity' value={formik.values.quantity} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter the product quantity'
// //                 className='w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
// //               {formik.touched.quantity && formik.errors.quantity && <p className='text-sm text-red-600'>{formik.errors.quantity}</p>}
// //             </div>

// //             <div>
// //               <input type='text' id='img' name='img' value={formik.values.img} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter the image URL'
// //                 className='w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
// //               {formik.touched.img && formik.errors.img && <p className='text-sm text-red-600'>{formik.errors.img}</p>}
// //             </div>

// //             <button type='submit' className='mt-4 w-full flex items-center justify-center gap-2 px-5 py-3 font-medium bg-black rounded-md text-white'>Add product</button>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Modal;


// Productmodal.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const Productmodal = ({ isOpen, onClose, value, isEditMode }) => {
//   const [productData, setProductData] = useState(
//     value || { name: '', description: '', price: '', image: '' }
//   );

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProductData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (isEditMode) {
//       // Update product
//       axios.put(`http://localhost:8000/products/${productData.id}`, productData)
//         .then(() => onClose())
//         .catch((error) => console.log(error));
//     } else {
//       // Add new product
//       axios.post('http://localhost:8000/products', productData)
//         .then(() => onClose())
//         .catch((error) => console.log(error));
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
//         <h2 className="text-2xl font-bold mb-4">
//           {isEditMode ? 'Edit Product' : 'Add Product'}
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={productData.name}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Description</label>
//             <textarea
//               name="description"
//               value={productData.description}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             ></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Price</label>
//             <input
//               type="number"
//               name="price"
//               value={productData.price}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Image URL</label>
//             <input
//               type="text"
//               name="image"
//               value={productData.image}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <div className="flex justify-end">
//             <button
//               type="button"
//               className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
//               onClick={onClose}
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               {isEditMode ? 'Update': 'Add'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Productmodal;
// Productmodal.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Productmodal = ({ isOpen, onClose, value, isEditMode, refreshProducts }) => {
  const [productData, setProductData] = useState(
    value || { name: '', description: '', price: '', image: '' ,Qty:'',category:'' }
  );

  useEffect(() => {
    if (value) {
      setProductData(value);
    } else {
      setProductData({ name: '', description: '', price: '', image: '',Qty:'',category:'' });
    }
  }, [value]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = isEditMode
      ? axios.put(`http://localhost:8000/products/${productData.id}`, productData)
      : axios.post('http://localhost:8000/products', productData);

    request
      .then(() => {
        refreshProducts();
        onClose();
      })
      .catch((error) => console.log(error));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75 ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 mb-24">
        <h2 className="text-2xl font-bold mb-4">
          {isEditMode ? 'Edit Product' : 'Add Product'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={productData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={productData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={productData.price}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Image URL</label>
            <input
              type="text"
              name="image"
              value={productData.image}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Quantity</label>
            <input
              type="number"
              name="Qty"
              value={productData.Qty}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Category</label>
            <input
              type="text"
              name="category"
              value={productData.category}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              {isEditMode ? 'Update' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Productmodal;
