// import './EnoughIsEnough.scss'

export function EnoughIsEnough(): JSX.Element {
  return (
    // https://webaim.org/blog/overly-accessible/
    // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label (søk på 'overuse')

    <div className="good-vs-bad__wrapper">
      <div className="good-vs-bad good-vs-bad--bad">
        <div>
          bad Går det an å overdrive a11y? Fx title/alt/aria-* på alt? SJEKK
          SKJERMLESER
        </div>
      </div>
      <div className="good-vs-bad good-vs-bad--good">
        <div>good Eksempler på akkurat passe</div>
      </div>
    </div>
  )
}
