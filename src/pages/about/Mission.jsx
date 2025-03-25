"use client";
import { lazy, Suspense } from "react";
const WorldMap = lazy(() => import("../../ui/world-map"));
export default function Mission() {
  return (
    <div className=" pt-4 dark:bg-gray-950 bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Vision&nbsp;
        </p>
        <p className="text-sm md:text-lg text-neutral-500 w-[90%] lg:w-[80%] mx-auto py-4">
          PhoeTech envisions a future where every D2C brand not only survives
          but thrives in the ever-evolving digital marketplace. We strive to be
          the driving force behind the success stories, pushing the boundaries
          of what's possible and redefining industry standards.
        </p>
      </div>
      <Suspense
        fallback={
          <div className="text-white text-center text-bold text-3xl">
            World Map is loading...
          </div>
        }
      >
        <WorldMap
          dots={[
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
              }, // Alaska (Fairbanks)
              end: {
                lat: 34.0522,
                lng: -118.2437,
              }, // Los Angeles
            },
            {
              start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
              end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            },
            {
              start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              end: { lat: 51.5074, lng: -0.1278 }, // Lisbon
            },
            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: 12.9716, lng: 77.5946 }, // New Delhi
            },
            {
              start: { lat: 12.9716, lng: 77.5946 }, // New Delhi
              end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
            },
            {
              start: { lat: 12.9716, lng: 77.5946 }, // New Delhi
              end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
            },
          ]}
        />
      </Suspense>
    </div>
  );
}
