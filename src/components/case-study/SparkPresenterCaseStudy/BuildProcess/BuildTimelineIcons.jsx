export function BuildTimelineStepIcon({ icon }) {
  const commonProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
  };

  switch (icon) {
    case 'map':
      return (
        <svg {...commonProps}>
          <path d="M4 6.5 9 4l6 2.5L20 4v13.5L15 20l-6-2.5L4 20Z" />
          <path d="M9 4v13.5M15 6.5V20" />
        </svg>
      );
    case 'proof':
      return (
        <svg {...commonProps}>
          <path d="M10 4h4M11 4v5l-5 8a2 2 0 0 0 1.7 3h8.6A2 2 0 0 0 18 17l-5-8V4" />
          <path d="M9 14h6" />
        </svg>
      );
    case 'blocks':
      return (
        <svg {...commonProps}>
          <rect x="4" y="4" width="6" height="6" rx="1.2" />
          <rect x="14" y="4" width="6" height="6" rx="1.2" />
          <rect x="4" y="14" width="6" height="6" rx="1.2" />
          <rect x="14" y="14" width="6" height="6" rx="1.2" />
        </svg>
      );
    case 'design':
      return (
        <svg {...commonProps}>
          <path d="m7 17 10-10 3 3-10 10H7Z" />
          <path d="m14 6 4 4" />
          <path d="M7 17v3h3" />
        </svg>
      );
    case 'logic':
      return (
        <svg {...commonProps}>
          <circle cx="6.5" cy="7" r="2" />
          <circle cx="17.5" cy="7" r="2" />
          <circle cx="12" cy="17" r="2" />
          <path d="M8.4 8.1 10.8 10M15.6 8.1 13.2 10M12 12v3" />
        </svg>
      );
    case 'validate':
      return (
        <svg {...commonProps}>
          <path d="M12 3 5.5 5.5v5.7c0 4 2.6 6.9 6.5 9.3 3.9-2.4 6.5-5.3 6.5-9.3V5.5Z" />
          <path d="m9.4 11.9 1.8 1.9 3.4-3.8" />
        </svg>
      );
    case 'correct':
      return (
        <svg {...commonProps}>
          <path d="m8 16 8-8M10 7H6v4M18 13v5h-5" />
          <path d="m9 15-3 3M15 9l3-3" />
        </svg>
      );
    case 'render':
      return (
        <svg {...commonProps}>
          <rect x="4" y="5" width="16" height="11" rx="2" />
          <path d="M8 19h8M12 16v3" />
          <path d="M7.5 9.5h9M7.5 12.5h5" />
        </svg>
      );
    case 'scale':
      return (
        <svg {...commonProps}>
          <path d="M4 18h16" />
          <path d="M7 18V9M12 18V6M17 18v-4" />
          <path d="m5.8 10.2 3-3 2.5 2.5 5-5" />
        </svg>
      );
    default:
      return null;
  }
}

export function BuildCloserArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}
