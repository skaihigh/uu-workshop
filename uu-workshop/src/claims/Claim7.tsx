export function Claim7(): JSX.Element {
  return (
    <div className="claims">
      <h3>
        Argumenter <i>for</i>:
      </h3>
      <ul className="disc-list">
        <li>Blabla</li>
        <li>Blabla</li>
      </ul>
      <h3>
        {' '}
        Argumenter <i>mot</i>:
      </h3>
      <ul className="disc-list">
        <li>
          Hvis man skal lage egendefinerte komponenter (som f.eks. en dropdown
          som ikke bruker HTML’s select-tag), må man implementere all innebygd
          funksjonalitet som select-tag’et har, i den egendefinerte komponenten
        </li>
        <li>Blabla</li>
      </ul>
    </div>
  )
}
