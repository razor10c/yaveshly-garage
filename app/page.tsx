import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const cars = [
  {
    name: "Nissan GT-R R35",
    type: "JDM",
    image: "https://cdn.motor1.com/images/mgl/BxM6V/s1/4x3/2020-nissan-gt-r-nismo.jpg"
  },
  {
    name: "Lamborghini Aventador SVJ",
    type: "Hypercar",
    image: "https://cdn.motor1.com/images/mgl/8x0Xv/s1/2021-lamborghini-aventador-svj.jpg"
  },
  {
    name: "Ferrari SF90 Stradale",
    type: "Supercar",
    image: "https://cdn.motor1.com/images/mgl/lAA1e/s1/ferrari-sf90-stradale.jpg"
  },
  {
    name: "Rolls-Royce Phantom",
    type: "Luxury",
    image: "https://cdn.motor1.com/images/mgl/Wlqqk/s1/2022-rolls-royce-phantom.jpg"
  },
  {
    name: "Toyota Supra MK4",
    type: "JDM",
    image: "https://cdn.motor1.com/images/mgl/0ANXe/s1/toyota-supra-a80.jpg"
  },
  {
    name: "Bugatti Chiron",
    type: "Hypercar",
    image: "https://cdn.motor1.com/images/mgl/0ANkb/s1/bugatti-chiron.jpg"
  }
];

export default function YaveshlyGarage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-red-500 text-center mb-10">
        Yaveshly Garage 🚗🔥
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cars.map((car, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="bg-zinc-900 border border-red-600">
              <CardContent className="p-2">
                <img
                  src={car.image}
                  alt={car.name}
                  className="rounded-xl w-full h-48 object-cover"
                />
                <div className="mt-4 text-center">
                  <h2 className="text-xl font-semibold text-red-400">
                    {car.name}
                  </h2>
                  <p className="text-zinc-300">{car.type}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
