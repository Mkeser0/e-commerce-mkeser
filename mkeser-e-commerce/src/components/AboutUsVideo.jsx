import React, { useRef, useState, useEffect } from "react";
import { IoPlay } from "react-icons/io5";

function AboutUsVideo() {
  const videoRef = useRef(null);
  const [showButton, setShowButton] = useState(true);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play(); // videoyu oynat
      setShowButton(false); // butonu gizle
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePause = () => setShowButton(true);
    const handlePlaying = () => setShowButton(false);

    video.addEventListener("pause", handlePause);
    video.addEventListener("playing", handlePlaying);

    // Temizlik
    return () => {
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("playing", handlePlaying);
    };
  }, []);

  return (
    <div className="flex justify-center items-center pt-24">
      <div className="relative w-[307px] md:w-[989px] h-[316px] md:h-[540px] rounded-[20px] overflow-hidden">
        <video
          ref={videoRef}
          src="/video.mp4"
          className="w-full h-full object-cover"
          controls // istersen autoplay, loop, muted de eklenebilir
        />
        {showButton && (
          <div
            onClick={handlePlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#23A6F0] rounded-full p-3 md:p-5 flex justify-center items-center"
          >
            <IoPlay className="text-[28px] md:text-[32px] text-white" />
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutUsVideo;
