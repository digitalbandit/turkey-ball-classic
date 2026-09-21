import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

export function Crown({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 28 18"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        d="M3.2 15.4 5.1 4.8c.12-.7 1.05-.86 1.4-.24L10.2 11 13.7 2.6c.28-.66 1.22-.66 1.5 0L18.8 11l3.6-6.4c.36-.64 1.3-.48 1.42.22l1.9 10.6"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 15.6h20"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function IconBats({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} {...props}>
      <path
        d="M18 50 46 14"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M16.2 47.4c-2.4 2.2-5.6 3.6-6.2 2.9-.6-.7.8-3.8 3.2-6"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M42.4 16.2c2.6-3.4 4.6-4.4 5.4-3.7.8.7-.1 3.3-2.4 6.4"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M46 50 18 14"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M47.8 47.4c2.4 2.2 5.6 3.6 6.2 2.9.6-.7-.8-3.8-3.2-6"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M21.6 16.2c-2.6-3.4-4.6-4.4-5.4-3.7-.8.7.1 3.3 2.4 6.4"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function IconJersey({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} {...props}>
      <path
        d="M22 16.5 32 22.5 42 16.5l8 6.5v8.2l-6 1.6V50H20V32.8l-6-1.6V23Z"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M26 16.8c.6 5.4 11.4 5.4 12 0"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <text
        x="32"
        y="42"
        textAnchor="middle"
        fill="currentColor"
        fontSize="13"
        fontFamily="Bebas Neue, sans-serif"
      >
        25
      </text>
    </svg>
  )
}

export function IconCooler({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} {...props}>
      <rect
        x="12"
        y="24"
        width="40"
        height="24"
        rx="3"
        stroke="currentColor"
        strokeWidth="2.6"
      />
      <path
        d="M16 24V20.5c0-1.4 1.2-2.5 2.6-2.5h26.8c1.4 0 2.6 1.1 2.6 2.5V24"
        stroke="currentColor"
        strokeWidth="2.6"
      />
      <path d="M12 34h40" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M20 34v-3.2M44 34v-3.2"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function IconCan({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} {...props}>
      <path
        d="M23 20c0-2 8-4.4 18-1.2"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M22 22c1.2 28 2 32 10 32s9.2-4 10.4-32"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M22.4 22h20.2"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M25 32h14.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function IconCalendar({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} {...props}>
      <rect
        x="5"
        y="8"
        width="22"
        height="18"
        rx="2.2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="M5 13.2h22" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M11 6.2v4.2M21 6.2v4.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <rect x="10" y="17" width="3.2" height="3.2" fill="currentColor" />
      <rect x="15.4" y="17" width="3.2" height="3.2" fill="currentColor" />
    </svg>
  )
}

export function IconClock({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} {...props}>
      <circle cx="16" cy="16" r="10.2" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M16 10.5v6.1l4.2 2.4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconPin({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} {...props}>
      <path
        d="M16 27s7.4-7.1 7.4-12.2A7.4 7.4 0 0 0 16 7.4a7.4 7.4 0 0 0-7.4 7.4C8.6 19.9 16 27 16 27Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="14.6" r="2.3" fill="currentColor" />
    </svg>
  )
}

export function IconMenu({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 28 20" fill="none" className={className} {...props}>
      <path d="M2 3.2h24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 10h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M2 16.8h24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function IconClose({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <path d="M5 5.5 19 18.5M19 5.5 5 18.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function BrushUnderline({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 220 14" fill="none" className={className} {...props}>
      <path
        d="M2 8.5c28-4.4 54 3.2 82 1.4 24-1.5 46-5.4 72-3.1 20 1.7 42 4.4 62 1.2"
        stroke="currentColor"
        strokeWidth="4.2"
        strokeLinecap="round"
      />
    </svg>
  )
}
