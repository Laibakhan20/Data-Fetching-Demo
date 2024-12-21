"use client";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

// Define the structure of product details
type Details = {
  id: number;
  title: string;
  image: string; // 'image' instead of 'url' since FakeStoreAPI uses 'image'
  description: string;
  price: number;
  category: string;
};

export default function ClientFetchPage() {
  const [product, setProduct] = useState<Details[]>([]); // Explicitly type the state

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data: Details[] = await response.json(); // Assign type 'Details[]'
        console.log(data);
        setProduct(data); // No nested 'products', assign 'data' directly
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts(); // Call the function
  }, []);

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-10 mt-10 mx-auto text-gray-600">Products Fetch By Client Side </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {product.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              image={item.image} // Use 'image' instead of 'url'
              id={item.id}
              description={item.description}
              price={item.price}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}