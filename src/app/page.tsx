"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  // const audioRef = useRef<HTMLAudioElement | null>(null);

  // useEffect(() => {
  //   // Preload the audio file on component mount
  //   if (audioRef.current) {
  //     audioRef.current.load();
  //   }
  // }, []);

  // Dummy feature data with placeholder images or text for the GIFs
  const features = [
    { id: "1", name: "Verify", gif: "/gifs/test.gif" },
    { id: "2", name: "Register", gif: "/gifs/test.gif" },
    { id: "3", name: "Listings", gif: "/gifs/test.gif" },
    { id: "4", name: "Neighbor", gif: "/gifs/test.gif" },
    { id: "5", name: "Search", gif: "/gifs/test.gif" },
    { id: "6", name: "Favorite", gif: "/gifs/test.gif" },
    { id: "7", name: "Chat", gif: "/gifs/test.gif" },
    { id: "8", name: "Profile", gif: "/gifs/test.gif" },
    { id: "9", name: "Create", gif: "/gifs/test.gif" },
    { id: "10", name: "🚧 Rewards", gif: "/images/not-ready.png" },
    { id: "11", name: "🚧 Admin", gif: "/images/not-ready.png" },
    { id: "12", name: "🚧 Analytics", gif: "/images/not-ready.png" },
  ];

  // const handleMouseEnter = () => {
  //   if (audioRef.current) {
  //     audioRef.current.currentTime = 0; // Rewind to the start
  //     audioRef.current.volume = 0.2;
  //     audioRef.current.play().catch((error) => {
  //       console.error("Error playing sound:", error);
  //     });
  //   }
  // };

  return (
    <div className="flex min-h-screen p-10">
      {/* <audio ref={audioRef} src="/sounds/click.wav" preload="auto" autoPlay /> */}
      <div className="flex relative w-full justify-center items-center">
        {/* Feature List */}
        <div className="grid w-32">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative h-12 flex cursor-pointer items-center"
              onMouseEnter={() => {
                setHoveredFeature(feature.id);
                // handleMouseEnter();
              }}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              {/* Background circle on hover */}
              {hoveredFeature === feature.id && (
                <div className="absolute flex items-center -left-4">
                  <div className="w-32 h-8 bg-white rounded-full shadow-lg"></div>
                </div>
              )}
              <span
                className={clsx(
                  "z-10",
                  hoveredFeature === feature.id ? "text-black" : ""
                )}
              >
                {feature.name}
              </span>
            </div>
          ))}
        </div>

        {/* GIF Display Area */}
        <div className="flex items-center justify-center w-1/2">
          {hoveredFeature ? (
            <Image
              src={
                features.find((feature) => feature.id === hoveredFeature)
                  ?.gif || ""
              }
              alt="Feature GIF"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          ) : (
            <Image
              src="/images/default.png"
              alt="Default"
              width={200}
              height={200}
            />
          )}
        </div>

        {/* GIF */}
        <div></div>

        {/* Developer Section */}
        <div className="flex-col absolute right-0 bottom-0 space-y-4">
          {/* Instagram */}
          <div className="relative group">
            <Image
              className="cursor-pointer z-20 relative hover:scale-110"
              src="/images/instagram-logo.png"
              alt="Instagram logo"
              width={32}
              height={32}
            />
            <div className="justify-around absolute -right-2 -bottom-2 w-28 h-12 bg-gray-100 rounded-lg z-10 hidden group-hover:flex">
              <div className="self-center ml-2">
                <Link
                  href="https://www.instagram.com/fitzza.xyz/profilecard/"
                  target="_blank"
                >
                  <Image
                    className="rounded-full hover:scale-110"
                    src="/images/zino.png"
                    alt="zino"
                    width={32}
                    height={32}
                    quality={100}
                  />
                </Link>
              </div>
              <div className="w-12" />
            </div>
          </div>
          {/* GitHub */}
          <div className="relative group">
            <Image
              className="cursor-pointer z-20 relative hover:scale-110"
              src="/images/github-logo.png"
              alt="GitHub logo"
              width={32}
              height={32}
            />
            <div className="justify-around absolute -right-2 -bottom-2 w-40 h-12 bg-gray-100 rounded-lg z-10 hidden group-hover:flex">
              <div className="self-center ml-2">
                <Link href="https://www.github.com/sjpsean" target="_blank">
                  <Image
                    className="rounded-full hover:scale-110"
                    src="/images/sungjin-park.jpeg"
                    alt="Sungjin Park"
                    width={32}
                    height={32}
                    quality={100}
                  />
                </Link>
              </div>
              <div className="self-center ml-2">
                <Link href="https://www.github.com/jwlim94" target="_blank">
                  <Image
                    className="rounded-full hover:scale-110"
                    src="/images/jongwoo-lim.jpg"
                    alt="Jongwoo Lim"
                    width={32}
                    height={32}
                    quality={100}
                  />
                </Link>
              </div>
              <div className="w-12" />
            </div>
          </div>
          {/* LinkedIn */}
          <div className="relative group">
            <Image
              className="cursor-pointer relative z-20 hover:scale-110"
              src="/images/linkedin-logo.png"
              alt="LinkedIn logo"
              width={32}
              height={32}
            />
            <div className="justify-around absolute -right-2 -bottom-2 w-40 h-12 bg-gray-100 rounded-lg z-10 hidden group-hover:flex">
              <div className="self-center ml-2">
                <Link
                  href="https://www.linkedin.com/in/sean-j-park/"
                  target="_blank"
                >
                  <Image
                    className="rounded-full hover:scale-110"
                    src="/images/sungjin-park.jpeg"
                    alt="Sungjin Park"
                    width={32}
                    height={32}
                    quality={100}
                  />
                </Link>
              </div>
              <div className="self-center ml-2">
                <Link
                  href="https://www.linkedin.com/in/jwlim94/"
                  target="_blank"
                >
                  <Image
                    className="rounded-full hover:scale-110"
                    src="/images/jongwoo-lim.jpg"
                    alt="Jongwoo Lim"
                    width={32}
                    height={32}
                    quality={100}
                  />
                </Link>
              </div>
              <div className="w-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
