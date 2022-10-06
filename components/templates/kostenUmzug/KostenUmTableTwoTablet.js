import tab from "components/templates/kostenUmzug/KostenUmTableTablet.module.css";

function KostenUmTableTwoTablet() {
  return (
    <>
      <div className={tab.frame}>
        <table className={tab.table}>
          <caption className={tab.table__caption}>
            Was kosten kleine Fernumzüge ab Hamburg?
          </caption>
          <thead>
            <tr className={tab.data_row}>
              <th className={tab.th_left_top}>Wohnungsgröße</th>
              <th className={tab.th_top}>
                bis 45 m<sup>2</sup>
              </th>
              <th className={tab.th_top}>
                bis 75 m<sup>2</sup>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>Bremen</th>
              <td className={tab.data}>ab 1.200 €</td>
              <td className={tab.data}>ab 1.700 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>Berlin</th>
              <td className={tab.data}>ab 1.600 €</td>
              <td className={tab.data}>ab 2.500 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>Düsseldorf</th>
              <td className={tab.data}>ab 2.300 €</td>
              <td className={tab.data}>ab 3.600 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>Frankfurt am Main</th>
              <td className={tab.data}>ab 2.700 €</td>
              <td className={tab.data}>ab 4.000 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>München</th>
              <td className={tab.data}>ab 3.400 €</td>
              <td className={tab.data}>ab 5.000 €</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={tab.frame}>
        <table className={tab.table}>
          <caption className={tab.table__caption}>
            Was kosten große Fernumzüge ab Hamburg?
          </caption>
          <thead>
            <tr className={tab.data_row}>
              <th className={tab.th_left_top}>Wohnungsgröße</th>
              <th className={tab.th_top}>
                bis 100 m<sup>2</sup>
              </th>
              <th className={tab.th_top}>
                bis 120 m<sup>2</sup>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>Bremen</th>
              <td className={tab.data}>ab 2.400 €</td>
              <td className={tab.data}>ab 2.800 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>Berlin</th>
              <td className={tab.data}>ab 3.600 €</td>
              <td className={tab.data}>ab 4.000 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>Düsseldorf</th>
              <td className={tab.data}>ab 4.400 €</td>
              <td className={tab.data}>ab 4.900 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>Frankfurt am Main</th>
              <td className={tab.data}>ab 5.300 €</td>
              <td className={tab.data}>ab 5.600 €</td>
            </tr>
            <tr className={tab.data_row}>
              <th className={tab.th_left}>München</th>
              <td className={tab.data}>ab 6.800 €</td>
              <td className={tab.data}>ab 7.300 €</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default KostenUmTableTwoTablet;
