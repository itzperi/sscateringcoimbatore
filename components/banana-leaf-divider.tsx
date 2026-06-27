export function BananaLeafDivider() {
  return (
    <div className="flex justify-center py-8">
      <svg
        width="120"
        height="60"
        viewBox="0 0 120 60"
        className="text-gold"
        fill="currentColor"
      >
        {/* Banana leaf - curved, organic shape */}
        <path
          d="M 60 10 Q 80 15, 85 30 Q 88 40, 80 50 Q 70 55, 60 50 Q 50 55, 40 50 Q 32 40, 35 30 Q 40 15, 60 10 Z"
          fillOpacity="0.7"
        />
        {/* Decorative center line */}
        <path
          d="M 60 12 Q 65 25, 60 50"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
      </svg>
    </div>
  )
}
