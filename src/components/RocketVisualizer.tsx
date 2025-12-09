import type { FC } from 'react';

export const RocketVisualizer: FC = () => {
  return (
    <div className="flex justify-center mb-4">
      <svg width="200" height="220" viewBox="0 0 200 220" className="drop-shadow-lg">
        {/* Nosecone */}
        <path d="M 100 20 L 70 80 L 130 80 Z" fill="#b8c1cc" />
        {/* Upper body */}
        <rect x="70" y="80" width="60" height="40" fill="#6b7b8c" />

        {/* Separation band */}
        <rect x="70" y="120" width="60" height="8" fill="#b8c1cc" />

        {/* Lower body */}
        <rect x="70" y="128" width="60" height="50" fill="#6b7b8c" rx="2" />

        {/* Rounded bottom */}
        <path
          d="M 70 178 Q 70 188 80 188 L 120 188 Q 130 188 130 178 L 130 178 L 70 178 Z"
          fill="#6b7b8c"
        />
        {/* Left fin */}
        <path d="M 70 165 L 30 200 L 30 220 L 70 185 Z" fill="#d16666" />

        {/* Right fin */}
        <path d="M 130 165 L 170 200 L 170 220 L 130 185 Z" fill="#d16666" />

        {/* Flame - outer red/orange layer */}
        <path
          d="M 85 188 L 75 210 L 80 215 L 100 205 L 120 215 L 125 210 L 115 188 Z"
          fill="#d16666"
          opacity="0.9"
        />

        {/* Flame - middle orange layer */}
        <path
          d="M 90 188 L 82 205 L 87 210 L 100 202 L 113 210 L 118 205 L 110 188 Z"
          fill="#e89b5f"
          opacity="0.9"
        />

        {/* Flame - inner yellow layer */}
        <path
          d="M 95 188 L 90 200 L 93 205 L 100 200 L 107 205 L 110 200 L 105 188 Z"
          fill="#f4d06f"
          opacity="0.95"
        />

        {/* Flame - core white hot */}
        <path
          d="M 98 188 L 95 195 L 97 198 L 100 196 L 103 198 L 105 195 L 102 188 Z"
          fill="#fff9e6"
        />
      </svg>
    </div>
  );
};
