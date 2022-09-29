import React from 'react'
import styled from 'styled-components/macro'
import { breakpoint } from 'lib/microsite-logic'
import MenuModal from './MenuModal'

import logo from './assets/logo.svg'

const medium = css => breakpoint('medium', css)

function Navbar() {
  return (
    <div
      css={`
        width: 100%;
        max-width: 1180px;
        height: 65px;
        background: #1c1c1c;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 3000;
      `}
    >
      <div
        css={`
          width: 76%;
          max-width: 1180px;
          height: 65px;
          background: transparent;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 3000;
        `}
      >
        <div
          css={`
            display: flex;
            align-items: center;
            justify-content: flex-start;
          `}
        >
          <div
            css={`
              display: flex;
              justify-content: center;
              align-items: center;
              width: auto;
              height: 100%;
              padding-right: 15px;
              img {
                display: block;
                height: 62px;
                margin-top: 8px;
              }
            `}
          >
            <img src={logo} alt="Dijets Council" />
          </div>
          <div
            css={`
              display: none;
              ${medium('display: block;')};
              a {
                font-weight: 600;
                font-size: 16px;
                line-height: 19px;
                color: #ffffff;
                padding: 15px;
              }
            `}
          >
            <a href="#get-anj">Dijets Council Members</a>
            <a href="https://portal.dijets.io" target="_blank" rel="noreferrer">Governance Portal</a>
            <a href="https://council.dijets.io/DijetsGovernanceCharter.pdf" target="_blank" rel="noreferrer" >Charter</a>
            <a href="#subscribe">Subscribe</a>
          </div>
        </div>
        <div
          css={`
            display: block;
            ${medium('display: none;')};
          `}
        >
          <MenuModal />
        </div>
      </div>
    </div>
  )
}

export default Navbar
