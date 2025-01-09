// import Image from "next/image";

import Banner from "@/components/banner.client";
import Card from "@/components/card.server";
import { fetchCoffeeStores } from "@/lib/coffee.stores";
import { CoffeeStoreType } from "@/types";
import Link from "next/link";



async function getData() {
  return await fetchCoffeeStores();
}

export default async function Home() {
  const coffeeStores = await getData();

  return (
    <main className="mx-auto mt-10 max-w-6xl px-4">
      <Banner />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6">
        {coffeeStores.map((coffeeStore: CoffeeStoreType) => (
          <Card
            key={`${coffeeStore.id}`}
            name={coffeeStore.name}
            imgUrl={coffeeStore.imgUrl}
            href={`/coffee-store/${coffeeStore.id}`}
          />
        ))}
      </div>
    </main>
  );
}
