import React from 'react'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import {
  mainContainer,
  boxHeader,
  title,
  selectorPrices,
  links
} from './styles/FinanceWidgetStyle'

import Loader from './common/Loader'

const FinanceWidget = props => {
  return (
    <React.Fragment>
      {props.dataCreditAfreement ? (
        <div css={mainContainer}>
          <div css={boxHeader} data-testid='widget'>
            <h4 css={title}>Págalo en</h4>
            <a css={links} onClick={props.onToggleModal}>
              mas info
            </a>
          </div>
          <select css={selectorPrices} onChange={props.onHandleAgreements}>
            {props.dataCreditAfreement.map(data => (
              <option
                data-testid='option'
                value={JSON.stringify({
                  instalmentFee: data.instalment_fee,
                  instalmentAmount: data.instalment_amount
                })}
              >{`${data.instalment_count} cuotas de ${
                  data.instalment_amount.value
                } € / mes`}</option>
            ))}
          </select>
        </div>
      ) : (
        <Loader />
      )}
    </React.Fragment>
  )
}

export default FinanceWidget
