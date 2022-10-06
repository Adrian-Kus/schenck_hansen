import tab from "components/templates/entruempelungPreise/EntrPreisTabPhone.module.css";

function EntrPreisTabPhone() {
  return (
    <>
      <div className={tab.frame}>
        <table className={tab.table}>
          <caption className={tab.table__caption}>
            Was kostet eine Entrümpelung mit wenig Hausrat?
          </caption>
          <thead>
            <tr className={tab.data_row}>
              <th className={tab.th_left_top}>Menge an Hausrat</th>
              <th className={tab.th_top}>Wenig</th>
            </tr>
          </thead>
          <tbody>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Wohnung 50 m<sup>2</sup>
              </th>
              <td className={tab.data}>ab 700 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Haus 100 m<sup>2</sup>
              </th>
              <td className={tab.data}>ab 1.450 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Dachboden 25 m<sup>2</sup>
              </th>
              <td className={tab.data}>ab 390 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Garage 15 m<sup>2</sup>
              </th>
              <td className={tab.data}>ab 300 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Keller 15 m<sup>2</sup>
              </th>
              <td className={tab.data}>ab 300 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Küche 10 m<sup>2</sup>
              </th>
              <td className={tab.data}>ab 440 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Schuppen 10 m<sup>2</sup>
              </th>
              <td className={tab.data}>ab 400 €</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={tab.frame}>
        <table className={tab.table}>
          <caption className={tab.table__caption}>
            Was kostet eine Entrümpelung mit medium Hausrat?
          </caption>
          <thead>
            <tr className={tab.data_row}>
              <th className={tab.th_left_top}>Menge an Hausrat</th>
              <th className={tab.th_top}>Medium</th>
            </tr>
          </thead>
          <tbody>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Wohnung 50 m<sup>2</sup>
              </th>
              <td className={tab.data}>ab 1.200 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Haus 100 m<sup>2</sup>
              </th>
              <td className={tab.data}>ab 2.350 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Dachboden 25 m<sup>2</sup>
              </th>
              <td className={tab.data}>ab 780 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Garage 15 m<sup>2</sup>
              </th>
              <td className={tab.data}>ab 500 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Keller 15 m<sup>2</sup>
              </th>
              <td className={tab.data}>ab 500 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Küche 10 m<sup>2</sup>
              </th>
              <td className={tab.data}>ab 590 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Schuppen 10 m<sup>2</sup>
              </th>
              <td className={tab.data}>ab 550 €</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={tab.frame}>
        <table className={tab.table}>
          <caption className={tab.table__caption}>
            Was kostet eine Entrümpelung mit viel Hausrat?
          </caption>
          <thead>
            <tr className={tab.data_row}>
              <th className={tab.th_left_top}>Menge an Hausrat</th>
              <th className={tab.th_top}>Viel</th>
            </tr>
          </thead>
          <tbody>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Wohnung 50 m<sup>2</sup>
              </th>
              <td className={tab.data}>ab 2.450 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Haus 100 m<sup>2</sup>
              </th>
              <td className={tab.data}>ab 4.850 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Dachboden 25 m<sup>2</sup>
              </th>
              <td className={tab.data}>ab 1.250 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Garage 15 m<sup>2</sup>
              </th>
              <td className={tab.data}>ab 750 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Keller 15 m<sup>2</sup>
              </th>
              <td className={tab.data}>ab 750 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Küche 10 m<sup>2</sup>
              </th>
              <td className={tab.data}>ab 980 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>
                Schuppen 10 m<sup>2</sup>
              </th>
              <td className={tab.data}>ab 890 €</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default EntrPreisTabPhone;
