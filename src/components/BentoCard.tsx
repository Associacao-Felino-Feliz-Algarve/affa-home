import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface BentoCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export const BentoCard = ({ 
  children, 
  className = "", 
  delay = 0,
  id,
  ...props
}: BentoCardProps) => (
  <motion.div
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow overflow-hidden relative group ${className}`}
    {...props}
  >
    {children}
  </motion.div>
);
