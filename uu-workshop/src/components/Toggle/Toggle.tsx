import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import './Toggle.scss'

interface ToggleProps {
  id?: string
  label: string
  checked?: boolean
  onChange: (
    checked: DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
  ) => void
}

/*
Accessibility concerns
Using the order property will create a disconnect 
between the visual presentation of content and DOM order. 
This will adversely affect users experiencing low vision navigating 
with the aid of assistive technology such as a screen reader. 
If the visual (css) order is important, then screen reader users 
will not have access to the correct reading order.
*/

export function Toggle({ label, onChange }: ToggleProps): JSX.Element {
  return (
    <label className="switch" aria-label={`Av og på bryter for ${label}`}>
      <input type="checkbox" onChange={onChange} />
      <span className="slider round"></span>
    </label>
  )
}
