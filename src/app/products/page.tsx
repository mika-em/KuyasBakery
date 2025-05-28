import { Product } from "@/types";

const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Ube Ensaymada",
    price: 4.5,
    description: "Soft, buttery bread topped with ube and cheese.",
    category: "bread",
    image: "",
  },
  {
    id: "2",
    name: "Croissant",
    price: 3.25,
    description: "Flaky and golden, made fresh every morning.",
    category: "croissants",
    image: "",
  },
  {
    id: "3",
    name: "Matcha Cream Puff",
    price: 5.0,
    description: "Filled with house-made matcha custard.",
    category: "cream puffs",
    image: "",
  },
];

export default function ProductsPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl">Our Products</h1>
      <div className="grid">
        {sampleProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-xl p-4 border"
          >
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
            <p className="font-bold">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
