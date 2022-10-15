import './GoodVsBad.scss'

// export function MenuItems(props: { subRoutes: RouteObject[] }): JSX.Element {
//   const { subRoutes } = props

function Image(props: { src: string, alt?: string }): JSX.Element {
  const { src, alt } = props;
  return <img src={`/public/images/${src}`} alt={alt} />;
}

function LabelAndInput(props: { id: string, htmlFor?: string, labelText: string }): JSX.Element {
  const { id, htmlFor, labelText } = props;
  return (
    <>
      {htmlFor ? <label htmlFor={htmlFor}>{labelText}</label> : <div>{labelText}</div>}
      <input id={id} />
    </>
  );
}

function FlowerNils(props: { iconAlt?: string, imgAlt?: string }): JSX.Element {
  const { iconAlt, imgAlt } = props;
  return (
    <>
      <br />
      {/* Screen reader leser visst ikke opp title-attributt? */}
      <a href="#" title={imgAlt}>
        <Image src="flower_image.jpg" alt={imgAlt} />
      </a>
      <div>
        <span>BlomsterNils</span>
      </div>
      <div>
        <span>
          <Image src="phone.png" alt={iconAlt} />
          123 45 678
        </span>
      </div>
    </>
  );
}

export function GoodVsBad(): JSX.Element {
  return (
    <div className="good-vs-bad__wrapper">
      {/* bad  */}
      <div className="good-vs-bad good-vs-bad--bad">
        <div>
          <h3>Kjøp blomster hos oss</h3>
          <h2>Vi har de beste blomstene</h2>
          <div>
            <div>Fyll inn kontaktinformasjon</div>
            <LabelAndInput id="bad-input-1" labelText="Navn" />
            <LabelAndInput id="bad-input-2" labelText="Adresse" />

            <button onClick={() => alert("Skjema sendt inn!")}>
              <Image src="submit_button.png" />
            </button>
          </div>

          <FlowerNils />
        </div>

        <pre>Vis koden her</pre> 
      </div>
      {/* good  */}
      <div className="good-vs-bad good-vs-bad--good">
        <div>
          <h2>Kjøp blomster hos oss</h2>
          <h3>Vi har de beste blomstene</h3>
          <div>
            <form>
              <fieldset>
                <legend>Fyll inn kontaktinformasjon</legend>
            <LabelAndInput id="good-input-1" htmlFor="good-input-1" labelText="Navn" />
            <LabelAndInput id="good-input-2" htmlFor="good-input-2" labelText="Adresse" />

            <button onClick={() => alert("Skjema sendt inn!")} type="submit">
              <Image src="submit_button.png" alt="Send inn skjema" />
            </button>
            </fieldset>
            </form>
          </div>

          <FlowerNils iconAlt="Telefon: " imgAlt="Klikk for å se fine blomster" />
        </div>
        
        <pre>Vis koden her</pre> 
      </div>
    </div>
  )
}
