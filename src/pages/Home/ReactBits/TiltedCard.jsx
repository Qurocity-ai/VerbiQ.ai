import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  containerHeight = "auto",
  containerWidth = "100%",
  scaleOnHover = 1.05,
  rotateAmplitude = 5,
  showMobileWarning = false,
  children,
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const [lastY, setLastY] = useState(0);
  const [shadowStyle, setShadowStyle] = useState({});

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    const velocityY = offsetY - lastY;
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);

    setShadowStyle({
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    });
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);

    setShadowStyle({ boxShadow: "none" });
  }

  return (
    <div
      ref={ref}
      className="relative w-full h-full [perspective:800px]"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="absolute top-4 text-center text-sm block sm:hidden">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      <motion.div
        className="relative [transform-style:preserve-3d] h-full w-full"
        style={{
          rotateX,
          rotateY,
          scale,
        }}
      >
        <div
          className="h-full w-full p-6 bg-gray-50 rounded-lg transition-all duration-300"
          style={shadowStyle}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
