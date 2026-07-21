"use client";

import { ReactLenis } from 'lenis/react';
import { useEffect, useState } from 'react';

export default function SmoothScrolling({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  // We use standard ReactLenis with default settings as requested by the user.
  // The 'root' prop ensures it attaches to the window scroll.
  return (
    <ReactLenis root options={{
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    }}>
      {children}
    </ReactLenis>
  );
}
