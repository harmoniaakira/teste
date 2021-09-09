import React, {useState, useEffect} from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { Container, Title } from './styles'
import axios from 'axios'
import {
  osVersion,
  osName,
  fullBrowserVersion,
  browserVersion,
  browserName,
  mobileVendor,
  mobileModel,
  engineName,
  engineVersion,
  deviceType
} from "react-device-detect";
import { geolocated } from "react-geolocated";

const userGeolocationInitState = {
  coords: {
    longitude: 0,
    latitude: 0
  },
  timestamp: 0
}

const Home = (props) => {
  const { t } = useTranslation()
  const [userData, setUserData] = useState('');
  const [userGeolocation, setUserGeolocation] = useState(userGeolocationInitState);

  const getData = async () => {
    const res = await axios.get('https://ipapi.co/json/');
    setUserData(res.data);
  }
  
  const success = (pos) => {
    setUserGeolocation(pos)
  }

  const getCurrentPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success);
    } else {
        alert('Geolocation API is not supported!');
    }
  }

  useEffect( () => {
    getData();
    getCurrentPosition();
  }, [])

  return (
    <Container>
      <Title color="primary" component="h1" variant="h4" gutterBottom>
        <Trans>{t('general.welcome')}</Trans>
      </Title>
      
      <div style={{textAlign: 'left', margin: '0 auto', width: '360px'}}>
        <span><strong>Javascript:</strong> navigator.geolocation & userAgent</span><br/><br/>
        <span><strong>appCodeName:</strong>{navigator.appCodeName}</span><br/>
        <span><strong>appName:</strong>{navigator.appName}</span><br/>
        <span><strong>appVersion:</strong>{navigator.appVersion}</span><br/>
        <span><strong>platform:</strong>{navigator.platform}</span><br/>
        <span><strong>product:</strong>{navigator.product}</span><br/>
        <span><strong>vendor:</strong>{navigator.vendor}</span><br/>
        <span><strong>userAgent:</strong>{navigator.userAgent}</span><br/><br/>
        <button onClick={getCurrentPosition}>getCurrentPosition</button><br/>
        <span><strong>latitude :</strong> {userGeolocation.coords.latitude}</span><br/>
        <span><strong>longitude :</strong> {userGeolocation.coords.longitude}</span><br/>
        <span><strong>timestamp :</strong> {userGeolocation.timestamp}</span>
      </div><br/><br/>

      {/* <div style={{textAlign: 'left', margin: '0 auto', width: '360px'}}>
        <span><strong>https://www.npmjs.com/package/react-geolocated</strong></span><br/><br/>
        {
          !props.isGeolocationAvailable ? (
                <div>Your browser does not support Geolocation</div>
            ) : !props.isGeolocationEnabled ? (
                <div>Geolocation is not enabled</div>
            ) : props.coords ? (
                <table>
                    <tbody>
                        <tr>
                            <td>latitude</td>
                            <td>{props.coords.latitude}</td>
                        </tr>
                        <tr>
                            <td>longitude</td>
                            <td>{props.coords.longitude}</td>
                        </tr>
                        <tr>
                            <td>altitude</td>
                            <td>{props.coords.altitude}</td>
                        </tr>
                        <tr>
                            <td>heading</td>
                            <td>{props.coords.heading}</td>
                        </tr>
                        <tr>
                            <td>speed</td>
                            <td>{props.coords.speed}</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <div>Getting the location data&hellip; </div>
            )}
      </div> */}

      <div style={{width: '360px', height: '1px', backgroundColor: 'black', margin: '0 auto'}}></div><br/>

      <div style={{textAlign: 'left', margin: '0 auto', width: '360px'}}>
        <span><strong>https://www.npmjs.com/package/react-device-detect</strong></span><br/><br/>
        <span><strong>osVersion: </strong>{osVersion}</span><br/>
        <span><strong>osName: </strong>{osName}</span><br/>
        <span><strong>fullBrowserVersion: </strong>{fullBrowserVersion}</span><br/>
        <span><strong>browserVersion: </strong>{browserVersion}</span><br/>
        <span><strong>browserName: </strong>{browserName}</span><br/>
        <span><strong>mobileVendor: </strong>{mobileVendor}</span><br/>
        <span><strong>mobileModel: </strong>{mobileModel}</span><br/>
        <span><strong>engineName: </strong>{engineName}</span><br/>
        <span><strong>engineVersion: </strong>{engineVersion}</span><br/>
        <span><strong>deviceType: </strong>{deviceType}</span><br/><br/>
      </div>

      <div style={{width: '360px', height: '1px', backgroundColor: 'black', margin: '0 auto'}}></div><br/>

      <div style={{textAlign: 'left', margin: '0 auto', width: '360px'}}>
        <span><strong>API:</strong> https://ipapi.co/json/</span><br/><br/>
        <span><strong>ip :</strong> {userData.ip}</span><br/>
        <span><strong>version :</strong> {userData.version}</span><br/>
        <span><strong>city :</strong> {userData.city}</span><br/>
        <span><strong>region :</strong> {userData.region}</span><br/>
        <span><strong>region_code :</strong> {userData.region_code}</span><br/>
        <span><strong>country :</strong> {userData.country}</span><br/>
        <span><strong>country_name :</strong> {userData.country_name}</span><br/>
        <span><strong>country_code :</strong> {userData.country_code}</span><br/>
        <span><strong>country_code_iso3 :</strong> {userData.country_code_iso3}</span><br/>
        <span><strong>country_capital :</strong> {userData.country_capital}</span><br/>
        <span><strong>country_tld :</strong> {userData.country_tld}</span><br/>
        <span><strong>continent_code :</strong> {userData.continent_code}</span><br/>
        <span><strong>in_eu :</strong> {userData.in_eu}</span><br/>
        <span><strong>postal :</strong> {userData.postal}</span><br/>
        <span><strong>latitude :</strong> {userData.latitude}</span><br/>
        <span><strong>longitude :</strong> {userData.longitude}</span><br/>
        <span><strong>timezone :</strong> {userData.timezone}</span><br/>
        <span><strong>utc_offset :</strong> {userData.utc_offset}</span><br/>
        <span><strong>country_calling_code :</strong> {userData.country_calling_code}</span><br/>
        <span><strong>currency :</strong> {userData.currency}</span><br/>
        <span><strong>currency_name :</strong> {userData.currency_name}</span><br/>
        <span><strong>languages :</strong> {userData.languages}</span><br/>
        <span><strong>country_area :</strong> {userData.country_area}</span><br/>
        <span><strong>country_population :</strong> {userData.country_population}</span><br/>
        <span><strong>asn :</strong> {userData.asn}</span><br/>
        <span><strong>org :</strong> {userData.org}</span><br/><br/>
      </div>
    </Container>
  )
}

export default geolocated({
  positionOptions: {
      enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Home);
