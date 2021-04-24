import * as React from "react";
import "./videoBackground.css";

const VideoBackground = ({ video }) => {
    const videoRef = React.useRef();
    const previousVideo = React.useRef(video);
    
    React.useEffect(() => {
        if (previousVideo.current !== video && videoRef.current) {
            videoRef.current.load();
            previousVideo.current = video;
        }
    }, [video]);
    return (
        <video ref={videoRef} autoPlay muted loop id="video">
            <source src={`/videos/${video}.mp4`} type="video/mp4" />
        </video>
    );
};

export default VideoBackground;