import { motion } from "framer-motion";

const AchievementCard = ({ title, subtitle, proofLink, index }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
      className="group relative achievement-card backdrop-blur-sm p-4 shadow-lg transition"
    >
      <div className="flex items-start gap-3">
        <span className="flex-shrink-0 w-7 h-7 rounded-full achievement-index text-sm flex items-center justify-center">
          {index}
        </span>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-[#f0ede8] leading-snug">
            {title}
          </h4>
          <p className="text-sm text-[#94A3B8] mt-1">
            {subtitle}
          </p>
          <a
            href={proofLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-sm font-semibold text-[#00d4ff] opacity-0 group-hover:opacity-100 transition font-['JetBrains_Mono']"
          >
            View Achievement →
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementCard;
