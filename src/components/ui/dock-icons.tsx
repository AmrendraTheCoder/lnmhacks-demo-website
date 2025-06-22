import React from "react";

export const HomeIcon = ({ size = 64 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="12" fill="#007AFF" />
    <path d="M32 16L48 28V48H36V36H28V48H16V28L32 16Z" fill="white" />
  </svg>
);

export const CalendarIcon = ({ size = 64 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="12" fill="#FF3B30" />
    <rect x="8" y="16" width="48" height="40" rx="4" fill="white" />
    <path
      d="M8 24H56V20C56 17.7909 54.2091 16 52 16H12C9.79086 16 8 17.7909 8 20V24Z"
      fill="#FF3B30"
    />
    <text
      x="32"
      y="42"
      textAnchor="middle"
      fontSize="14"
      fontWeight="bold"
      fill="#FF3B30"
    >
      15
    </text>
  </svg>
);

export const TerminalIcon = ({ size = 64 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="12" fill="#000000" />
    <path
      d="M12 20L20 28L12 36"
      stroke="#00FF00"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 36H52"
      stroke="#00FF00"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const MailIcon = ({ size = 64 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="12" fill="#007AFF" />
    <rect x="8" y="20" width="48" height="24" rx="4" fill="white" />
    <path
      d="M8 24L32 36L56 24"
      stroke="#007AFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const NotesIcon = ({ size = 64 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="12" fill="#FFCC00" />
    <rect x="12" y="16" width="40" height="32" rx="2" fill="white" />
    <path
      d="M16 24H48M16 28H48M16 32H40"
      stroke="#FFCC00"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const SafariIcon = ({ size = 64 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="12" fill="#007AFF" />
    <circle cx="32" cy="32" r="20" fill="white" />
    <path d="M32 20V44M20 32H44" stroke="#007AFF" strokeWidth="2" />
    <path d="M26 26L38 38M38 26L26 38" stroke="#FF3B30" strokeWidth="2" />
  </svg>
);

export const PhotosIcon = ({ size = 64 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="12" fill="#34C759" />
    <circle cx="24" cy="24" r="8" fill="white" />
    <path
      d="M12 48L24 36L36 48L48 36L56 44V52C56 54.2091 54.2091 56 52 56H12C9.79086 56 8 54.2091 8 52V48H12Z"
      fill="white"
    />
  </svg>
);

export const MusicIcon = ({ size = 64 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="12" fill="#FF2D92" />
    <circle cx="20" cy="44" r="8" fill="white" />
    <circle cx="44" cy="36" r="8" fill="white" />
    <path
      d="M28 44V20L52 16V36"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

// Default app icons mapped by ID
export const getAppIcon = (appId: string, size: number = 64) => {
  const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
    home: HomeIcon,
    timeline: CalendarIcon,
    features: TerminalIcon,
    demo: MailIcon,
    stats: NotesIcon,
    testimonials: SafariIcon,
    query: PhotosIcon,
    footer: MusicIcon,
  };

  const IconComponent = iconMap[appId] || HomeIcon;
  return <IconComponent size={size} />;
};
