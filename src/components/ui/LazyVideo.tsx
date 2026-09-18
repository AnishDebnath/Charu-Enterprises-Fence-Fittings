import { useState, useRef, useEffect, type VideoHTMLAttributes } from 'react';

interface LazyVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  fallback?: string;
}

export function LazyVideo({ src, className = '', fallback, children, ...props }: LazyVideoProps) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (props.autoPlay) {
      video.src = src || '';
      video.load();
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.src = src || '';
          video.load();
          observer.unobserve(video);
        }
      },
      { rootMargin: '300px' }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      onLoadedData={() => setLoaded(true)}
      {...props}
    >
      {children}
    </video>
  );
}
