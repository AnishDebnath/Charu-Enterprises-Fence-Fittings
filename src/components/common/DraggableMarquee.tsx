import {
  type FC,
  type ReactNode,
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { MoveHorizontal } from 'lucide-react';

interface DraggableMarqueeProps {
  children: ReactNode;
  speed?: number; // pixels per frame (positive for RTL/leftward, negative for LTR/rightward)
  className?: string;
  showDragHint?: boolean;
  pauseOnHover?: boolean;
}

export const DraggableMarquee: FC<DraggableMarqueeProps> = ({
  children,
  speed = 0.8,
  className = '',
  showDragHint = true,
  pauseOnHover = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const hasMovedRef = useRef(false);
  const isHoveredRef = useRef(false);
  const animFrameIdRef = useRef<number | null>(null);
  const [isCursorGrabbing, setIsCursorGrabbing] = useState(false);

  // Auto-scroll loop
  const step = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!isDraggingRef.current && (!isHoveredRef.current || !pauseOnHover)) {
      container.scrollLeft += speed;

      // Infinite loop wrap
      const halfWidth = container.scrollWidth / 2;
      if (halfWidth > 0) {
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += halfWidth;
        }
      }
    }

    animFrameIdRef.current = requestAnimationFrame(step);
  }, [speed, pauseOnHover]);

  useEffect(() => {
    // Start in the middle if speed is negative (moving rightwards)
    const container = containerRef.current;
    if (container && speed < 0) {
      container.scrollLeft = container.scrollWidth / 4;
    }

    animFrameIdRef.current = requestAnimationFrame(step);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [step, speed]);

  // Pointer event handlers for unified mouse + touch drag
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only handle primary button / touch
    if (e.button !== 0 && e.pointerType === 'mouse') return;

    const container = containerRef.current;
    if (!container) return;

    isDraggingRef.current = true;
    hasMovedRef.current = false;
    startXRef.current = e.clientX;
    startScrollLeftRef.current = container.scrollLeft;
    setIsCursorGrabbing(true);

    // Capture pointer
    try {
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const container = containerRef.current;
    if (!container) return;

    const dx = e.clientX - startXRef.current;
    if (Math.abs(dx) > 4) {
      hasMovedRef.current = true;
    }

    container.scrollLeft = startScrollLeftRef.current - dx;

    // Handle seamless wrap during drag
    const halfWidth = container.scrollWidth / 2;
    if (halfWidth > 0) {
      if (container.scrollLeft >= halfWidth) {
        container.scrollLeft -= halfWidth;
        startScrollLeftRef.current -= halfWidth;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += halfWidth;
        startScrollLeftRef.current += halfWidth;
      }
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsCursorGrabbing(false);

    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  // Intercept click on children if user dragged
  const handleClickCapture = (e: React.MouseEvent) => {
    if (hasMovedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      hasMovedRef.current = false;
    }
  };

  return (
    <div className="relative w-full group/marquee">
      {/* Scrollable / Draggable Viewport */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onClickCapture={handleClickCapture}
        onMouseEnter={() => {
          isHoveredRef.current = true;
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
          if (isDraggingRef.current) {
            isDraggingRef.current = false;
            setIsCursorGrabbing(false);
          }
        }}
        className={`w-full overflow-x-hidden no-scrollbar py-3 touch-pan-y select-none ${
          isCursorGrabbing ? 'cursor-grabbing' : 'cursor-grab'
        } ${className}`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div ref={trackRef} className="flex gap-4 sm:gap-5 md:gap-6 lg:gap-6 w-max px-4 md:px-8">
          {children}
        </div>
      </div>

      {/* Subtle Drag Hint */}
      {showDragHint && (
        <div className="flex items-center justify-center gap-1.5 pt-2 text-[11px] sm:text-xs font-medium text-slate-400 select-none opacity-80 group-hover/marquee:opacity-100 transition-opacity">
          <MoveHorizontal className="w-3.5 h-3.5" />
          <span>Drag or swipe left/right to browse</span>
        </div>
      )}
    </div>
  );
};

export default DraggableMarquee;
