import { useScrollNavigation } from "../hooks/useScrollNavigation";

const ScrollProgressBar = () => {
  const { scrollProgress } = useScrollNavigation();

  return (
    <div className="scroll-progress-container">
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
