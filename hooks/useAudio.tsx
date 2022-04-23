import React, { useState, useEffect, useRef } from "react";

const useAudio = (url: string) => {
    const audio = useRef<HTMLAudioElement | undefined>(typeof Audio !== 'undefined' ? new Audio(url) : undefined);
    const [playing, setPlaying] = useState(false);
    const toggle = () => setPlaying(!playing);
  
    useEffect(() => {
      playing ? audio.current?.play() : audio.current?.pause();
    }, [playing]);
  
    useEffect(() => {
      audio.current?.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.current?.removeEventListener('ended', () => setPlaying(false));
      };
    }, []);
  
    return [playing, toggle] as const;
  };

  export default useAudio;