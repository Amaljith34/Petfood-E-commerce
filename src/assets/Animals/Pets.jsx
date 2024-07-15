
import React from 'react';
import { Link } from 'react-router-dom';

const Pets = () => {
  const dogs = [
    {
      name: "Dogs",
      image: "https://supertails.com/cdn/shop/files/Frame_344684006-min_a45bbe7b-ea37-4e56-bce2-a1061fc094f4.png?v=1717524214",
      description: "Loyal and affectionate, dogs are known for their playful and protective nature. Explore our range of dog food, toys, and care tips to keep your canine companion in top shape."
    },
    {
      name: "Cat",
      image: "https://supertails.com/cdn/shop/files/Frame_344684007-min_ef60b910-a8cf-4902-a7ea-013706f6c962.png?v=1717524214",
      description: "Independent yet loving, cats make wonderful pets with their graceful and curious demeanor. Discover our selection of cat food, accessories, and health advice to pamper your feline friend"
    },
    {
      name: "Fish",
      image: "https://supertails.com/cdn/shop/files/Frame_344684011-min.png?v=1717524214",
      description: "Serene and captivating, fish create a calming environment in any home. Find the best fish food, tanks, and maintenance tips to keep your aquatic pets healthy and happy."
    },
    {
        name: "Bird",
        image: "https://supertails.com/cdn/shop/files/Frame_344684009-min_ac340e54-a1d9-423c-8123-50df53cfc37a.png?v=1717524215",
        description: "Colorful and melodious, birds bring joy with their songs and vibrant personalities. Browse our bird food, cages, and care guides to ensure your feathered friend thrives."
      }
  ];

  return (
    <div className="container mx-auto p-4  ">
      <h1 className="text-4xl font-bold text-center mb-8 text-red-600">Pets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-56 md:pb-0 ">
        {dogs.map((dog, index) => (
          <div key={index} className="border border-gray-400 p-6 rounded-lg shadow-lg">
            <Link to='/dog'>
            <img src={dog.image} alt={dog.name} className="w-full  object-cover rounded-t-lg mb-4"/>
            </Link>
            <h2 className="text-2xl font-bold mb-2">{dog.name}</h2>
            <p className="text-gray-700">{dog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pets;



