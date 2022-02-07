import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { places } from "../data/places";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>fukurou.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="text-center text-3xl font-bold">fukurou.</h1>
      <div className="container mx-auto my-20 max-w-5xl">
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {places.map((place) => (
            <li key={place.id} className="max-w-md  rounded  shadow">
              <div className="flex flex-col space-y-2 p-5">
                <p className="text-sm text-blue-500">{place.category}</p>
                <p className="text-lg font-medium">{place.title}</p>
                <p className="text-gray-600">{place.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
