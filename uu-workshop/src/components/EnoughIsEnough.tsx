// import './EnoughIsEnough.scss'

export function EnoughIsEnough(): JSX.Element {
  return (
    <div className="good-vs-bad__wrapper">
      <div className="good-vs-bad good-vs-bad--bad">
        <div>bad
          Går det an å overdrive a11y? Fx title/alt/aria-* på alt? SJEKK SKJERMLESER
        </div>
        
      </div>
      <div className="good-vs-bad good-vs-bad--good">
        <div>good
          Eksempler på akkurat passe
        </div>
        
      </div>
    </div>
  )
}
