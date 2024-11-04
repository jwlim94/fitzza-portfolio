"use client";

import useMediaQuery from "@/hooks/useMediaQuery";
import clsx from "clsx";
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

  // Dummy feature data with placeholder images or text for the GIFs
  const features = [
    {
      id: "0",
      name: "About us",
      gif: "/gifs/test.gif",
      content: (
        <div className="flex-grow flex flex-col items-center justify-center">
          <img
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
                <img
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
                <img
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
                <img
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
                    <img
                      className="rounded-full hover:scale-110"
                      src="/images/zino.png"
                      alt="zino"
                      width={32}
                      height={32}
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
                    <img
                      className="rounded-full"
                      src="/images/jongwoo-lim.jpg"
                      alt="Jongwoo Lim"
                      width={32}
                      height={32}
                    />
                  </Link>
                </div>
                <div className="self-center">
                  <Link
                    href="https://www.linkedin.com/in/sean-j-park/"
                    target="_blank"
                  >
                    <img
                      className="rounded-full hover:scale-110"
                      src="/images/sungjin-park.jpeg"
                      alt="Sungjin Park"
                      width={32}
                      height={32}
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
                    <img
                      className="rounded-full"
                      src="/images/jongwoo-lim.jpg"
                      alt="Jongwoo Lim"
                      width={32}
                      height={32}
                    />
                  </Link>
                </div>
                <div className="self-center">
                  <Link href="https://www.github.com/sjpsean" target="_blank">
                    <img
                      className="rounded-full hover:scale-110"
                      src="/images/sungjin-park.jpeg"
                      alt="Sungjin Park"
                      width={32}
                      height={32}
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
        <video
          src="https://fitzza-portfolio.vercel.app/videos/verify.mp4"
          className="rounded-3xl shadow-lg h-[80vh] w-auto aspect-[332/720]"
          muted
          playsInline
          autoPlay
          preload="auto"
          poster="https://fitzza-portfolio.vercel.app/images/loading.png"
        />
      ),
    },
    {
      id: "2",
      name: "Register",
      content: (
        <video
          src="https://fitzza-portfolio.vercel.app/videos/register.mp4"
          className="rounded-3xl shadow-lg h-[80vh] w-auto aspect-[332/720]"
          muted
          playsInline
          autoPlay
          preload="auto"
          poster="https://fitzza-portfolio.vercel.app/images/loading.png"
        />
      ),
    },
    {
      id: "3",
      name: "Listings",
      content: (
        <video
          src="https://fitzza-portfolio.vercel.app/videos/listings.mp4"
          className="rounded-3xl shadow-lg h-[80vh] w-auto aspect-[332/720]"
          muted
          playsInline
          autoPlay
          preload="auto"
          poster="https://fitzza-portfolio.vercel.app/images/loading.png"
        />
      ),
    },
    {
      id: "4",
      name: "Neighbor",
      content: (
        <video
          src="https://fitzza-portfolio.vercel.app/videos/neighbor.mp4"
          className="rounded-3xl shadow-lg h-[80vh] w-auto aspect-[332/720]"
          muted
          playsInline
          autoPlay
          preload="auto"
          poster="https://fitzza-portfolio.vercel.app/images/loading.png"
        />
      ),
    },
    {
      id: "5",
      name: "Search",
      content: (
        <video
          src="https://fitzza-portfolio.vercel.app/videos/search.mp4"
          className="rounded-3xl shadow-lg h-[80vh] w-auto aspect-[332/720]"
          muted
          playsInline
          autoPlay
          preload="auto"
          poster="https://fitzza-portfolio.vercel.app/images/loading.png"
        />
      ),
    },
    {
      id: "6",
      name: "Favorite",
      content: (
        <video
          src="https://fitzza-portfolio.vercel.app/videos/favorite.mp4"
          className="rounded-3xl shadow-lg h-[80vh] w-auto aspect-[332/720]"
          muted
          playsInline
          autoPlay
          preload="auto"
          poster="https://fitzza-portfolio.vercel.app/images/loading.png"
        />
      ),
    },
    {
      id: "7",
      name: "Chat",
      content: (
        <video
          src="https://fitzza-portfolio.vercel.app/videos/chat.mp4"
          className="rounded-3xl shadow-lg h-[80vh] w-auto aspect-[332/720]"
          muted
          playsInline
          autoPlay
          preload="auto"
          poster="https://fitzza-portfolio.vercel.app/images/loading.png"
        />
      ),
    },
    {
      id: "8",
      name: "Profile",
      content: (
        <video
          src="https://fitzza-portfolio.vercel.app/videos/profile.mp4"
          className="rounded-3xl shadow-lg h-[80vh] w-auto aspect-[332/720]"
          muted
          playsInline
          autoPlay
          preload="auto"
          poster="https://fitzza-portfolio.vercel.app/images/loading.png"
        />
      ),
    },
    {
      id: "9",
      name: "Create",
      content: (
        <video
          src="https://fitzza-portfolio.vercel.app/videos/create.mp4"
          className="rounded-3xl shadow-lg h-[80vh] w-auto aspect-[332/720]"
          muted
          playsInline
          autoPlay
          preload="auto"
          poster="https://fitzza-portfolio.vercel.app/images/loading.png"
        />
      ),
    },
    {
      id: "10",
      name: "🚧 Rewards",
      gif: "/images/not-ready.png",
      content: (
        <img
          src="/images/not-ready.png"
          alt="Not Ready"
          width={200}
          height={200}
          className="rounded-lg h-[30vh] w-auto"
        />
      ),
    },
    {
      id: "11",
      name: "🚧 Admin",
      gif: "/images/not-ready.png",
      content: (
        <img
          src="/images/not-ready.png"
          alt="Not Ready"
          width={200}
          height={200}
          className="rounded-lg h-[30vh] w-auto"
        />
      ),
    },
    {
      id: "12",
      name: "🚧 Analytics",
      gif: "/images/not-ready.png",
      content: (
        <img
          src="/images/not-ready.png"
          alt="Not Ready"
          width={200}
          height={200}
          className="rounded-lg h-[30vh] w-auto"
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
            features[currentIndex!].content
          ) : (
            <img
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
            <img
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
                  <img
                    className="rounded-full hover:scale-110"
                    src="/images/zino.png"
                    alt="zino"
                    width={32}
                    height={32}
                  />
                </Link>
              </div>
              <div className="w-12" />
            </div>
          </div>
          {/* GitHub */}
          <div className="relative group">
            <img
              className="cursor-pointer z-20 relative hover:scale-110"
              src="/images/github-logo.png"
              alt="GitHub logo"
              width={32}
              height={32}
            />
            <div className="justify-around absolute -right-2 -bottom-2 w-40 h-12 bg-gray-100 rounded-lg z-10 hidden group-hover:flex">
              <div className="self-center ml-2">
                <Link href="https://www.github.com/sjpsean" target="_blank">
                  <img
                    className="rounded-full hover:scale-110"
                    src="/images/sungjin-park.jpeg"
                    alt="Sungjin Park"
                    width={32}
                    height={32}
                  />
                </Link>
              </div>
              <div className="self-center ml-2">
                <Link href="https://www.github.com/jwlim94" target="_blank">
                  <img
                    className="rounded-full hover:scale-110"
                    src="/images/jongwoo-lim.jpg"
                    alt="Jongwoo Lim"
                    width={32}
                    height={32}
                  />
                </Link>
              </div>
              <div className="w-12" />
            </div>
          </div>
          {/* LinkedIn */}
          <div className="relative group">
            <img
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
                  <img
                    className="rounded-full hover:scale-110"
                    src="/images/sungjin-park.jpeg"
                    alt="Sungjin Park"
                    width={32}
                    height={32}
                  />
                </Link>
              </div>
              <div className="self-center ml-2">
                <Link
                  href="https://www.linkedin.com/in/jwlim94/"
                  target="_blank"
                >
                  <img
                    className="rounded-full hover:scale-110"
                    src="/images/jongwoo-lim.jpg"
                    alt="Jongwoo Lim"
                    width={32}
                    height={32}
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
