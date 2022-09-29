import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Carousel from 'react-bootstrap/Carousel'
import { breakpoint } from 'lib/microsite-logic'

import basics1 from './assets/basics1.svg'
import basics2 from './assets/basics2.svg'
import basics3 from './assets/basics3.svg'
import basics4 from './assets/basics4.svg'
import basics5 from './assets/basics5.svg'
import basics6 from './assets/basics6.svg'
import basicsl1 from './assets/basics-l1.svg'
import basicsl2 from './assets/basics-l2.svg'
import basicsl3 from './assets/basics-l3.svg'
import basicsl4 from './assets/basics-l4.svg'
import basicsl5 from './assets/basics-l5.svg'
import basicsl6 from './assets/basics-l6.svg'
import left from './assets/left.svg'
import right from './assets/right.svg'

const large = css => breakpoint('large', css)

const Basics = () => {
  const [active, setActive] = useState(1)
  return (
    <BasicsSection id="how-it-works">
      <Container>
        <h3>The basics of being a Council Member for Dijets</h3>
        <p>Learn the basic action stages for proposals in Dijets Council</p>
      </Container>
      <Process>
        <div>
          <Buttons>
            <div
              className={active === 1 ? 'active' : ''}
              onClick={() => setActive(1)}
            >
              1- PROPOSAL IS SUBMITTED
            </div>
            <div
              className={active === 2 ? 'active' : ''}
              onClick={() => setActive(2)}
            >
              2- COUNCILLORS ARE DRAFTED
            </div>
            <div
              className={active === 3 ? 'active' : ''}
              onClick={() => setActive(3)}
            >
              3- PROPOSAL IS REVIEWED
            </div>
            <div
              className={active === 4 ? 'active' : ''}
              onClick={() => setActive(4)}
            >
              4- PRELIMINARY VOTING
            </div>
            <div
              className={active === 5 ? 'active' : ''}
              onClick={() => setActive(5)}
            >
              5- VOTING PERIOD
            </div>
            <div
              className={active === 6 ? 'active' : ''}
              onClick={() => setActive(6)}
            >
              6- HAL TAKES OVER
            </div>
          </Buttons>
        </div>
        <Images>
          <img className={active === 1 ? 'active' : ''} src={basicsl1} alt="" />
          <img className={active === 2 ? 'active' : ''} src={basicsl2} alt="" />
          <img className={active === 3 ? 'active' : ''} src={basicsl3} alt="" />
          <img className={active === 4 ? 'active' : ''} src={basicsl4} alt="" />
          <img className={active === 5 ? 'active' : ''} src={basicsl5} alt="" />
          <img className={active === 6 ? 'active' : ''} src={basicsl6} alt="" />
        </Images>
      </Process>
      <MobileProcess>
        <Carousel
          nextIcon={<img src={right} alt="" />}
          prevIcon={<img src={left} alt="" />}
        >
          <Carousel.Item>
            <img src={basics1} className="carousel-img" alt="" />
            <div className="carousel-content">
              <h4>1- PROPOSAL IS RAISED</h4>
              <p>
                Dijets Governance Council is responsible for steering Dijets
                and the interests of its stakeholders in a favourable direction.
                Each of the 6 Council Members are free to submit, review and
                vote on a proposal.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img src={basics2} className="carousel-img" alt="" />
            <div className="carousel-content">
              <h4>2- COUNCILLORS ARE DRAFTED</h4>
              <p>
                Each time a proposal is submitted, the council members will
                receive an automatic email confirming the submission. Members
                are advised to review the proposal at their earliest convenience.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img src={basics3} className="carousel-img" alt="" />
            <div className="carousel-content">
              <h4>3- PROPOSAL IS REVIEWED</h4>
              <p>
                The review process can range from going through the proposal
                breakdown and its finer details. A summary report and a template
                for DIPs should accompany each proposal.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img src={basics4} className="carousel-img" alt="" />
            <div className="carousel-content">
              <h4>4- PRELIMINARY VOTING</h4>
              <p>
                At the end of the Review period, the Council Members can start
                to Vote for their desired outcome. 
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img src={basics5} className="carousel-img" alt="" />
            <div className="carousel-content">
              <h4>5- VOTING PERIOD ENDS</h4>
              <p>
                The Adjudication round for the proposal's qualification begins
                when HAL starts measuring each member's input for the respective
                proposal.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img src={basics6} className="carousel-img" alt="" />
            <div className="carousel-content">
              <h4>6- HAL TAKES OVER</h4>
              <p>
                HAL autonomously executes each proposal that receives the majority 
                consent of the members. At the end of this process HAL upgrades or
                downgrades the Likability Quotient for each member accordingly.
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </MobileProcess>
    </BasicsSection>
  )
}

const BasicsSection = styled.section`
  background: white;
  padding: 100px 15px 50px;
  ${large('min-height: 850px;')};
`
const Container = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;

  p {
    font-weight: 400;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
    color: #8a96a0;
    margin: 0 0 50px 0;
  }
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 37px;
    line-height: 1;
    text-align: center;
    color: #1c1c1c;
    margin: 0 0 10px 0;
  }
`
const Images = styled.div`
  position: relative;
  height: auto;
  width: calc(100% - 300px);
  margin: 0 auto;

  img {
    position: absolute;
    right: 0;
    opacity: 0;
    transition: opacity 0.25s ease-in-out;
  }

  img.active {
    opacity: 1;
  }
`
const Process = styled.div`
  display: none;
  width: 80%;
  margin: auto;
  ${large('display: flex; justify-content: space-between;')};
`
const MobileProcess = styled.div`
  display: block;
  width: 90%;
  margin: auto;
  ${large('display: none;')};
  .carousel-control-next {
    justify-content: flex-end;
  }
  .carousel-control-prev {
    justify-content: flex-start;
  }
  .carousel-item {
    margin-left: 7%;
    width: 85%;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 31px;
    text-align: center;
    color: #8a96a0;
  }
  h4 {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    margin-top: 30px;
    line-height: 34px;
    text-align: center;
    color: #1c1c1c;
  }
`

const Buttons = styled.div`
  width: 300px;
  padding: 15px 0;
  div {
    font-weight: 400;
    line-height: 2;
    font-size: 20px;
    color: #8a96a0;
    cursor: pointer;
    padding: 4px 15px 0 15px;
    margin: 15px 0;
    transition: all 0.25s ease-in-out;
    border-radius: 6px;
    position: relative;
    z-index: 1;
    background: linear-gradient(to bottom, white, white);
  }
  div.active {
    color: white;
  }
  div::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(193.3deg, #ffb36d 6.08%, #ff8888 93.18%);
    opacity: 0;
    border-radius: 6px;
    transition: opacity 0.25s;
    z-index: -1;
  }
  div.active::before {
    opacity: 1;
  }
`

export default Basics
