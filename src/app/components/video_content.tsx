import { motion } from "framer-motion";

interface VideoContentProps {
  name: string;
}

export default function VideoContent({ name }: VideoContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0.2, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <video
        src={`https://fitzza-portfolio.vercel.app/videos/${name}.mp4`}
        className="rounded-3xl shadow-card h-[80vh] w-auto aspect-[332/720] object-cover"
        muted
        playsInline
        autoPlay
        preload="auto"
        poster="https://fitzza-portfolio.vercel.app/images/loading.png"
      />
    </motion.div>
  );
}
