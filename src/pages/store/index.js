import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom/dist";

const StorePage = () => {
    const nav = useNavigate()
  const [games, setGames] = useState([]);
  const [singleGame, setSingleGame] = useState({});
  useEffect(() => {
    fetchGames();
    // fetchSingleGame()
  }, []);

  const fetchGames = async () => {
    const response = await fetch("http://localhost:5000/");
    const data = await response.json();
    setGames(data);
  };

//   const fetchSingleGame = async () => {
//     const response = await fetch(`http://localhost:5000/${id}`);
//     const data = await response.json();
//     setSingleGame(data);
//   };

  async function createGame() {
    nav("/createGame");
    console.log("Creating game")
  }

  const handleClick = async (e) => {
    e.preventDefault();
    nav(`/${e.game._id}`);
  }
 return (
    <div>
      <h1>Welcome to our store</h1>
        
      <div className="bg-white">
      
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2                   lg:grid-cols-4 xl:gap-x-8">
            {games.map((game) => (
              
                <div key={game._id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    {/* <NavLink to={`/${game._id}`}> */}
                        {console.log("GAME ID",game._id )}
                        <img
                        src={game.image}
                        alt={game.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        onClick={handleClick}
                        />
                   {/* </NavLink> */}
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={game.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {game.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{game.color}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {game.price}
                    </p>
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
