import './App.css';

function App() {
  const logoStyle = {
    width: '100%',
    maxWidth: '300px',
  };

  return (
    <table cellPadding="0" cellSpacing="0">
      <tbody>
        <tr className="top">
          <td colSpan="2">
            <table>
              <tbody>
                <tr>
                  <td className="title">
                    <img
                      src="cai_logo.svg"
                      style={logoStyle}
                      alt="logo"
                    />
                  </td>

                  <td>
                    Invoice #: 39291 <br />
                    Created: 17/07/2021 <br />
                    Due: 17/08/2021
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>

        <tr className="information">
          <td colSpan="2">
            <table>
              <tbody>
                <tr>
                  <td>
                    collectAI GmbH.
                    <br />
                    20457 Hamburg
                    <br />
                    Hamburg, Germany
                  </td>

                  <td>
                    Acme, GmbH.
                    <br />
                    Bob Hans Jens, The Great <br />
                    youknowit@star-wars-is-real.pew
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>

        <tr className="heading">
          <td>Item</td>

          <td>Price</td>
        </tr>

        <tr className="item last">
          <td>Death Star</td>
          <td>1100,39 EUR</td>
        </tr>
        <tr className="item last">
          <td>Star destroyer</td>
          <td>399,99 EUR</td>
        </tr>

        <tr className="total">
          <td></td>

          <td>Total: 1500,38 EUR</td>
        </tr>
        <tr className="vat">
          <td></td>
          <td>VAT (19%): 285,07 EUR</td>
        </tr>
      </tbody>
    </table>
  );
}

export default App;
