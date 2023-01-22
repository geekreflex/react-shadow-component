import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { BoxShadow } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <BoxShadow shadowStyle='shadow1_1'>
        <div>Hello</div>
      </BoxShadow>,
    )
  })
})

describe('Checking styles', () => {
  it('has the required styles', () => {
    const { container } = render(
      <BoxShadow shadowStyle='shadow1_1'>
        <div>Hello</div>
      </BoxShadow>,
    )

    const box = container.querySelector('div')
    expect(box?.style.boxShadow).toBe('0px 1px 4px rgba(0,0,0,0.16)')
  })
})
