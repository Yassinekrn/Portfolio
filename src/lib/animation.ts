
import { Variants } from "framer-motion";

// Updated interface to be compatible with framer-motion Variants
export interface AnimationVariants extends Variants {
  hidden: any;
  visible: any;
  [key: string]: any; // Add index signature to match framer-motion's Variants type
}

export const fadeInVariants: AnimationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

export const fadeInWithDelayVariants = (delay: number = 0): AnimationVariants => ({
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: delay * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
});

export const staggerContainerVariants: AnimationVariants = {
  hidden: { 
    opacity: 1 
  },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const scaleInVariants: AnimationVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Ensures animations work properly during fast scrolling
export const scrollAnimationSettings = {
  once: true,
  amount: 0.2,
  margin: "-100px 0px"
};
