import '../../scss/Footer.scss'

export function Footer(): JSX.Element {
  return (
    <div className="footer">
      <p className="skip">
        <a
          title="Ressurslenker WCAG verktøy"
          href="#footerlinks"
          id="footerlinks"
        >
          Ressurslenker WCAG verktøy.
        </a>
      </p>
      <ul>
        <li>
          <a href="https://pa11y.org/" title="Pa11y hjemmeside">
            Pa11y
          </a>
        </li>
        <li>
          <a
            href="https://wave.webaim.org/extension/"
            title="Wave chrome extention"
          >
            Wave
          </a>
        </li>
        <li>
          <a
            href="https://developer.chrome.com/docs/lighthouse/overview"
            title="Lighthouse chrome extention"
          >
            Lighthouse
          </a>
        </li>
        <li>
          <a
            href="https://developer.chrome.com/blog/full-accessibility-tree/"
            title="Accessability tree view documentation"
          >
            Accessability tree view
          </a>
        </li>
        <li>
          <a
            href="https://www.deque.com/axe/devtools/"
            title="DevTools Axe hjemmeside"
          >
            Axe DevTools
          </a>
        </li>
      </ul>
    </div>
  )
}
