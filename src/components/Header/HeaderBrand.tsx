import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Certificate } from "@phosphor-icons/react";
import { useTranslations } from "@/hooks/use-translations";

interface HeaderBrandProps {
  isScrolled: boolean;
}

/**
 * HeaderBrand Component - Logo and company branding
 * 
 * Displays company name with tagline and MCT certification badge.
 * Adapts size based on scroll state for space efficiency.
 */
export function HeaderBrand({ isScrolled }: HeaderBrandProps) {
  const { t } = useTranslations();

  return (
    <motion.div
      className="flex items-center gap-2 sm:gap-3"
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Link to="/" className="flex-shrink-0 group">
        <motion.div
          className="flex flex-col gap-0.5"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Company Name - Always compact */}
          <div
            className="
              font-bold tracking-tight transition-all duration-300
              text-foreground
              group-hover:text-blue-500 dark:group-hover:text-blue-400
              leading-none
              text-lg sm:text-xl md:text-2xl
            "
          >
            Cloudevolvers
          </div>

          {/* Tagline - Always visible, compact */}
          <motion.div
            className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 font-medium leading-none mt-0.5"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Azure and Microsoft Training & Services
          </motion.div>
        </motion.div>
      </Link>

      {/* MCT Certified Badge - Redesigned for better visibility */}
      <motion.div
        className="
          hidden lg:flex items-center gap-2 rounded-md
          bg-emerald-100 text-emerald-700
          dark:bg-emerald-500/10 dark:text-emerald-400
          border border-emerald-200 dark:border-emerald-500/20
          px-3 py-1 ml-4 flex-shrink-0 min-w-fit
          font-semibold text-xs tracking-wide
        "
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <Certificate size={14} weight="fill" />
        MCT Certified
      </motion.div>
    </motion.div >
  );
}
