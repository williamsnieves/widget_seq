import React from 'react'
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from '@testing-library/react'
import 'jest-dom/extend-expect'
import FinanceWidget from '../src/FinanceWidget'
describe('FinanceWidget SUITE', () => {
  it('Check widget has a loader', () => {
    const { getByText, getByTestId, container, asFragment } = render(
      <FinanceWidget />
    )
    expect(getByTestId('loader')).toHaveTextContent('Loading...')
  })

  it('Check widget passing a list of agreements ', async () => {
    const dummyDataAgreements = [
      {
        instalment_count: 3,
        total_with_tax: {
          value: 399,
          string: '3,99 €'
        },
        instalment_amount: {
          value: 133,
          string: '1,33 €'
        },
        instalment_fee: {
          value: 500,
          string: '5 €'
        },
        instalment_total: {
          value: 633,
          string: '6,33 €'
        },
        grand_total: {
          value: 1899,
          string: '18,99 €'
        },
        cost_of_credit: {
          value: 1500,
          string: '15 €'
        },
        cost_of_credit_pct: {
          value: 600,
          string: '6,00 %'
        },
        apr: {
          value: 2500,
          string: '25 %'
        },
        max_financed_amount: {
          value: 200000,
          string: '2000 €'
        }
      }
    ]
    const { getByText, getByTestId, container, asFragment } = render(
      <FinanceWidget dataCreditAfreement={dummyDataAgreements} />
    )

    const widgetTextNode = await waitForElement(() => getByTestId('widget'))
    expect(widgetTextNode).toHaveTextContent('mas info')
  })

  it('Check selector contain a value from dummy list', async () => {
    const dummyDataAgreements = [
      {
        instalment_count: 3,
        total_with_tax: {
          value: 399,
          string: '3,99 €'
        },
        instalment_amount: {
          value: 133,
          string: '1,33 €'
        },
        instalment_fee: {
          value: 500,
          string: '5 €'
        },
        instalment_total: {
          value: 633,
          string: '6,33 €'
        },
        grand_total: {
          value: 1899,
          string: '18,99 €'
        },
        cost_of_credit: {
          value: 1500,
          string: '15 €'
        },
        cost_of_credit_pct: {
          value: 600,
          string: '6,00 %'
        },
        apr: {
          value: 2500,
          string: '25 %'
        },
        max_financed_amount: {
          value: 200000,
          string: '2000 €'
        }
      }
    ]
    const {
      getByText,
      getByTestId,
      container,
      asFragment,
      queryAllByTestId
    } = render(<FinanceWidget dataCreditAfreement={dummyDataAgreements} />)

    const widgetTextNode = await waitForElement(() =>
      queryAllByTestId('option')
    )
    expect(widgetTextNode[0]).toHaveTextContent('3 cuotas de 133 € / mes')
  })
})
