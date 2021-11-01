import { ContainerPage } from 'components/Layout/Layout.styles'
import { MobileView } from 'components/Layout/Layout.styles'
import Stepper from 'components/Stepper'
import AwareService from 'resources/aware-service'
import React, { useEffect, useState, useRef } from 'react'
import {
  CameraWrapper,
  Camera,
  FrameWrapper,
  Frame
} from './Home.styles'

const knomi_url_host = 'https://mobileauth.aware-demos.com/knomi';
const endpoint_roi = '/calculateROI';
const imageWidth = 480;
const imageHeight = 640;
const portrait_width = 480;
const portrait_height = 640;
const landscape_width = 1280;
const landscape_height = 720;
const autocapture_roi_line_width = 5;
const autocapture_roi_portrait_top_margin = 10;

const calculateROI_payload = {
  preface: {
    profile: {
      name: "knomi_charlie_server.xml"
    },
    resolution: {
      width: 480,
      height: 640
    }
  }
};

const media_constraints_desktop_template = {
  audio: false,
  video: {
    width: {
      min: "%IMAGE_WIDTH%",
      max: "%IMAGE_WIDTH%"
    },
    height: {
      min: "%IMAGE_HEIGHT%",
      max: "%IMAGE_HEIGHT%"
    }
  }
};

const media_constraints_mobile_template = {
  audio: false,
  video: true
};

const constraintsInternalLandscape = {
  audio: false,
  video: {
    width: { min: 1024, ideal: 1280, max: 1920 },
    height: { ideal: 720, max: 1080 }
  }
};

const Home = () => {
  const [autocaptureROI, setAutocaptureROI] = useState({height: 0,
    width: 0,
    x: 0,
    y: 0
  })
  const [constraints_json, setConstraints_json] = useState({video: true})
  const [appOrientation, setAppOrientation] = useState(null)
  const [previewWidth, setPreviewWidth] = useState(null)
  const [previewHeight, setPreviewHeight] = useState(null)
  const [error, setError] = useState()
  const cameraRef = useRef(null)
  const frameRef = useRef(null)

  const isMobileDevice = () => {
    if (navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/CriOS/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/Android/i)) {
      return true;
    }
    else {
      return false;
    }
  }

  const escapeRegExp = (str) => {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  }

  const replaceAll = (str, find, replace) => {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
  }

  const getURLVars = () => {
    let vars = {};
    let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      vars[key] = value;
    });
    return vars;
  }

  const getURLParameter = (parameter, defaultvalue) => {
    let urlparameter = defaultvalue;
    if (window.location.href.indexOf(parameter) > -1) {
      urlparameter = getURLVars()[parameter];
    }
    return urlparameter;
  }

  const showGoodIndicator = () => {
    drawIndicator('green');
  }

  const showBadIndicator = () => {
    drawIndicator('red');
  }

  const drawIndicator = (color) => {
    const canvas = frameRef.current;

    if (!canvas) return
    const ctx = canvas.getContext('2d');
    if (!ctx) return

    var roiX = (appOrientation === "portrait") ? autocaptureROI.x : (landscape_width - imageWidth) / 2 + autocaptureROI.x;
    var roiY = (appOrientation === "portrait") ? autocaptureROI.y + autocapture_roi_portrait_top_margin : (landscape_height - imageHeight) / 2 + autocaptureROI.y;
    var roiWidth = autocaptureROI.width;
    var roiHeight = autocaptureROI.height;
    var radius = roiHeight / 3;

    canvas.width = previewWidth;
    canvas.height = previewHeight;

    ctx.lineWidth = autocapture_roi_line_width;
    ctx.clearRect(0, 0, previewWidth, previewHeight);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, previewWidth, previewHeight);

    ctx.globalCompositeOperation = 'destination-out';

    // top arc
    ctx.beginPath();
    ctx.fillStyle = "rgba(0,0,0,1)";
    ctx.arc(roiX + roiWidth / 2, roiY + radius, radius, Math.PI, 2 * Math.PI);
    ctx.fill();

    // bottom arc
    ctx.beginPath();
    ctx.fillStyle = "rgba(0,0,0,1)";
    ctx.arc(roiX + roiWidth / 2, roiY + roiHeight - radius, radius, 0, Math.PI);
    ctx.fill();

    // offset - fill the blanks
    const offset_x = 1;
    const offset_y = 2;
    ctx.clearRect(roiX + roiWidth / 2 - radius - offset_x,
      roiY + radius - offset_x,
      2 * radius + offset_x,
      roiHeight - 2 * radius + offset_y);

    ctx.globalCompositeOperation = 'source-over';

    // outline
    // top arc
    ctx.beginPath();
    ctx.arc(roiX + roiWidth / 2, roiY + radius, radius, Math.PI, 2 * Math.PI);
    ctx.strokeStyle = color;
    ctx.stroke();

    // bottom arc
    ctx.beginPath();
    ctx.arc(roiX + roiWidth / 2, roiY + roiHeight - radius, radius, 0, Math.PI);
    ctx.strokeStyle = color;
    ctx.stroke();

    // sidelines
    ctx.beginPath();
    ctx.moveTo(roiX + roiWidth / 2 - radius, roiY + radius);
    ctx.lineTo(roiX + roiWidth / 2 - radius, roiY + roiHeight - radius);
    ctx.strokeStyle = color;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(roiX + roiWidth / 2 + radius, roiY + radius);
    ctx.lineTo(roiX + roiWidth / 2 + radius, roiY + roiHeight - radius);
    ctx.strokeStyle = color;
    ctx.stroke();
  }

  const handleMediaInitializeSuccess = (localMediaStream) => {
    console.log('1')
    const video = cameraRef.current;
    video.srcObject = localMediaStream;
  }

  const initializeVideo = () => {
    return navigator.mediaDevices.getUserMedia(constraints_json)
      .then(handleMediaInitializeSuccess);
  }

  const initializeCamera = () => {
    initializeVideo().then(() => {
      console.log("Camera initilized.");
      showBadIndicator();
    });
  }

  const requestROI = () => {
    var payload = calculateROI_payload;
    payload.preface.resolution.width = imageWidth;
    payload.preface.resolution.height = imageHeight;
    AwareService.calculateROI(payload, endpoint_roi).then((res) => {
      console.log('requestROI response: ', res);
      setAutocaptureROI(res.preface);
    });
  }

  useEffect(() => {
    let orientation = getURLParameter("resolution", isMobileDevice() ? "portrait" : "landscape");
    setAppOrientation(orientation);

    let prevWidth = (orientation === "portrait") ? portrait_width : landscape_width;
    let prevHeight = (orientation === "portrait") ? portrait_height : landscape_height;
    setPreviewWidth(prevWidth);
    setPreviewHeight(prevHeight);

    let constraints= isMobileDevice() ? JSON.stringify(media_constraints_mobile_template) : JSON.stringify(media_constraints_desktop_template);
    constraints = replaceAll(constraints, "%IMAGE_WIDTH%", previewWidth);
    constraints = replaceAll(constraints, "%IMAGE_HEIGHT%", previewHeight);
    setConstraints_json(JSON.parse(constraints));

    requestROI();
  }, [cameraRef])

  useEffect(() => {
    console.log('autorequestROI: ', autocaptureROI);
    initializeCamera();
  }, [autocaptureROI])

  return (
    <ContainerPage>
      <MobileView>
        <Stepper />
        {
          error
            ? <p style={{ color: 'red' }}>{error}</p>
            : ''
        }
        <CameraWrapper>
          <Camera ref={cameraRef} autoPlay />
          <Frame ref={frameRef} width="1280" height="720" />
        </CameraWrapper>
      </MobileView>
    </ContainerPage>
  )
}

export default Home
