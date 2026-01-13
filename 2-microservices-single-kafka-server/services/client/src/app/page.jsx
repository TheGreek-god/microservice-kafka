import Pay from "@/components/Pay";
import { Minus } from "lucide-react";
import Image from "next/image";

const Page = () => {
  const cart = [
    {
      id: 1,
      name: "Nike Air Max",
      price: 129.9,
      image: "/product1.png",
      description:
        "Elevate your comfort and style with the Nike Air Max. Featuring a sleek design and innovative cushioning technology, these shoes provide ultimate support with every step. Whether you're hitting the gym or hitting the streets, the Air Max ensures you stay on top of your game in both performance and fashion",
    },
    {
      id: 2,
      name: "Adidas Superstar Cap",
      price: 29.9,
      image: "/product2.png",
      description:
        "Complete your look with the Adidas Superstar Cap. This stylish black cap features the iconic Adidas Superstar logo, offering a blend of casual comfort and sporty style. Made with high-quality materials, it’s perfect for everyday wear or making a statement on the go",
    },
    {
      id: 3,
      name: "Puma Yellow T-Shirt",
      price: 49.9,
      image: "/product3.png",
      description:
        "Stand out in style with the Puma Yellow T-Shirt. Featuring a bold graphic design, this vibrant yellow tee blends comfort with fashion. Whether you're hitting the streets or hanging with friends, this shirt makes a statement. Crafted from soft, breathable fabric, it's the perfect addition to any casual wardrobe.",
    },
  ];
  return (
    <div className="mb-16">
      <h1 className="text-2xl font-bold">Cart Products</h1>
      <div className="flex flex-col lg:flex-row justify-between gap-16 mt-16">
        <div className="flex flex-col gap-16 w-full lg:w-2/3">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4">
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={200}
                className="rounded-lg"
                quality={100}
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-gray-800">
                    ${item.price.toFixed(2)}
                  </h2>
                  <div className="flex items-center gap-1 bg-red-100 rounded-md p-1">
                    <Minus className="w-2 h-2 text-red-300" />
                    <span className="text-[10px] text-red-300">Remove</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/3">
          <Pay cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Page;
