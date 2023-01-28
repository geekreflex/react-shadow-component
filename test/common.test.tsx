import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { BoxShadow, WithShadow } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <BoxShadow>
        <div>Hello</div>
      </BoxShadow>,
    )
  })
})

describe('Checking styles', () => {
  it('has the required styles', () => {
    const { container } = render(
      <BoxShadow blur={5} spread={5} offsetX={2} offsetY={3} color='red'>
        <div>Hello</div>
      </BoxShadow>,
    )

    const box = container.querySelector('div')
    expect(box?.style.boxShadow).toBe('2px 3px 5px 5px red')
  })
})

describe('Checking styles', () => {
  it('inherits color from with shadow', () => {
    const { container } = render(
      <WithShadow color='blue'>
        <BoxShadow blur={5} spread={5} offsetX={2} offsetY={3}>
          <div>Hello</div>
        </BoxShadow>
      </WithShadow>,
    )

    const box = container.querySelector('div')
    expect(box?.style.boxShadow).toBe('2px 3px 5px 5px blue')
  })
})
