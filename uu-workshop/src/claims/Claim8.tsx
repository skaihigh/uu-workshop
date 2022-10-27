export function Claim8(): JSX.Element {
  return (
    <div className="claims">
      <h3>
        Argumenter <i>for</i>:
      </h3>
      <details>
        <summary>?</summary>
        <ul className="disc-list">
          <li>&quot;If it quacks like a duck...&quot;</li>
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
            Hvis man skal lage egendefinerte komponenter (som f.eks. en dropdown
            som ikke bruker HTML’s select-tag), må man implementere <i>all</i>{' '}
            innebygd funksjonalitet som det tag’et har, i den egendefinerte
            komponenten
          </li>
          <li>...</li>
        </ul>
      </details>
    </div>
  )
}
