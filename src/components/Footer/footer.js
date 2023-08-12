import "./footer.css";
import logo from "../../assets/images header/amazonlogo3.jpg";
import egypt from "../../assets/images header/downloadlan.png";
import { useTranslation } from 'react-i18next';
import { useContext, useEffect, useState } from "react";
import { langContext } from "../../context/lang";
const Footer = () => {
  const { t, i18n } = useTranslation();
  var { lang } = useContext(langContext)
  const [textdir, settextdir] = useState('left')
  return (
    <>
      <button className="back" onClick={() => window.scroll(0,0)}>{t('Backtotop')}</button>
      <footer id="footer1"
      
      >
        <div className="f1section1"
          style={{ textAlign: `${lang == 'en' ? 'left' : 'right'}`, fontWeight: `${lang == 'en' ? '300' : 'bold'}` }}
        >
          <div className="col1">
            <h5>{t('Gettoknowus')}</h5>
            <a href="/">{t('careers')}</a>
            <a href="/">{t('Blog')}</a>
            <a href="/">{t('AboutAmazon')}</a>
            <a href="/">{t('InvestorRelations')}</a>
            <a href="/">{t('AmazonDevicse')}</a>
          </div>

          <div className="col3">
            <h5>{t('AmazonPaymentProducts')}</h5>
            <a href="/">{t('AmazonBusinessCard')}</a>
            <a href="/">{t('ShopwithPoints')}</a>
            <a href="/">{t('ReloadYourBalance')}</a>
            <a href="/">{t('AmazonCurrencyConverter')}</a>
          </div>
          <div className="col2">
            <h5>{t('MakeMonywithUs')} </h5>
            <a href="/">{t('SellProductsonAmazon')}</a>
            <a href="/">{t('SellonAmazonBusiness')}</a>
            <a href="/">{t('SellappsonAmazon')}</a>
            <a href="/">{t('BecomeanAffiliate')}</a>
            <a href="/">{t('AdvertiseYourProducts')}</a>
            <a href="/">{t('Self-PublishwithUs')}</a>
            <a href="/">{t('HostanAmazonHub')}</a>
          </div>

          <div className="col4">
            <h5>{t('LetUsHelpYou')}</h5>
            <a href="/">{t('AmazonandCOVID-19')}</a>
            <a href="/">{t('YourAccount')}</a>
            <a href="/">{t('YourOrders')}</a>
            <a href="/">{t('ShippingRates&Policies')}</a>
            <a href="/">{t('Returns&Replacmenta')}</a>
            <a href="/">{t('Help')}</a>
          </div>
        </div>
        <div>
          <nav className="navfooter1">
            <div id="secondlogo" style={{ fontSize: "1.4vw", fontWeight: `${lang == 'en' ? '300' : 'bolder'}` }}>
              <a href="/" className="logo1">
                {" "}
              </a>
              <a href="/" style={{ marginLeft: "10%" }}>
                {" "}
                <img src={logo} alt="logo" width="100px" />
              </a>
              <div>
                <a href="/" style={{ alignItems: "center", fontSize: "1.1vw", fontWeight: `${lang == 'en' ? '300' : 'bold'}` }} >
                  <span style={{ paddingLeft: "5px" }}>{t('English1')}</span>{" "}
                </a>

                <a href="/" >
                  <img src={egypt} alt="" width="6%" />
                  <div className="d-inline me-1 ms-1" style={{ fontSize: "1.1vw", fontWeight: `${lang == 'en' ? '300' : 'bold'}` }}>
                    <span>{t('Egypt')}</span>
                  </div>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </footer>
      <footer id="footer2">
        <div className="f2section1" style={{ textAlign: `${lang == 'en' ? 'left' : 'right'}`, fontWeight: `${lang == 'en' ? '300' : 'bold'}` }}>
          <table className="fTable">
            <tbody>
              <tr className="table-footer">
                <td>
                  {" "}
                  <a href="/">
                    <span>{t('AmazonMusic')} </span>{t('Streammillionsofsongs')}
                  </a>
                </td>
                <td>
                  <a href="/">
                    <span>{t('AmazonAdvertising')}</span>{t('Find,attract,andengagecustomers')}
                  </a>
                </td>
                <td>
                  <a href="/">
                    <span>{t('6pm')}</span>{t('Scoredealsonfashionbrands')}
                  </a>
                </td>
                <td>
                  <a href="/">
                    <span>{t('AbeBooks')}</span>{t('Books,art&collectibles')}
                  </a>
                </td>
                <td>
                  <a href="/">
                    <span>{t('ACX')}</span>{t('AudiobookPublishingMadeEasy')}
                  </a>
                </td>
                <td>
                  <a href="/">
                    <span>{t('SellonAmazon')}</span>{t('StartaSellingAccount')}
                  </a>
                </td>
                <td>
                  <a href="/">
                    <span>{t('AmazonBusiness')}</span>{t('EverythingForYourBusiness')}
                  </a>
                </td>
              </tr>
              <tr className="table-footer">
                <td>
                  {" "}
                  <a href="/">
                    <span>{t('AmazonGlobal')}</span>{t('ShipOrdersInternationally')}
                  </a>
                </td>
                <td>
                  <a href="/">
                    <span>{t('HomeServices')}</span>{t('ExperiencedProsHappinessGuarantee')}
                  </a>
                </td>
                <td>
                  <a href="/">
                    <span>{t('AmazonIgnite')}</span>{t('SellyouroriginalDigitalEducationalResources')}
                  </a>
                </td>
                <td>
                  <a href="/">
                    <span>{t('AmazonWebServices')}</span>{t('ScalableCloudComputingServices')}
                  </a>
                </td>
                <td>
                  <a href="/">
                    <span>{t('Audible')}</span>{t('ListentoBooks&OriginalAudioPerformances')}
                  </a>
                </td>
                <td>
                  <a href="/">
                    <span>{t('BookDepository')} </span>{t('BooksWithFreeDeliveryWorldwide')}
                  </a>
                </td>
                <td>
                  <a href="/">
                    <span>{t('BoxOfficeMojo')}</span>{t('FindMovieBoxOfficeData')}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="endfooter" style={{ textAlign: `${lang == 'en' ? 'left' : 'right'}`, fontWeight: `${lang == 'en' ? '300' : 'bold'}` }}>
          <div id="endfooterlinks">
            <a href="/">{t('ConditionsofUse')} </a>
            <a href="/">{t('PrivacyNotice')}</a>
            <a href="/">{t('YourAdsPrivacyChoices')}</a>
          </div>
          <div>
            <p>{t('©1996-2023,Amazon.com,Inc.oritsaffiliates')}</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;