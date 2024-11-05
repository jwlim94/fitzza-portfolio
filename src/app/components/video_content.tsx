import clsx from "clsx";
import { motion } from "framer-motion";

interface VideoContentProps {
  name: string;
  isMobile: boolean;
}

export default function VideoContent({ name, isMobile }: VideoContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0.2, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <video
        src={`https://fitzza-portfolio.vercel.app/videos/${name}.m4v`}
        className={clsx(
          "rounded-3xl shadow-card w-auto aspect-[332/720] object-cover",
          isMobile ? "h-[70vh]" : "h-[80vh]"
        )}
        loop
        muted
        playsInline
        autoPlay
        preload="auto"
        poster="https://fitzza-portfolio.vercel.app/images/loading.png"
      />
    </motion.div>
  );
}
