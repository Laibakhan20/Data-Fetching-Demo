import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react'

type CardProps = {
    title: string;
    image?: string; 
    id: number;
    description?: string;
    price?: number;
    category?: string;
    available? : string;
    type? : string;
  };

function Card ({ title, image, id, description, price, category, available, type }: CardProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md max-w-[350px]">
      {image && <Image src={image} alt={title} width={100} height={100} className="h-40 w-full object-contain object-center mb-2 rounded" />}
      <h2 className="text-xl font-semibold p-2">{title}</h2>
      <p className="text-gray-500 text-sm p-1">ID: {id}</p>

      {/* Render type if present */}
      {type && (
        <div>
          <p className="text-base text-gray-800 p-1 font-bold pt-2">
          <span className='font-normal text-gray-700'>Category:</span> {type}
          </p>
        </div>
      )}

      {/* Render price and category if present */}
      {(price || category) && (
        <div className="flex justify-between pt-2 pb-2">
          {price && <p className="font-semibold">Price: ${price}</p>}
          {category && <p className="text-gray-600">{category}</p>}
        </div>
      )}

      {/* Render description if present */}
      {description && (
        <div>
          <p className="text-sm text-gray-800 p-1 line-clamp-2 pt-2">
            {description}
          </p>
          <span className="text-xs text-red-500">Read More...</span>
        </div>
      )}

      {/* Render availability if present */}
      {available !== undefined && (
        <p
          className={`text-sm font-bold mt-2 ${
            available ? "text-green-500" : "text-red-500"
          }`}
        >
          {available ? "Available" : "Out of Stock"}
        </p>
      )}
      
      <div className='flex justify-between'>
      <Button className="bg-blue-600 text-white mt-2">
        Add To Cart
      </Button>
      <Button className="bg-white text-blue-600 mt-2">
        View Details
      </Button>
      </div>
      

      
      
      
    </div>
  )
}

export default Card