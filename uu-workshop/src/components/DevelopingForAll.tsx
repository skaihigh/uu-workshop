export function DevelopingForAll(): JSX.Element {
  return (
    <div className="examples">
      <a
        href="https://www.w3.org/WAI/tips/developing/"
        rel="noreferrer"
        target="_blank"
      >
        Developing for Web Accessibility
      </a>

      <div>
        <div className="section">
          <h3>Hvert input-felt må ha en tilknyttet label</h3>
          <ul>
            <li>
              <div className="flex-container">
                <pre className="white-bg column">
                  <label htmlFor="username">Brukernavn</label>
                  <input id="username" name="username" type="text" />
                </pre>
                <pre className="white-bg column">
                  &lt;label for=&quot;username&quot;&gt;Brukernavn&lt;/label&gt;
                  <br />
                  &lt;input id=&quot;username&quot; name=&quot;username&quot;
                  type=&quot;text&quot; /&gt;
                </pre>
              </div>
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>Bruk alternativ tekst for bilder</h3>
          <ul>
            <li>
              <div className="flex-container">
                <pre className="white-bg">
                  <img
                    src="/images/ikea.png"
                    alt="Du trenger en skrutrekker og en skiftenøkkel for å
                    sette sammen dette møbelet"
                  />
                </pre>
                <pre className="white-bg">
                  &lt;img src=&quot;/images/ikea.png&quot; alt=&quot;Du trenger
                  en skrutrekker og en skiftenøkkel for å sette sammen dette
                  møbelet&quot; /&gt;
                </pre>
              </div>
              <div className="flex-container">
                <div>
                  {/* Tom alt-tekst for bilder som er kun dekorative */}
                  <img width="100px" src="/images/pink_flower.png" alt="" />
                </div>
                <pre className="white-bg">
                  &lt;img src=&quot;/images/pink_flower.png&quot;
                  alt=&quot;&quot; /&gt;
                </pre>
              </div>
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>Angi språk for hele sider og kodesnutter</h3>
          <ul>
            <li>
              <div className="flex-container">
                <pre>&lt;html lang=&quot;en&quot;&gt;</pre>
                <pre>
                  &lt;p&gt;The title is &quot;&lt;span lang=&quot;fr&quot;&gt;Le
                  Bon Usage&lt;/span&gt;&quot;.&lt;/p&gt;
                </pre>
              </div>
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>Skriv HTML som formidler mening og struktur</h3>
          <ul>
            <li>
              <pre>
                &lt;section&gt;
                <br />
                {'  '}&lt;article&gt;
                <br />
                {'    '}&lt;h2&gt;Overskrift&lt;/h2&gt;
                <br />
                {'    '}&lt;time dateTime=&quot;2022-10-29&quot;&gt;29. oktober
                2022&lt;/time&gt;
                <br />
                {'    '}&lt;p&gt;Her er et avsnitt.&lt;/p&gt;
                <br />
                {'    '}&lt;aside&gt;
                <br />
                {'      '}&lt;h3&gt;En overskrift til&lt;/h3&gt;
                <br />
                {'      '}&lt;ul&gt;
                <br />
                {'        '}&lt;li&gt;
                <br />
                {'          '}&lt;a href=&quot;#&quot;&gt;Lenke til
                noe&lt;/a&gt;
                <br />
                {'        '}&lt;/li&gt;
                <br />
                {'        '}&lt;li&gt;
                <br />
                {'          '}&lt;a href=&quot;#&quot;&gt;Lenke til noe
                annet&lt;/a&gt;
                <br />
                {'        '}&lt;/li&gt;
                <br />
                {'      '}&lt;/ul&gt;
                <br />
                {'    '}&lt;/aside&gt;
                <br />
                {'  '}&lt;/article&gt;
                <br />
                &lt;/section&gt;
              </pre>
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>Hjelp brukerne med å unngå og rette opp feil</h3>
          <ul>
            <li>
              <div className="flex-container">
                <pre className="white-bg column">
                  <label htmlFor="phone">Telefon</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    pattern="^(\(?0[1-9]{1}\)?)?[0-9 -]*$"
                    aria-describedby="phone-desc"
                  />
                  <p id="phone-desc">F.eks. (47) 1234 1234</p>
                </pre>
                <pre>
                  &lt;label for=&quot;phone&quot;&gt;Telefon&lt;/label&gt;
                  <br />
                  &lt;input
                  <br />
                  {'  '}id=&quot;phone&quot;
                  <br />
                  {'  '}name=&quot;phone&quot;
                  <br />
                  {'  '}type=&quot;tel&quot;
                  <br />
                  {'  '}pattern=&quot;^(\(?0[1-9]{1}
                  \)?)?[0-9 -]*$&quot;
                  <br />
                  {'  '}aria-describedby=&quot;phone-desc&quot;
                  <br />
                  /&gt;
                  <br />
                  &lt;p id=&quot;phone-desc&quot;&gt;F.eks. (47) 1234
                  1234&lt;/p&gt;
                </pre>
              </div>
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>Leserekkefølge må reflekteres i koden</h3>
          <ul>
            <li>
              <div className="tab-order">
                <div className="tab-order__grid">
                  <a href="#">1</a>
                  <a href="#">3</a>
                  <a href="#">2</a>
                  <a href="#">5</a>
                  <a href="#">6</a>
                  <a href="#">4</a>
                </div>

                <pre>
                  &lt;div&gt;
                  <br />
                  {'  '}&lt;a href=&quot;#&quot;&gt;<strong>1</strong>&lt;/a&gt;
                  <br />
                  {'  '}&lt;a href=&quot;#&quot;&gt;<strong>3</strong>&lt;/a&gt;
                  <br />
                  {'  '}&lt;a href=&quot;#&quot;&gt;<strong>2</strong>&lt;/a&gt;
                  <br />
                  {'  '}&lt;a href=&quot;#&quot;&gt;<strong>5</strong>&lt;/a&gt;
                  <br />
                  {'  '}&lt;a href=&quot;#&quot;&gt;<strong>6</strong>&lt;/a&gt;
                  <br />
                  {'  '}&lt;a href=&quot;#&quot;&gt;<strong>4</strong>&lt;/a&gt;
                  <br />
                  &lt;/div&gt;
                </pre>
              </div>
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>Skriv kode som tilpasser seg til brukers enhet</h3>
          <ul>
            <li>
              <pre>
                .tab-order__grid &#123; <br />
                {'  '}display: grid; <br />
                {'  '}grid-template-columns: 1fr 1fr; <br />
                <br />
                {'  '}@media only screen and (min-width: 45em) &#123;
                <br />
                {'    '}grid-template-columns: 1fr 1fr 1fr; <br />
                {'  '}&#125; <br />
                &#125;
              </pre>
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>
            Ikke-standariserte, interaktive elementer må ha forklaring på hva de
            skal brukes til
          </h3>
          <ul>
            <li>
              <div className="flex-container">
                <pre className="white-bg">
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => alert('Lagret!')}
                    onKeyDown={() => alert('Lagret!')}
                  >
                    Lagre
                  </div>
                </pre>
                <pre>
                  &lt;div
                  <br />
                  {'  '}role=&quot;button&quot;
                  <br />
                  {'  '}tabIndex=&#123;0&#125;
                  <br />
                  {'  '}onClick=&#123;() =&gt; alert('Lagret!')&#125;
                  <br />
                  {'  '}onKeyDown=&#123;() =&gt; alert('Lagret!')&#125;
                  <br />
                  &gt;
                  <br />
                  {'  '}Lagre
                  <br />
                  &lt;/div&gt;
                </pre>
              </div>
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>
            Alle interaktive elementer må være tilgjengelige vha. keyboardet
          </h3>
          <ul>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <a href="#trapped-by-keyboard">
                Se &quot;Trapped by keyboard&quot;
              </a>{' '}
              <span style={{ fontSize: '2rem', marginLeft: '0.5rem' }}>
                &darr;
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
