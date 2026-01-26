import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, WarningCircle, CheckCircle, Info } from '@phosphor-icons/react';
import { Card } from './card';

interface ErrorMessageProps {
  type: 'error' | 'success' | 'warning' | 'info';
  title: string;
  message: string;
  isVisible: boolean;
  onClose: () => void;
  autoClose?: boolean;
  autoCloseDelay?: number;
}

export function ErrorMessage({
  type,
  title,
  message,
  isVisible,
  onClose,
  autoClose = false,
  autoCloseDelay = 5000
}: ErrorMessageProps) {
  
  React.useEffect(() => {
    if (autoClose && isVisible) {
      const timer = setTimeout(onClose, autoCloseDelay);
      return () => clearTimeout(timer);
    }
  }, [autoClose, autoCloseDelay, isVisible, onClose]);

  const typeStyles = {
    error: {
      bg: 'bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20',
      border: 'border-red-200 dark:border-red-700',
      icon: <WarningCircle size={20} className="text-red-400" />,
      titleColor: 'text-red-800 dark:text-red-200',
      textColor: 'text-red-700 dark:text-red-300'
    },
    success: {
      bg: 'bg-gradient-to-r from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-800/20',
      border: 'border-green-200 dark:border-green-700',
      icon: <CheckCircle size={20} className="text-green-400" />,
      titleColor: 'text-green-800 dark:text-green-200',
      textColor: 'text-green-700 dark:text-green-300'
    },
    warning: {
      bg: 'bg-gradient-to-r from-yellow-50 to-amber-100 dark:from-yellow-900/20 dark:to-amber-800/20',
      border: 'border-yellow-200 dark:border-yellow-700',
      icon: <WarningCircle size={20} className="text-yellow-400" />,
      titleColor: 'text-yellow-800 dark:text-yellow-200',
      textColor: 'text-yellow-700 dark:text-yellow-300'
    },
    info: {
      bg: 'bg-gradient-to-r from-blue-50 to-sky-100 dark:from-blue-900/20 dark:to-sky-800/20',
      border: 'border-blue-200 dark:border-blue-700',
      icon: <Info size={20} className="text-blue-400" />,
      titleColor: 'text-blue-800 dark:text-blue-200',
      textColor: 'text-blue-700 dark:text-blue-300'
    }
  };

  const style = typeStyles[type];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed top-4 right-4 z-50 max-w-md w-full"
        >
          <Card className={`${style.bg} ${style.border} border-2 backdrop-blur-sm shadow-lg`}>
            <div className="p-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 pt-0.5">
                  {style.icon}
                </div>
                <div className="flex-grow min-w-0">
                  <h4 className={`font-semibold ${style.titleColor} text-sm`}>
                    {title}
                  </h4>
                  <p className={`mt-1 text-sm ${style.textColor} leading-relaxed`}>
                    {message}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className={`flex-shrink-0 p-1 rounded-full transition-colors`}
                  aria-label="Close notification"
                >
                  <X size={16} />
                </button>
              </div>
              
              {/* Progress bar for auto-close */}
              {autoClose && (
                <motion.div
                  initial={{ width: '100%' }}
                  animate={{ width: '0%' }}
                  transition={{ duration: autoCloseDelay / 1000, ease: 'linear' }}
                  className={`bg-blue-600' mt-3 h-1 rounded-full type type type`}
                />
              )}
            </div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
