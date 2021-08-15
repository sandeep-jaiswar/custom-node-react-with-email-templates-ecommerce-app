import { useEffect } from "react";

const useSwipeable = (ref, callback) => {
  function handleTouchStart(e) {
    ref.current.startPoint = e.targetTouches[0].clientX;
  }

  function handleTouchMove(e) {
    ref.current.endPoint = e.targetTouches[0].clientX;
  }

  function handleTouchEnd() {
    if (
      ref.current.startPoint &&
      ref.current.endPoint &&
      ref.current.startPoint - ref.current.endPoint > 75
    ) {
      console.log("left swipe");
      console.log(callback.openSlider);
      callback.closeSlider();
    }

    if (
      ref.current.startPoint &&
      ref.current.endPoint &&
      ref.current.startPoint - ref.current.endPoint < -75
    ) {
      console.log("right swipe");
      console.log(callback.closeSlider);
      callback.openSlider();
    }
  }
  useEffect(() => {
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);
    document.addEventListener("touchmove", handleTouchMove);
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);
};

export default useSwipeable;
