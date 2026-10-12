/**
 * Lightweight inline SVG icon set (stroke icons, 24×24 grid).
 * No icon-font or external dependency required.
 */

const paths = {
  generator: (
    <>
      <rect x="2.5" y="7" width="19" height="11" rx="1.5" />
      <path d="M5 18v2.5M19 18v2.5M6 10.5h5M6 13.5h5" />
      <path d="M16.2 9.6l-1.6 2.9h2.4l-1.6 2.9" />
      <path d="M7 7V4.5h3V7" />
    </>
  ),
  tank: (
    <>
      <ellipse cx="12" cy="6" rx="7.5" ry="2.5" />
      <path d="M4.5 6v11c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5V6" />
      <path d="M4.5 11.5c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5" />
    </>
  ),
  droplet: (
    <>
      <path d="M12 3.2c3.3 4 5.5 7.1 5.5 10a5.5 5.5 0 0 1-11 0c0-2.9 2.2-6 5.5-10z" />
      <path d="M9.2 14.2a2.9 2.9 0 0 0 2.6 2.6" />
    </>
  ),
  crate: (
    <>
      <path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5z" />
      <path d="M3 7.5 12 12l9-4.5M12 12v9M7.5 5.3l9 4.5" />
    </>
  ),
  building: (
    <>
      <path d="M3 21h18M5 21V6.5L12 3l7 3.5V21" />
      <path d="M9 9.5h1.5M13.5 9.5H15M9 13h1.5M13.5 13H15M10.5 21v-4h3v4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4.5 6v5.5c0 4.4 3.1 8.2 7.5 9.5 4.4-1.3 7.5-5.1 7.5-9.5V6z" />
      <path d="m8.8 12 2.2 2.2 4.3-4.4" />
    </>
  ),
  arrowRight: <path d="M4.5 12h15M13.5 6l6 6-6 6" />,
  check: <path d="m5 12.5 4.2 4.2L19 7" />,
  download: (
    <>
      <path d="M12 3.5v11.5M7 10.5l5 5 5-5" />
      <path d="M4 19.5h16" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-6.1-6.5-11a6.5 6.5 0 0 1 13 0c0 4.9-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
  phone: (
    <path d="M6.6 3.5h2.6l1.3 4.2-2 1.4a12.5 12.5 0 0 0 6.4 6.4l1.4-2 4.2 1.3v2.6a2 2 0 0 1-2.2 2A17 17 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2z" />
  ),
  menu: <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />,
  close: <path d="M5.5 5.5l13 13M18.5 5.5l-13 13" />,
  clipboard: (
    <>
      <rect x="5" y="4.5" width="14" height="17" rx="1.5" />
      <path d="M9 4.5V3h6v1.5M8.5 10h7M8.5 13.5h7M8.5 17h4.5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c.4-3.4 2.9-5.5 6-5.5s5.6 2.1 6 5.5" />
      <path d="M15.5 4.9a3.2 3.2 0 0 1 0 6.2M17.5 14.8c1.9.6 3.2 2.5 3.5 5.2" />
    </>
  ),
  handshake: (
    <>
      <path d="m2.5 11.5 4-4.5 3.5 1.5 2-1 5.5 0 4 4" />
      <path d="M21.5 11.5 17 16l-4.5-3.5M6.5 7l-4 4.5 3 3" />
      <path d="m8 16.5 2 2M10.5 14l3 3M5.5 14.5l2 2" />
    </>
  ),
  file: (
    <>
      <path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8z" />
      <path d="M14 3v5h5M8.5 13h7M8.5 16.5h7" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  truck: (
    <>
      <path d="M2.5 6h11v10h-11zM13.5 9.5h4.2l3 3.3V16h-7.2" />
      <circle cx="6.5" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="m15 15 5.5 5.5" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2.8v2.4M12 18.8v2.4M21.2 12h-2.4M5.2 12H2.8M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7M18.5 18.5l-1.7-1.7M7.2 7.2 5.5 5.5" />
    </>
  ),
  hardhat: (
    <>
      <path d="M3 17.5h18M4.5 17.5V15a7.5 7.5 0 0 1 15 0v2.5" />
      <path d="M10 8V5.5h4V8M9 10.5V8.3M15 10.5V8.3" />
    </>
  ),
  ruler: (
    <>
      <path d="M3.5 16.5 16.5 3.5l4 4-13 13z" />
      <path d="m7 13 1.8 1.8M9.8 10.2l1.2 1.2M12.6 7.4l1.8 1.8M15.4 4.6l1.2 1.2" />
    </>
  ),
  tag: (
    <>
      <path d="M3.5 12.2V4.5a1 1 0 0 1 1-1h7.7l8.3 8.3-8.7 8.7z" />
      <circle cx="8" cy="8" r="1.4" />
    </>
  ),
  chat: (
    <path d="M4 5.5h16v10H10l-4.5 3.5v-3.5H4z" />
  ),
  flag: (
    <>
      <path d="M5 21V4" />
      <path d="M5 4.5h12.5l-2.5 4 2.5 4H5" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="10" rx="1.5" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3.5 9 4.5-9 4.5L3 8z" />
      <path d="m3 12.2 9 4.5 9-4.5M3 16.2l9 4.5 9-4.5" />
    </>
  ),
  upload: (
    <>
      <path d="M12 15.5V4M7 9l5-5 5 5" />
      <path d="M4 19.5h16" />
    </>
  ),
} as const;

export type IconName = keyof typeof paths;

type IconProps = {
  name: IconName;
  className?: string;
  /** Accessible label. Omit for decorative icons (aria-hidden). */
  title?: string;
  strokeWidth?: number;
};

export function Icon({ name, className = "h-6 w-6", title, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}
