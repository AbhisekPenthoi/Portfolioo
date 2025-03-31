export const springConfig = {
  light: {
    type: "spring",
    stiffness: 100,
    damping: 15,
    mass: 0.5,
  },
  medium: {
    type: "spring",
    stiffness: 150,
    damping: 20,
    mass: 1,
  },
  heavy: {
    type: "spring",
    stiffness: 200,
    damping: 25,
    mass: 1.5,
  },
};

export const transitionConfig = {
  duration: 0.5,
  ease: "easeInOut",
}; 