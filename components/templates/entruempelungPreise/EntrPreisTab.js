import tab from "components/templates/entruempelungPreise/EntrPreisTab.module.css";

function EntrPreisTab() {
  return (
    <>
      <div className={tab.frame}>
        <table className={tab.table}>
          <caption className={tab.table__caption}>
            Was kostet Ihr Entrümpelung in Hamburg?
          </caption>
          <thead>
            <tr className={tab.data_row}>
              <th className={tab.th_left_top}>Menge an Hausrat</th>
              <th className={tab.th_top}>Wenig</th>
              <th className={tab.th_top}>Medium</th>
              <th className={tab.th_top}>Viel</th>
            </tr>
          </thead>
          <tbody>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Wohnung 50 m<sup>2</sup>
              </th>
              <td className={tab.data}>ab 700 €</td>
              <td className={tab.data}>ab 1.200 €</td>
              <td className={tab.data}>ab 2.450 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Haus 100 m<sup>2</sup>
              </th>
              <td className={tab.data}>ab 1.450 €</td>
              <td className={tab.data}>ab 2.350 €</td>
              <td className={tab.data}>ab 4.850 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Dachboden 25 m<sup>2</sup>
              </th>
              <td className={tab.data}>ab 390 €</td>
              <td className={tab.data}>ab 780 €</td>
              <td className={tab.data}>ab 1.250 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Garage 15 m<sup>2</sup>
              </th>
              <td className={tab.data}>ab 300 €</td>
              <td className={tab.data}>ab 500 €</td>
              <td className={tab.data}>ab 750 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Keller 15 m<sup>2</sup>
              </th>
              <td className={tab.data}>ab 300 €</td>
              <td className={tab.data}>ab 500 €</td>
              <td className={tab.data}>ab 750 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Küche 10 m<sup>2</sup>
              </th>
              <td className={tab.data}>ab 440 €</td>
              <td className={tab.data}>ab 590 €</td>
              <td className={tab.data}>ab 980 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Schuppen 10 m<sup>2</sup>
              </th>
              <td className={tab.data}>ab 400 €</td>
              <td className={tab.data}>ab 550 €</td>
              <td className={tab.data}>ab 890 €</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default EntrPreisTab;
