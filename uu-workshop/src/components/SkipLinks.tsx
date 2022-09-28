// https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G1

import './SkipLinks.scss'

export function SkipLinks(): JSX.Element {
  return (
    <>
      <ul className="skiplist">
        <li className="skip">
          <a href="#content">Hopp over navigasjons meny.</a>
        </li>
        <li className="skip">
          <a href="#footerlinks">Hopp til ressurslenker i footer.</a>
        </li>
      </ul>
    </>
  )
}
