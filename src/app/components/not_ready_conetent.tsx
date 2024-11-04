import { motion } from "framer-motion";

export default function NotReadyContent() {
  return (
    <motion.div
      initial={{ opacity: 0.2, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src="/images/not-ready.png"
        alt="Not Ready"
        width={200}
        height={200}
        className="rounded-lg h-[30vh] w-auto"
      />
    </motion.div>
  );
}
