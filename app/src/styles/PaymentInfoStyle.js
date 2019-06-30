/** @jsx jsx */
import { css } from '@emotion/core'

export const mainModalContainer = css`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 43, 54);
  background-color: rgba(0, 0, 0, 0.4);
`

export const mainModalContent = css`
  background-color: #fff;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 40%;

  h5 {
    margin-top: 2em;
  }
`
export const headerModal = css`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
`

export const itemContent = css`
  padding: 1em 1em 0 1em;
  li {
    margin: 0 0 1em 0;
  }
`

export const itemContainer = css`
  display: flex;
  justify-content: space-between;

  p {
    width: 60%;
  }
  i {
    font-size: 30px;
  }
`
