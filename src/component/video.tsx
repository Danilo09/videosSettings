import React from 'react'
import videoSrc from "../assets/video.mp4"



const Video = () => {

    const video = React.useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = React.useState(false);

    React.useEffect(() => {
        console.log('teste')
    })

    function forward() {
        if (video.current) {
            video.current.currentTime += 2
        }
    }

    function changePlayBackRate(speed: number) {
        if (!video.current) return;
        video.current.playbackRate = speed;
    }

    function mute() {
        if (!video.current) return;
        video.current.muted = !video.current.muted
    }

    async function pictureInPicture() {
        if (!video.current) return;
        if (document.pictureInPictureElement) {
            await document.exitPictureInPicture();
        } else {
            await video.current.requestPictureInPicture();
        }
    }

    return (
        <>
            <div className='contentButtons'>
                {!playing ?
                    <button onClick={() => video.current?.play()}>Play</button> :
                    <button onClick={() => video.current?.pause()}>Pause</button>
                }
                <button onClick={() => forward()}>+2s</button>
                <button onClick={() => changePlayBackRate(1)}>1x</button>
                <button onClick={() => changePlayBackRate(2)}>2x</button>
                <button onClick={() => mute()}>Mute</button>
                <button onClick={() => pictureInPicture()}>PiP</button>
            </div>

            <video
                controls
                ref={video}
                src={videoSrc}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
            >

            </video>
        </>
    )
}

export default Video