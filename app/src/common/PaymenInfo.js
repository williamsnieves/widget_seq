import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import {
  mainModalContainer,
  mainModalContent,
  headerModal,
  itemContent,
  itemContainer
} from '../styles/PaymentInfoStyle'

const PaymenInfo = props => {
  return (
    <div css={mainModalContainer} onClick={props.closeModal}>
      <div css={mainModalContent}>
        <div css={headerModal}>
          <h5>Fracciona tu pago</h5>
          <h5>SeQura</h5>
        </div>
        <ol css={itemContent}>
          <li>
            <div css={itemContainer}>
              <p>
                Eliges "Fracciona tu pago" al realizar tu pedido y pagos solo la
                primera cuota
              </p>
              <i class='glyphicon glyphicon-th-list' />
            </div>
          </li>
          <li>
            <div css={itemContainer}>
              <p>Recibes tu pedido</p>
              <i class='glyphicon glyphicon-th-list' />
            </div>
          </li>
          <li>
            {' '}
            <div css={itemContainer}>
              <p>El resto de pagos se cargarán automaticamente a tu tarjeta</p>
              <i class='glyphicon glyphicon-th-list' />
            </div>
          </li>
        </ol>
        <h5>¡Así de simple!</h5>
        <p>
          Además en el importe mostrado ya se incluye la cuota única mensual de
          {` ${props.instalmentFee.string}`}/mes, por lo que no tendrás ninguna
          sorpresa
        </p>
      </div>
    </div>
  )
}

export default PaymenInfo
