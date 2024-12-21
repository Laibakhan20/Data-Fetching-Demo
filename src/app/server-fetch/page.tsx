import Card from "../components/Card"; 

type items = {
  id: number;
  name: string;
  type: string;
  available: boolean; 
};

// Fetch books data
async function fetchBooks(): Promise<items[]> {
  const res = await fetch("https://simple-books-api.glitch.me/books");
  if (!res.ok) throw new Error("Failed to fetch data");
  const data: items[] = await res.json();
  return data; // Fixed to return array directly
}

// Server Component
export default async function ServerFetchPage() {
  const products: items[] = await fetchBooks();

  return (
    <div>
      <div className="container mx-auto p-4 md:h-screen">
        <h1 className="text-3xl font-bold mb-10 mt-10 text-gray-600">Books Fetch By Server Side</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((item) => (
            <Card 
              key={item.id}
              title={item.name} 
              id={item.id}
              type={item.type} 
              available={item.available ? "Available" : "Out of Stock"} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
