export function Tools(): JSX.Element {
  return (
    <>
      <h1 id="maincontent">Verktøy</h1>
      <h2>
        <a
          href="https://www.w3.org/WAI/ER/tools/"
          target="_blank"
          rel="noreferrer"
          title="Web Accessibility Evaluation Tools List"
        >
          Web Accessibility Evaluation Tools List
        </a>
      </h2>
      <h2>
        <a
          href="https://pa11y.org/"
          title="Pa11y hjemmeside"
          target="_blank"
          rel="noreferrer"
        >
          Pa11y
        </a>
      </h2>
      <p>
        Open source-verktøy som gir deg mulighet til å integrere{' '}
        <abbr title="Web Content Accessibility Guidelines">WCAG</abbr>-testing
        og -validering i din byggeprosess, manuelt fra kommandolinja eller for
        eksempel som en integrert del av hot-reloading i ditt utviklingsmiljø.
      </p>
      <p>
        Gir deg mulighet for å velge niva A, AA eller AAA, men også å legge til
        enkeltregler med direkte referanse til W3C sine
        <span lang="en">guidelines</span>.
      </p>
      <p>
        Vi har laget et ydmykt forslag til hvordan dette kan kan integreres i
        React med Vite i Code.
        <a
          target="_blank"
          title="Se Vite konfigurasjonskode for Pa11y på Github"
          href="https://github.com/skaihigh/uu-workshop/blob/main/uu-workshop/vite.config.ts"
          rel="noreferrer"
        >
          Kodeeksempel på Vite konfigurasjon [Github]
        </a>
      </p>
      <h2>
        <a
          target="_blank"
          href="https://wave.webaim.org/extension/"
          title="Wave chrome extention"
          rel="noreferrer"
        >
          WAVE Web Accessibility Evaluation Tool
        </a>
      </h2>
      <p>
        En samling valideringsverktøy fra WebAIM. Kommer både som standalone,
        webservice og som nettleserutvidelser. Api-tjenestene koster penger, men
        nettleserutvidelsen er gratis og kan enkelt integreres i arbeidsflyten
        til både utvikler, prosjektleder eller andre personer med både teknisk
        og ikke-teknisk backgrunn.
      </p>
      <h2>
        <a
          target="_blank"
          href="https://developer.chrome.com/docs/lighthouse/overview"
          title="Lighthouse chrome extention"
          rel="noreferrer"
        >
          Lighthouse
        </a>
      </h2>
      <h2>
        <a
          target="_blank"
          href="https://developer.chrome.com/blog/full-accessibility-tree/"
          title="Accessability tree view documentation"
          rel="noreferrer"
        >
          Accessability tree view
        </a>
      </h2>
      <h2>
        <a
          target="_blank"
          href="https://www.deque.com/axe/devtools/"
          title="DevTools Axe hjemmeside"
          rel="noreferrer"
        >
          Axe DevTools
        </a>
      </h2>
      <h2>
        <a
          target="_blank"
          href="https://support.apple.com/no-no/guide/voiceover/vo27974/mac"
          title="Bruk VoiceOver til å lese nettsider på Mac"
          rel="noreferrer"
        >
          Bruk VoiceOver til å lese nettsider på Mac
        </a>
      </h2>
      <h2>
        <a
          target="_blank"
          href="https://support.microsoft.com/nb-no/windows/komplett-veiledning-for-skjermleser-e4397a0d-ef4f-b386-d8ae-c172f109bdb1"
          title="Bruk Narrator til å lese nettsider på PC"
          rel="noreferrer"
        >
          Bruk Narrator til å lese nettsider på PC
        </a>
      </h2>
      <p>Det finnes flere måter du kan navigere i nettsider på.</p>
      <br />
      <br />
    </>
  )
}
