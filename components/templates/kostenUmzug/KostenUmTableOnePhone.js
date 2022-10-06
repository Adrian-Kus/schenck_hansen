import tab from "components/templates/kostenUmzug/KostenUmTablePhone.module.css";

function KostenUmTableOnePhone() {
  return (
    <>
      <div className={tab.frame}>
        <table className={tab.table}>
          <caption className={tab.table__caption}>
            Was kostet ein Umzug bis 60 m<sup>2</sup> in Hamburg?
          </caption>
          <thead>
            <tr className={tab.data_row}>
              <th className={tab.th_left_top}>Wohnungsgröße</th>
              <th className={tab.th_top}>
                1 - 2 Zimmer
                <br />
                bis 60 m<sup>2</sup>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>Umzugskosten</th>
              <td className={tab.data}>ab 450 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Abbau und Aufbau
                <br />
                Ihrer Möbel
              </th>
              <td className={tab.data}>ab 60 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>Umzugskartons</th>
              <td className={tab.data}>ab 60 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>Packmaterial</th>
              <td className={tab.data}>ab 60 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Halteverbotszone
                <br />
                je Stück
              </th>
              <td className={tab.data}>ab 120 €</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={tab.frame}>
        <table className={tab.table}>
          <caption className={tab.table__caption}>
            Was kostet ein Umzug bis 80 m<sup>2</sup> in Hamburg?
          </caption>
          <thead>
            <tr className={tab.data_row}>
              <th className={tab.th_left_top}>Wohnungsgröße</th>
              <th className={tab.th_top}>
                2 - 3 Zimmer
                <br />
                bis 80 m<sup>2</sup>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>Umzugskosten</th>
              <td className={tab.data}>ab 650 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Abbau und Aufbau
                <br />
                Ihrer Möbel
              </th>
              <td className={tab.data}>ab 90 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>Umzugskartons</th>
              <td className={tab.data}>ab 150 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>Packmaterial</th>
              <td className={tab.data}>ab 150 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Halteverbotszone
                <br />
                je Stück
              </th>
              <td className={tab.data}>ab 120 €</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={tab.frame}>
        <table className={tab.table}>
          <caption className={tab.table__caption}>
            Was kostet ein Umzug bis 120 m<sup>2</sup> in Hamburg?
          </caption>
          <thead>
            <tr className={tab.data_row}>
              <th className={tab.th_left_top}>Wohnungsgröße</th>
              <th className={tab.th_top}>
                3 - 4 Zimmer
                <br />
                bis 120 m<sup>2</sup>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>Umzugskosten</th>
              <td className={tab.data}>ab 1.100 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Abbau und Aufbau
                <br />
                Ihrer Möbel
              </th>
              <td className={tab.data}>ab 150 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>Umzugskartons</th>
              <td className={tab.data}>ab 250 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>Packmaterial</th>
              <td className={tab.data}>ab 250 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Halteverbotszone
                <br />
                je Stück
              </th>
              <td className={tab.data}>ab 120 €</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={tab.frame}>
        <table className={tab.table}>
          <caption className={tab.table__caption}>
            Was kostet ein Umzug ab 100 m<sup>2</sup> in Hamburg?
          </caption>
          <thead>
            <tr className={tab.data_row}>
              <th className={tab.th_left_top}>Wohnungsgröße</th>
              <th className={tab.th_top}>
                Haus
                <br />
                ab 100 m<sup>2</sup>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>Umzugskosten</th>
              <td className={tab.data}>ab 1.500 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Abbau und Aufbau
                <br />
                Ihrer Möbel
              </th>
              <td className={tab.data}>ab 200 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>Umzugskartons</th>
              <td className={tab.data}>ab 250 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>Packmaterial</th>
              <td className={tab.data}>ab 250 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Halteverbotszone
                <br />
                je Stück
              </th>
              <td className={tab.data}>ab 120 €</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default KostenUmTableOnePhone;
