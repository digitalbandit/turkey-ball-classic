import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Props = {
  to: string
  children: ReactNode
  variant?: 'solid' | 'outline'
  tone?: 'light' | 'dark'
  className?: string
}

export function InkButton({
  to,
  children,
  variant = 'solid',
  tone = 'light',
  className = '',
}: Props) {
  return (
    <Link
      to={to}
      className={`ink-btn ink-btn-${variant} ink-btn-${tone} ${className}`.trim()}
    >
      {children}
    </Link>
  )
}
