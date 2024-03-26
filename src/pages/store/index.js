const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
    // More products...
  ]

const StorePage = () => {
    

  return (
    <div>
      <h1>Welcome to our store</h1>
      {/* Show a grid of items which each can be clicked and go into a description page */}
      <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> */}

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    // onClick={}
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default StorePage;

// //     // Importing necessary libraries and components

// import React, { useEffect, useState } from 'react';

    

// // Defining the Product component

// function Product() {

//   const [products, setProducts] = useState([]);



//   // Fetching product data from an API

//   useEffect(() => {

//     fetch('<https://api.example.com/products>')

//       .then(response => response.json())

//       .then(data => setProducts(data));

//   }, []);



//   return (

//     <div className="product-page">

//       {products.map(product => (

//         <div key={product.id} className="product">

//           <h4>{product.title}</h4>

//           <p>{product.description}</p>

//           <button>Add to cart</button>

//         </div>

//       ))}

//     </div>

//   );

// }



// export default Product;