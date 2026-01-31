import { motion } from "framer-motion";

const AchievementCard = ({ title, subtitle, proofLink }) => {
  return (
    <div className="w-full h-28 sm:h-32 perspective-1000 group">
      <motion.div
        className="relative w-full h-full rounded-2xl transform-style-preserve-3d transition-transform duration-500 group-hover:rotate-y-180"
      >
        {/* FRONT */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex flex-col justify-center backface-hidden">
          <h4 className="font-semibold text-[#020617]">{title}</h4>
          <p className="text-sm opacity-80 line-clamp-2">{subtitle}</p>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 bg-[#020617] text-[#E5E7EB] rounded-2xl p-4 flex flex-col items-center justify-center backface-hidden rotate-y-180">
          <p className="text-sm mb-3 opacity-80">View Achievement</p>

          <a
            href={proofLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-[#14B8A6] text-[#020617] font-semibold hover:scale-105 transition"
          >
            Open
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default AchievementCard;
