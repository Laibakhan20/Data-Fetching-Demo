
import { FcSettings } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { FcLandscape } from "react-icons/fc";


export default async function Home() {
 
  return (
    <div>
      
      {/* Hero Section */}
      <section className="bg-gray-100 text-gray-600 py-20 ">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 text-black p-3">
            Welcome to My Assignment
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            A project demonstrating data fetching using Next.js and Tailwind CSS.
          </p>
          <a
            href="#about"
            className="bg-white text-blue-600  px-6 py-3 rounded-full font-semibold hover:bg-gray-100 shadow-md "
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 shadow-md">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg text-center justify-center">
              <div className="text-blue-600 text-4xl mb-4 "><FcSettings className="mx-auto"/>
              </div>
              <h3 className="text-xl font-semibold mb-2">Client-Side Fetching</h3>
              <p className="text-gray-600">
                Data is fetched on the client side using `useEffect` and APIs.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg text-center">
              <div className="text-blue-600 text-4xl mb-4 "><FcIdea className="mx-auto"/>
              </div>
              <h3 className="text-xl font-semibold mb-2">Server-Side Fetching</h3>
              <p className="text-gray-600">
                Data is fetched on the server side for improved performance.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg text-center">
              <div className="text-blue-600 text-4xl mb-4"><FcLandscape className="mx-auto"/>
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional UI</h3>
              <p className="text-gray-600">
                A clean and responsive design using Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Assignment Section */}
      <section id="about" className="bg-gray-100 py-16 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">About My Assignment</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-center mb-8">
            This assignment demonstrates both <strong>client-side</strong> and <strong>server-side</strong> data fetching using **Next.js** and a clean UI built with **Tailwind CSS**. 
            Data is fetched from public APIs to display grid of cards.
          </p>
          <div className="flex justify-center">
            <a
              href="#features"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700"
            >
              View Features
            </a>
          </div>
        </div>
      </section>

      
    
  </div>
  );
}
