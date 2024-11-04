"use client";

import useMediaQuery from "@/hooks/useMediaQuery";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const [isInstagramClicked, setIsInstagramClicked] = useState<boolean | null>(
    null
  );
  const [isGithubClicked, setIsGithubClicked] = useState<boolean | null>(null);
  const [isLinkedinClicked, setIsLinkedinClicked] = useState<boolean | null>(
    true
  );
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [currentIndex, setcurrentIndex] = useState<number | null>(0);
  const [count, setCount] = useState<number>(0);

  // Dummy feature data with placeholder images or text for the GIFs
  const features = [
    {
      id: "0",
      name: "About us",
      gif: "/gifs/test.gif",
      content: (
        <div className="flex-grow flex flex-col items-center justify-center">
          <Image
            src="/images/default.png"
            alt="Default"
            width={200}
            height={200}
          />

          {/* Developer Section */}
          <div className="flex gap-x-8 mt-16">
            {/* Instagram */}
            <div className="flex relative">
              {/* Background circle on click */}
              {isInstagramClicked && (
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-gray-200 rounded-full shadow-lg z-10"></div>
              )}
              <button
                className="z-20"
                onClick={() => {
                  setIsInstagramClicked(true);
                  setIsGithubClicked(false);
                  setIsLinkedinClicked(false);
                }}
              >
                <Image
                  src="/images/instagram-logo.png"
                  alt="Instagram logo"
                  width={32}
                  height={32}
                />
              </button>
            </div>

            {/* Linkedin */}
            <div className="flex relative">
              {/* Background circle on click */}
              {isLinkedinClicked && (
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-gray-200 rounded-full shadow-lg z-10"></div>
              )}
              <button
                className="z-20 rounded-lg overflow-hidden"
                onClick={() => {
                  setIsInstagramClicked(false);
                  setIsGithubClicked(false);
                  setIsLinkedinClicked(true);
                }}
              >
                <Image
                  src="/images/linkedin-logo.png"
                  alt="LinkedIn logo"
                  width={32}
                  height={32}
                />
              </button>
            </div>

            {/* Github */}
            <div className="flex relative">
              {/* Background circle on click */}
              {isGithubClicked && (
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-gray-200 rounded-full shadow-lg z-10"></div>
              )}
              <button
                className="z-20"
                onClick={() => {
                  setIsInstagramClicked(false);
                  setIsGithubClicked(true);
                  setIsLinkedinClicked(false);
                }}
              >
                <Image
                  src="/images/github-logo.png"
                  alt="GitHub logo"
                  width={32}
                  height={32}
                />
              </button>
            </div>
          </div>

          {/* developers images and url */}
          {isInstagramClicked && (
            <div>
              <div className="flex bg-gray-200 h-12 mt-7 px-2 rounded-full z-10">
                <div className="self-center">
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
              </div>
            </div>
          )}

          {isLinkedinClicked && (
            <div>
              <div className="flex bg-gray-200 h-12 mt-7 px-4 gap-x-4 rounded-full z-10">
                <div className="self-center">
                  <Link
                    href="https://www.linkedin.com/in/jwlim94/"
                    target="_blank"
                  >
                    <Image
                      className="rounded-full"
                      src="/images/jongwoo-lim.jpg"
                      alt="Jongwoo Lim"
                      width={32}
                      height={32}
                      quality={100}
                    />
                  </Link>
                </div>
                <div className="self-center">
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
              </div>
            </div>
          )}

          {isGithubClicked && (
            <div>
              <div className="flex bg-gray-200 h-12 mt-7 px-4 gap-x-4 rounded-full z-10">
                <div className="self-center">
                  <Link href="https://www.github.com/jwlim94" target="_blank">
                    <Image
                      className="rounded-full"
                      src="/images/jongwoo-lim.jpg"
                      alt="Jongwoo Lim"
                      width={32}
                      height={32}
                      quality={100}
                    />
                  </Link>
                </div>
                <div className="self-center">
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
              </div>
            </div>
          )}
        </div>
      ),
    },
    {
      id: "1",
      name: "Verify",
      content: (
        // <Image
        //   src="https://fitzza-portfolio.vercel.app/gifs/verify.gif"
        //   alt="Verify GIF"
        //   width={0}
        //   height={0}
        //   className="rounded-lg shadow-lg h-[80vh] w-auto"
        //   unoptimized={true}
        // />
        <img
          src="https://fitzza-portfolio.vercel.app/gifs/verify.gif"
          alt="Verify GIF"
          className="rounded-lg shadow-lg h-[80vh] w-auto"
        />
      ),
    },
    {
      id: "2",
      name: "Register",
      content: (
        // <Image
        //   src="https://fitzza-portfolio.vercel.app/gifs/register.gif"
        //   alt="Register GIF"
        //   width={0}
        //   height={0}
        //   className="rounded-lg shadow-lg h-[80vh] w-auto"
        //   unoptimized={true}
        // />
        <img
          src="https://fitzza-portfolio.vercel.app/gifs/register.gif"
          alt="Verify GIF"
          className="rounded-lg shadow-lg h-[80vh] w-auto"
        />
      ),
    },
    {
      id: "3",
      name: "Listings",
      content: (
        // <Image
        //   src="https://fitzza-portfolio.vercel.app/gifs/listings.gif"
        //   alt="Listings GIF"
        //   width={0}
        //   height={0}
        //   className="rounded-lg shadow-lg h-[80vh] w-auto"
        //   unoptimized={true}
        // />
        <img
          src="https://fitzza-portfolio.vercel.app/gifs/listings.gif"
          alt="Verify GIF"
          className="rounded-lg shadow-lg h-[80vh] w-auto"
        />
      ),
    },
    {
      id: "4",
      name: "Neighbor",
      content: (
        // <Image
        //   src="https://fitzza-portfolio.vercel.app/gifs/neighbor.gif"
        //   alt="Neighbor GIF"
        //   width={0}
        //   height={0}
        //   className="rounded-lg shadow-lg h-[80vh] w-auto"
        //   unoptimized={true}
        // />
        <img
          src="https://fitzza-portfolio.vercel.app/gifs/neighbor.gif"
          alt="Verify GIF"
          className="rounded-lg shadow-lg h-[80vh] w-auto"
        />
      ),
    },
    {
      id: "5",
      name: "Search",
      content: (
        // <Image
        //   src="https://fitzza-portfolio.vercel.app/gifs/search.gif"
        //   alt="Search GIF"
        //   width={0}
        //   height={0}
        //   className="rounded-lg shadow-lg h-[80vh] w-auto"
        //   unoptimized={true}
        // />
        <img
          src="https://fitzza-portfolio.vercel.app/gifs/search.gif"
          alt="Verify GIF"
          className="rounded-lg shadow-lg h-[80vh] w-auto"
        />
      ),
    },
    {
      id: "6",
      name: "Favorite",
      content: (
        // <Image
        //   src="https://fitzza-portfolio.vercel.app/gifs/favorite.gif"
        //   alt="Search GIF"
        //   width={0}
        //   height={0}
        //   className="rounded-lg shadow-lg h-[80vh] w-auto"
        //   unoptimized={true}
        // />
        <img
          src="https://fitzza-portfolio.vercel.app/gifs/favorite.gif"
          alt="Verify GIF"
          className="rounded-lg shadow-lg h-[80vh] w-auto"
        />
      ),
    },
    {
      id: "7",
      name: "Chat",
      content: (
        // <Image
        //   src="https://fitzza-portfolio.vercel.app/gifs/chat.gif"
        //   alt="Chat GIF"
        //   width={0}
        //   height={0}
        //   className="rounded-lg shadow-lg h-[80vh] w-auto"
        //   unoptimized={true}
        // />
        <img
          src="https://fitzza-portfolio.vercel.app/gifs/chat.gif"
          alt="Verify GIF"
          className="rounded-lg shadow-lg h-[80vh] w-auto"
        />
      ),
    },
    {
      id: "8",
      name: "Profile",
      content: (
        // <Image
        //   src="https://fitzza-portfolio.vercel.app/gifs/profile.gif"
        //   alt="Profile GIF"
        //   width={0}
        //   height={0}
        //   className="rounded-lg shadow-lg h-[80vh] w-auto"
        //   unoptimized={true}
        // />
        <img
          src="https://fitzza-portfolio.vercel.app/gifs/profile.gif"
          alt="Verify GIF"
          className="rounded-lg shadow-lg h-[80vh] w-auto"
          id={count.toString()}
        />
      ),
    },
    {
      id: "9",
      name: "Create",
      content: (
        // <Image
        //   src="https://fitzza-portfolio.vercel.app/gifs/create.gif"
        //   alt="Create GIF"
        //   width={0}
        //   height={0}
        //   className="rounded-lg shadow-lg h-[80vh] w-auto"
        //   unoptimized={true}
        // />
        // <img
        //   src="https://fitzza-portfolio.vercel.app/gifs/create.gif"
        //   alt="Verify GIF"
        //   className="rounded-lg shadow-lg h-[80vh] w-auto"
        //   // id={count.toString()}
        // />
        <video
          src="https://fitzza-portfolio.vercel.app/videos/create.mp4"
          // src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          className="rounded-lg shadow-lg h-[80vh] w-auto"
          muted
          playsInline
          autoPlay
        />
      ),
    },
    {
      id: "10",
      name: "🚧 Rewards",
      gif: "/images/not-ready.png",
      content: (
        <Image
          src="/images/not-ready.png"
          alt="Not Ready"
          width={200}
          height={200}
          className="rounded-lg shadow-lg h-[30vh] w-auto"
        />
      ),
    },
    {
      id: "11",
      name: "🚧 Admin",
      gif: "/images/not-ready.png",
      content: (
        <Image
          src="/images/not-ready.png"
          alt="Not Ready"
          width={200}
          height={200}
          className="rounded-lg shadow-lg h-[30vh] w-auto"
        />
      ),
    },
    {
      id: "12",
      name: "🚧 Analytics",
      gif: "/images/not-ready.png",
      content: (
        <Image
          src="/images/not-ready.png"
          alt="Not Ready"
          width={200}
          height={200}
          className="rounded-lg shadow-lg h-[30vh] w-auto"
        />
      ),
    },
  ];

  return isMobile ? (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex justify-between items-center px-16 pt-6">
        {currentIndex !== 0 ? (
          <div
            className="cursor-pointer text-xl p-6"
            onClick={() => {
              if (currentIndex === 0) return;
              setcurrentIndex(currentIndex! - 1);
            }}
          >
            ◀︎
          </div>
        ) : (
          <div className="p-6" />
        )}
        <div className="text-xl">{features[currentIndex!].name}</div>
        {currentIndex !== features.length - 1 ? (
          <div
            className="cursor-pointer text-xl p-6"
            onClick={() => {
              if (currentIndex === features.length - 1) return;
              setcurrentIndex(currentIndex! + 1);
            }}
          >
            ▶︎
          </div>
        ) : (
          <div className="p-6" />
        )}
      </div>
      <div className="flex flex-grow items-center justify-center mb-12">
        {features[currentIndex!].content}
      </div>
    </div>
  ) : (
    <div className="flex min-h-screen p-10">
      <div className="flex relative w-full justify-center items-center">
        {/* Feature List */}
        <div className="grid w-32 gap-y-2">
          {features
            .filter((feature) => feature.id !== "0")
            .map((feature) => (
              <div
                key={feature.id}
                className="relative h-10 flex cursor-pointer items-center"
                onMouseEnter={() => {
                  setHoveredFeature(feature.id);
                  setcurrentIndex(parseInt(feature.id));
                }}
                onMouseLeave={() => {
                  setHoveredFeature(null);
                  setcurrentIndex(null);
                  setCount(count + 1);
                }}
              >
                {/* Background circle on hover */}
                {hoveredFeature === feature.id && (
                  <div className="absolute flex items-center -left-4">
                    <div className="w-32 h-10 bg-white rounded-full shadow-lg"></div>
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
        <div className="flex items-center justify-center w-1/2 gap-y-2">
          {hoveredFeature ? (
            // <Image
            //   src={
            //     features.find((feature) => feature.id === hoveredFeature)
            //       ?.gif || ""
            //   }
            //   alt="Feature GIF"
            //   width={340}
            //   height={340}
            //   className="rounded-lg shadow-lg"
            //   unoptimized={true}
            // />
            features[currentIndex!].content
          ) : (
            <Image
              src="/images/default.png"
              alt="Default"
              width={200}
              height={200}
            />
          )}
        </div>

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
              className="cursor-pointer relative z-20 hover:scale-110 rounded-lg overflow-hidden"
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
