import React from 'react'
import styled from 'styled-components';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Bgimg from '../Assets/Main-banner-3.jpg';
import { Link } from 'react-router-dom';
const Breadcumbs = styled.section`
    background-image: url(${Bgimg});
    background-size: cover;
    background-repeate: no-repeat;
    background-position: center;
    padding: 75px 0;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    @media (max-width: 480px) {
      height: 100%;
  }
`;
const Breadcumbsinner =styled.div`
    background-color: #0000008f;
    position: absolute;
    top: 0;
    left: 0;
    height: 40vh;
    width: 100%;
    padding: 75px 0;
    z-index: -1;
    @media (max-width: 480px) {
      height: 100%;
  }
`;
const Breadtitle =styled.h1`
    font-size: 56px;
    font-wight: 900;
    padding: 10px;
    color: #fff;
`;

export default function Breadcum({Title,Breadlink_1, Breadlink_2}) {
  return (
        <Breadcumbs>    
        <Breadcumbsinner/>
            <div>
            <Breadtitle >{Title} </Breadtitle>
            <Breadcrumb>
                <Breadcrumb.Item as={Link} to='/'>{Breadlink_1}</Breadcrumb.Item>
                <Breadcrumb.Item as={Link} to='#'>{Breadlink_2}</Breadcrumb.Item>
            </Breadcrumb>
            </div>
        </Breadcumbs>

  )
}
