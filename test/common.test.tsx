import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { BoxShadow } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <BoxShadow style='shadow1'>
        <div>Hello</div>
      </BoxShadow>,
    )
  })
})
