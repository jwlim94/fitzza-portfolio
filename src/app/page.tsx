"use client";

import useMediaQuery from "@/hooks/useMediaQuery";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import VideoContent from "./components/video_content";
import NotReadyContent from "./components/not_ready_conetent";

export default function Home() {
  const [isInstagramClicked, setIsInstagramClicked] = useState<boolean>(false);
  const [isGithubClicked, setIsGithubClicked] = useState<boolean>(false);
  const [isLinkedinClicked, setIsLinkedinClicked] = useState<boolean>(true);
  const [isInstagramHovered, setIsInstagramHovered] = useState<boolean>(false);
  const [isGithubHovered, setIsGithubHovered] = useState<boolean>(false);
  const [isLinkedinHovered, setIsLinkedinHovered] = useState<boolean>(false);
  const [currentIndex, setcurrentIndex] = useState<number>(0);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const features = [
    {
      id: "0",
      name: "About us",
      content: isMobile ? (
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
              <motion.div
                className="flex bg-gray-200 h-12 mt-7 px-2 rounded-full z-10"
                initial={{ opacity: 0.2, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
              >
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
              </motion.div>
            </div>
          )}

          {isLinkedinClicked && (
            <div>
              <motion.div
                className="flex bg-gray-200 h-12 mt-7 px-4 gap-x-4 rounded-full z-10"
                initial={{ opacity: 0.2, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
              >
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
              </motion.div>
            </div>
          )}

          {isGithubClicked && (
            <div>
              <motion.div
                className="flex bg-gray-200 h-12 mt-7 px-4 gap-x-4 rounded-full z-10"
                initial={{ opacity: 0.2, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
              >
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
              </motion.div>
            </div>
          )}
        </div>
      ) : (
        // this parent div prevents child image from flashing in size when loading
        <div className="w-[200px] h-[200px] flex items-center justify-center">
          <img
            src="/images/default.png"
            alt="Default"
            width={200}
            height={200}
          />
        </div>
      ),
    },
    {
      id: "1",
      name: "Verify",
      content: <VideoContent name="verify" />,
    },
    {
      id: "2",
      name: "Register",
      content: <VideoContent name="register" />,
    },
    {
      id: "3",
      name: "Listings",
      content: <VideoContent name="listings" />,
    },
    {
      id: "4",
      name: "Neighbor",
      content: <VideoContent name="neighbor" />,
    },
    {
      id: "5",
      name: "Search",
      content: <VideoContent name="search" />,
    },
    {
      id: "6",
      name: "Favorite",
      content: <VideoContent name="favorite" />,
    },
    {
      id: "7",
      name: "Chat",
      content: <VideoContent name="chat" />,
    },
    {
      id: "8",
      name: "Profile",
      content: <VideoContent name="profile" />,
    },
    {
      id: "9",
      name: "Create",
      content: <VideoContent name="create" />,
    },
    {
      id: "10",
      name: "🚧 Rewards",
      content: <NotReadyContent />,
    },
    {
      id: "11",
      name: "🚧 Admin",
      content: <NotReadyContent />,
    },
    {
      id: "12",
      name: "🚧 Analytics",
      content: <NotReadyContent />,
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
              setcurrentIndex(currentIndex - 1);
            }}
          >
            ◀︎
          </div>
        ) : (
          <div className="p-6" />
        )}
        <div className="text-xl">{features[currentIndex].name}</div>
        {currentIndex !== features.length - 1 ? (
          <div
            className="cursor-pointer text-xl p-6"
            onClick={() => {
              if (currentIndex === features.length - 1) return;
              setcurrentIndex(currentIndex + 1);
            }}
          >
            ▶︎
          </div>
        ) : (
          <div className="p-6" />
        )}
      </div>
      <div className="flex flex-grow items-center justify-center mb-12">
        {features[currentIndex].content}
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
              <motion.div
                key={feature.id}
                className="relative h-10 flex cursor-pointer items-center hover:scale-105"
                onMouseEnter={() => setcurrentIndex(parseInt(feature.id))}
                onMouseLeave={() => setcurrentIndex(0)}
                onMouseMove={(e) => {
                  // Update x and y based on mouse position relative to the element
                  x.set(
                    e.clientX - e.currentTarget.getBoundingClientRect().left
                  );
                  y.set(
                    e.clientY - e.currentTarget.getBoundingClientRect().top
                  );
                }}
                onHoverEnd={() => {
                  x.set(0);
                  y.set(0);
                }}
              >
                {/* Background circle on hover */}
                {currentIndex === parseInt(feature.id) && (
                  <div className="absolute flex items-center -left-4">
                    <div className="w-32 h-10 bg-white rounded-full shadow-lg"></div>
                  </div>
                )}
                <span
                  className={clsx(
                    "z-10",
                    currentIndex === parseInt(feature.id)
                      ? "text-black font-semibold"
                      : ""
                  )}
                >
                  {feature.name}
                </span>
              </motion.div>
            ))}
        </div>

        {/* Video Display Area */}
        <motion.div
          className="flex items-center justify-center w-1/2 gap-y-2"
          initial={{ opacity: 0.2, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ x, y }}
        >
          {features[currentIndex].content}
        </motion.div>

        {/* Developer Section */}
        <div className="flex-col absolute right-0 bottom-0 space-y-4">
          {/* Instagram */}
          <div
            className="relative group"
            onMouseEnter={() => setIsInstagramHovered(true)}
            onMouseLeave={() => setIsInstagramHovered(false)}
          >
            <img
              className="cursor-pointer z-20 relative hover:scale-110"
              src="/images/instagram-logo.png"
              alt="Instagram logo"
              width={32}
              height={32}
            />
            {/* AnimatePresence Wrapper for Exit Animation */}
            <AnimatePresence>
              {isInstagramHovered && (
                <motion.div
                  className="justify-around absolute -right-2 -bottom-2 w-28 h-12 bg-gray-100 rounded-lg z-10 flex"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* GitHub */}
          <div
            className="relative group"
            onMouseEnter={() => setIsGithubHovered(true)}
            onMouseLeave={() => setIsGithubHovered(false)}
          >
            <img
              className="cursor-pointer z-20 relative hover:scale-110"
              src="/images/github-logo.png"
              alt="GitHub logo"
              width={32}
              height={32}
            />
            {/* AnimatePresence Wrapper for Exit Animation */}
            <AnimatePresence>
              {isGithubHovered && (
                <motion.div
                  className="justify-around absolute -right-2 -bottom-2 w-40 h-12 bg-gray-100 rounded-lg z-10 flex"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* LinkedIn */}
          <div
            className="relative group"
            onMouseEnter={() => setIsLinkedinHovered(true)}
            onMouseLeave={() => setIsLinkedinHovered(false)}
          >
            <img
              className="cursor-pointer relative z-20 hover:scale-110 rounded-lg overflow-hidden"
              src="/images/linkedin-logo.png"
              alt="LinkedIn logo"
              width={32}
              height={32}
            />
            {/* AnimatePresence Wrapper for Exit Animation */}
            <AnimatePresence>
              {isLinkedinHovered && (
                <motion.div
                  className="justify-around absolute -right-2 -bottom-2 w-40 h-12 bg-gray-100 rounded-lg z-10 flex"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
