import { motion } from "framer-motion";

const AchievementCard = ({ title, subtitle, proofLink }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
      className="group relative bg-[#020617]/80 border border-[#14B8A6]/20 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-2xl transition"
    >
      <h4 className="font-semibold text-[#E5E7EB] leading-snug">
        {title}
      </h4>

      <p className="text-sm text-[#94A3B8] mt-1">
        {subtitle}
      </p>

      {/* View proof link (appears on hover) */}
      <a
        href={proofLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-4 bottom-3 text-sm font-semibold text-[#14B8A6] opacity-0 group-hover:opacity-100 transition"
      >
        View Achievement →
      </a>
    </motion.div>
  );
};

export default AchievementCard;
