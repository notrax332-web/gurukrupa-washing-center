import React from 'react';

export const BikeIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Rear wheel */}
    <circle cx="5" cy="17" r="3.5" />
    {/* Front wheel */}
    <circle cx="19" cy="17" r="3.5" />
    {/* Frame */}
    <path d="M5 17h4l3-6h4l3 6" />
    <path d="M12 11l-2-4h-2" />
    <path d="M16 11l1.5-4h2" />
    <path d="M9 17l3-6" />
    {/* Seat and Tank */}
    <path d="M9.5 9h3.5" />
  </svg>
);

export const ScooterIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Rear wheel */}
    <circle cx="5.5" cy="17.5" r="2.5" />
    {/* Front wheel */}
    <circle cx="18.5" cy="17.5" r="2.5" />
    {/* Scooter Body & Step-through floorboard */}
    <path d="M5.5 17.5h5.5l1.5-4h-3.5" />
    <path d="M11 17.5h4.5l2.5-9h-2.5" />
    <path d="M18 8.5l-1.5-3.5h-2" />
    {/* Seat */}
    <path d="M7 13.5c0-1.5 1-2.5 2.5-2.5h2.5v2.5H7z" />
    {/* Headlight / Handlebar */}
    <path d="M14.5 5h3" />
  </svg>
);

export const AutoRickshawIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Front wheel */}
    <circle cx="18" cy="18" r="2.5" />
    {/* Rear wheel */}
    <circle cx="6" cy="18" r="2.5" />
    {/* Auto Rickshaw Silhouette */}
    <path d="M3.5 18H3V9c0-1.1.9-2 2-2h8l4 4.5v6.5h-1" />
    {/* Canopy / Hood shape */}
    <path d="M3 11h9v4.5H3" />
    {/* Windshield */}
    <path d="M13 7l3.5 4h-3.5V7z" />
    {/* Driver front bar */}
    <path d="M17 11v4.5" />
  </svg>
);

export const TempoIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Rear Wheels */}
    <circle cx="6" cy="17.5" r="2.5" />
    {/* Front Wheel */}
    <circle cx="18" cy="17.5" r="2.5" />
    {/* Cargo bed */}
    <path d="M2 7h10v10.5H8.5" />
    <path d="M2 13h10" />
    {/* Cabin */}
    <path d="M12 9h4l3 3.5v5h-1.5" />
    <path d="M12 17.5h3.5" />
    <path d="M12 12.5h6" />
  </svg>
);

export const CarSedanIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Wheels */}
    <circle cx="6.5" cy="16.5" r="2.5" />
    <circle cx="17.5" cy="16.5" r="2.5" />
    {/* Sedan Outline */}
    <path d="M2 14.5l1.5-2.5h2l2.5-4h8l3 4h2.5l1 2.5v2h-3" />
    <path d="M9 16.5h6" />
    <path d="M4 16.5H2v-2" />
    {/* Windows */}
    <path d="M8 8.5h4v3.5H6.5L8 8.5z" />
    <path d="M13.5 8.5h2l2.5 3.5h-4.5V8.5z" />
  </svg>
);

export const CarSUVIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Wheels */}
    <circle cx="6.5" cy="17" r="2.5" />
    <circle cx="17.5" cy="17" r="2.5" />
    {/* SUV Body Shape */}
    <path d="M2 14.5l1-3h3l2-4.5h9l2.5 4.5h2l1 3v2.5h-3" />
    <path d="M9 17h6" />
    <path d="M4 17H2v-2.5" />
    {/* Roof rails */}
    <path d="M8 5.5h8" />
    {/* Windows */}
    <path d="M8 7.5h3.5v4H6.5L8 7.5z" />
    <path d="M13 7.5h3l2 4H13V7.5z" />
  </svg>
);
