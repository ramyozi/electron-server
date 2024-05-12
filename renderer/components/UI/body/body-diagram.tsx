import React, { useState } from 'react';

const styles = `
    svg {
        width: auto;
        height: 500px;
        margin: 0 auto;
        display: block;
    }
    
    .outline {
        fill: none;
        stroke: #3d3e3f;
    }
    
    body * {
        stroke: #3d3e3f;
        cursor: pointer;
        transition: 800ms ease;
    }
    
    .hand-right,
    .forearm-right,
    .arm-right,
    .hand-left,
    .forearm-left,
    .arm-left,
    .head,
    .torso-upper,
    .torso-lower,
    .thigh-right,
    .calf-right,
    .foot-right,
    .thigh-left,
    .calf-left,
    .foot-left {
        fill: #fff;
    }
    
    .hand-right:hover,
    .forearm-right:hover,
    .arm-right:hover,
    .hand-left:hover,
    .forearm-left:hover,
    .arm-left:hover,
    .head:hover,
    .torso-upper:hover,
    .torso-lower:hover,
    .thigh-right:hover,
    .calf-right:hover,
    .foot-right:hover,
    .thigh-left:hover,
    .calf-left:hover,
    .foot-left:hover {
        fill: #3aaaff;
        stroke: #3aaaff;
    }
    
    .body-svg path {
        fill: #000;
        stroke: #3d3e3f;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .body-svg path.selected {
        fill: #f00;
        stroke: #3aaaff;
    }
`;

const BodyDiagram = ({ onClick, selectedPart }) => {


    return (

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198.81 693.96" id="body" className="body-svg" style={
            {display: 'block', margin: '0 auto', width: 'auto', height: '800px'}
        }>

            <path id="thigh-right" className={`thigh-right ${selectedPart === 'thigh-right' ? 'selected' : ''}`}
                  onClick={(event: React.MouseEvent<SVGPathElement, MouseEvent>) => onClick('thigh-right', event)}
                  d="M35.11,508.33c1.67-14.63,4.15-24,4.67-31.36,0.8-11.31-5.26-89.88-4.46-111.07L97,368.29s0.32,12.43-2.07,21-7.33,19-7.33,33.78-2.23,48.45-6.53,62.31c-3.08,9.94-7,16-7.48,22.91H35.11Z"
                  transform="translate(0.5 0.5)"/>
            <path id="calf-right" className={`calf-right ${selectedPart === 'calf-right' ? 'selected' : ''}`}
                  onClick={() => onClick('calf-right')}
                  d="M52.37,640.8c0.48-6.53-4.14-41.75-8.76-55.3s-10-16.25-10-48.76a248.59,248.59,0,0,1,1.54-28.4H73.57a21.52,21.52,0,0,0,1.27,8.8c4,11.47,4.62,37.45.48,54.5s-1.75,52.27-1.44,55.3Z"
                  transform="translate(0.5 0.5)"/>
            <path id="foot-right" className={`foot-right ${selectedPart === 'foot-right' ? 'selected' : ''}`}
                  onClick={() => onClick('foot-right')}
                  d="M73.88,626.94c0.32,3,3.35,6.05,4.94,12.91s-3.51,9.56-1.75,20.4,2.55,31.56-3.35,32.51S66.39,691,66.39,691c-5.9.48-22.79,0.16-25.66-3.19s6.85-26.93,7.81-30.28,0.8-6.69.91-9.4,2.92-7.33,2.92-7.33Z"
                  transform="translate(0.5 0.5)"/>


            <path id="thigh-left" className={`thigh-left ${selectedPart === 'thigh-left' ? 'selected' : ''}`}
                  onClick={() => onClick('thigh-left')}
                  d="M162.7,508.33c-1.67-14.63-4.15-24-4.67-31.36-0.8-11.31,5.26-89.88,4.46-111.07l-61.67,2.39s0.32,12.43,2.07,21,7.33,19,7.33,33.78,2.23,48.45,6.53,62.31c3.08,9.94,7,16,7.48,22.91H162.7Z"
                  transform="translate(0, 0)"/>
            <path id="calf-left" className={`calf-left ${selectedPart === 'calf-left' ? 'selected' : ''}`}
                  onClick={() => onClick('calf-left')}
                  d="M145.44,640.8c-0.48-6.53,4.14-41.75,8.76-55.3s10-16.25,10-48.76a248.59,248.59,0,0,0-1.54-28.4H124.24a21.52,21.52,0,0,1-1.27,8.8c-4,11.47-4.62,37.45-.48,54.5s1.75,52.27,1.44,55.3Z"
                  />
            <path id="foot-left" className={`foot-left ${selectedPart === 'foot-left' ? 'selected' : ''}`}
                  onClick={() => onClick('foot-left')}
                  d="M123.93,626.94c-0.32,3-3.35,6.05-4.94,12.91s3.51,9.56,1.75,20.4-2.55,31.56,3.35,32.51,7.33-1.75,7.33-1.75c5.9,0.48,22.79.16,25.66-3.19s-6.85-26.93-7.81-30.28-0.8-6.69-.91-9.4-2.92-7.33-2.92-7.33Z"
                  transform="translate(0.5 0.5)"/>


            <path id="torso-upper" className={`torso-upper ${selectedPart === 'torso-upper' ? 'selected' : ''}`}
                  onClick={() => onClick('torso-upper')}
                  d="M147.08,247.36c-0.06-7.1.64-14.06,2.71-19.47,5.31-13.86,1.87-35.54,4.26-32.35l-5.58-77s-22.95-7.49-26.13-12.11H75.48c-3.19,4.62-26.13,12.11-26.13,12.11l-5.58,77C46.15,192.36,42.71,214,48,227.9c2.07,5.41,2.78,12.37,2.71,19.47h96.34Z"
                  transform="translate(0.5 0.5)"/>

            <path id="torso-lower" className={`torso-lower ${selectedPart === 'torso-lower' ? 'selected' : ''}`}
                  onClick={() => onClick('torso-lower')}
                  d="M50.73,247.36a136.19,136.19,0,0,1-3.62,28.82c-2.55,10.36-11,68.53-11.79,89.72L97,368.29l1.91-.82,1.91,0.82,61.67-2.39c-0.8-21.2-9.24-79.36-11.79-89.72a136.21,136.21,0,0,1-3.62-28.82H50.73Z"
                  transform="translate(0.5 0.5)"/>

            <path id="forearm-right" className={`forearm-right ${selectedPart === 'forearm-right' ? 'selected' : ''}`}
                  onClick={() => onClick('forearm-right')}
                  d="M43.76,195.54c-2.39,3.19-4.94,16.09-5.1,25.82s-3.19,23.27-5.74,29,2.23,35.22-.32,50.36-10.36,42.55-10.36,47.81l-61.67-2.39c1-10.36-5.42-86.06-3.35-90.68s4-15.46,2.71-22.63S0.42,189.49,4.4,179.92s-0.8-27.25,9.88-44.62,35.06-16.73,35.06-16.73Z"
                  transform="translate(0.5 0.5)"/>
            <path id="hand-right" className={`hand-right ${selectedPart === 'hand-right' ? 'selected' : ''}`}
                  onClick={() => onClick('hand-right')}
                  d="M22.25,348.54c0,5.26,2.87,6.53,5.42,11.47S27,375.94,27,375.94c2.23,14.82.48,14.82-2.23,14.66s-6.53-12.75-6.53-12.75l-4-1.91s-3.19,3.51-.8,8.92,16.25,12.75,14.66,14.66-6.37-.16-6.37-0.16,9.56,9.24,8.45,10.36a3.53,3.53,0,0,1-2.87.8s2.71,3.19.48,4.62-8.6-3.19-8.6-3.19C10.46,410.69,2,389.33.74,386.94s2.07-30.28,3-40.64Z"
                  transform="translate(0.5 0.5)"/>
            <path id="forearm-left" className={`forearm-left ${selectedPart === 'forearm-left' ? 'selected' : ''}`}
                  onClick={() => onClick('forearm-left')}
                  d="M194,346.3c-1-10.36,5.42-86.06,3.35-90.68s-4-15.46-2.71-22.63,2.71-43.51-1.27-53.07,0.8-27.25-9.88-44.62-35.06-16.73-35.06-16.73l5.58,77c2.39,3.19,4.94,16.09,5.1,25.82s3.19,23.27,5.74,29-2.23,35.22.32,50.36,10.36,42.55,10.36,47.81Z"
                  transform="translate(0.5 0.5)"/>
            <path id="hand-left" className={`hand-left ${selectedPart === 'hand-left' ? 'selected' : ''}`}
                  onClick={() => onClick('hand-left')}
                  d="M174.56,348.54c0,5.26-2.87,6.53-5.42,11.47s-5.42,15.93-5.42,15.93c-2.23,14.82-.48,14.82,2.23,14.66s6.53-12.75,6.53-12.75l4-1.91s3.19,3.51.8,8.92-16.25,12.75-14.66,14.66,6.37-.16,6.37-0.16-9.56,9.24-8.45,10.36a3.53,3.53,0,0,0,2.87.8s-2.71,3.19-.48,4.62,8.6-3.19,8.6-3.19c5.42,1.27,13.87-20.09,15.13-22.48s-2.07-30.28-3-40.64Z"
                  transform="translate(8, -3)"/>

            <path id="head" className={`head ${selectedPart === 'head' ? 'selected' : ''}`}
                  onClick={() => onClick('head')}
                  d="M122.33,106.46c-3.19-4.62-1.59-24.7-1.59-24.7,6.21-4.62,6.85-18.17,6.85-18.17s0.48,2.39,2.87.8,3.19-17.69,2.55-19.12-3.35-1-3.35-1,3.82-21-2.71-31.87S105,0,98.9,0s-21.51,1.59-28,12.43S68.15,44.3,68.15,44.3s-2.71-.48-3.35,1S65,62.79,67.35,64.38s2.87-.8,2.87-0.8,0.64,13.55,6.85,18.17c0,0,1.59,20.08-1.59,24.7h46.85Z"
                  transform="translate(0.5 0.5)"/>

        </svg>
    );
};

export default BodyDiagram;

