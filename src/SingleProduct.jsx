/* eslint-disable react/prop-types */
const SingleProduct = ({product,handleCart}) => {
    console.log (handleCart)
    return (
        <div className="my-3 shadow-lg rounded-lg">
            <div className='card  text-center space-y-3 p-4'>
             <img className='w-[100px] mx-auto mt-3' src={product.image} alt="" />
            <h1 className="text-xl font-medium">{product.title}</h1>
            <p>{product.description}</p>
            <div className='footer flex justify-around'>
            <h1 className='text-3xl'>${product.price}</h1>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mb-3" onClick={() => handleCart (product)}>Add to cart</button>
           </div>
        </div>
        </div>
    );
};

export default SingleProduct;