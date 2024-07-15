
import React from 'react';

const Doghome = () => {
  const dogs = [
    {
      name: "Labrador Retriever",
      image: "https://cdn.shopify.com/s/files/1/0565/8021/0861/files/1July_Henlo_Main-min.png?v=1720085628",
      description: "Labrador Retrievers are friendly, outgoing, and high-spirited companions."
    },
    {
      name: "German Shepherd",
      image: "https://supertails.com/cdn/shop/files/8th_July_mob_3-min_aa90906e-e87b-4999-b5c3-358a2fd362a3_800x.png?v=1720433410",
      description: "German Shepherds are courageous, confident, and keen."
    },
    {
      name: "Golden Retriever",
      image: "https://via.placeholder.com/150",
      description: "Golden Retrievers are intelligent, friendly, and devoted."
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Dogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dogs.map((dog, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img src={dog.image} alt={dog.name} className="w-full h-48 object-cover rounded-t-lg mb-4"/>
            <h2 className="text-2xl font-bold mb-2">{dog.name}</h2>
            <p className="text-gray-700">{dog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doghome;



