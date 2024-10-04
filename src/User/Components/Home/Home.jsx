import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
const Home = () => {
  
  return (
    <div className="relative w-full h-screen bg-customGray">
      <div className="flex flex-col md:flex-row h-full">
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="text-white z-10">
            <h1 className="text-5xl font-extrabold mb-6 text-black">
              <span className="text-edu-au">W</span>elcome to Pet Food Store
            </h1>
            <p className="text-xl mb-8 text-black">
              Explore our wide range of premium pet foods and accessories. From
              dogs and cats to birds and fish, we have everything your pets need
              to stay happy and healthy.
            </p>
            <Link to="/Shop">
              <button className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-red-600 transition">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-11/12 h-auto shadow-2xl rounded-lg">
            <img
              src="https://cdn.shopify.com/s/files/1/0565/8021/0861/articles/img-2-5-1700550229210.jpg?v=1700550614"
              alt="Pet Food"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      
        
       
      <div className="mt-12">
      <Footer />
      </div>
    </div>
  );
};

export default Home

