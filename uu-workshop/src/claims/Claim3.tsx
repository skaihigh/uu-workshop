export function Claim3(): JSX.Element {
  return (
    <div className="claims">
      <h3>
        Argumenter <i>for</i>:
      </h3>
      <details>
        <summary>?</summary>
        <ul className="disc-list">
          <li>
            Enkelte produkter har en veldig smal brukergruppe, så her er det
            ikke nødvendig å tenke på UU (eksempler på sånne produkter?)
          </li>
          <li>...</li>
        </ul>
      </details>
      <h3>
        Argumenter <i>mot</i>:
      </h3>
      <details>
        <summary>?</summary>
        <ul className="disc-list">
          <li>
            Mange funksjonsnedsettelser er ikke synlige, som f.eks. autisme,
            epilepsi, mildere grad av svaksynthet, ‘musearm’, o.l. - så man kan
            aldri være helt sikker på om dette ikke gjelder vår brukergruppe
            også
          </li>
          <li>
            15% av Norges befolkning har en eller annen form for
            funksjonsnedsettelse (kilde: Bufdir)
          </li>
          <li>...</li>
        </ul>
      </details>
    </div>
  )
}
