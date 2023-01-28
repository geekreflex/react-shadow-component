# react-shadow-component

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

**react-shadow-component**, a powerful and versatile package that allows you to easily add various box shadow styles to your React components. With this package, you can eliminate the need to write complex CSS code and add professional-looking shadows to your components with ease.

## Installation

To install **react-shadow-component**, simply run the following command:

```sh
# NPM
npm install react-shadow-component

# Yarn
yarn add react-shadow-component
```

## Usage

**react-shadow-component** is an HOC that can be applied to any React component. Here's an example of how you can use it:

### BoxShadow

```jsx
import React from 'react'
import { BoxShadow } from 'react-shadow-component'

export const MyComponent = () => {
  return (
    <div>
      <BoxShadow color='#000' blur={15} spread={5} offsetX={9} offsetY={15}>
        <div className='box'>Hello</div>
      </BoxShadow>
    </div>
  )
}
```

### WithShadow (HOC)

You can also use the `WithShadow` provider with props to style all `BoxShadow` component:

```jsx
import React from 'react'
import { BoxShadow, WithShadow } from 'react-shadow-component'

function App() {
  return (
    <div>
      <WithShadow blur={10} color={'rgba(0,0,0,0.45)'}>
        <BoxShadow color='#000' offsetX={0} blur={15}>
          <div className='box'>Hello</div>
        </BoxShadow>
        <BoxShadow>
          <div className='box'>Hello</div>
        </BoxShadow>
        <BoxShadow>
          <div className='box'>Hello</div>
        </BoxShadow>
      </WithShadow>
    </div>
  )
}

export default App
```

### Note

- If you pass props to the `BoxShadow` component and use the `WithShadow` component, the props passed to the `BoxShadow` component will take precedence.

## Props

The `BoxShadow` component accepts the following props:

- `blur`: This prop controls the size of the shadow. A higher value will result in a larger shadow, while a lower value will result in a smaller shadow.

- `spread`: This prop controls the spread of the shadow. A higher value will result in a wider spread, while a lower value will result in a more focused shadow.

- `color`: This prop controls the color of the shadow. You can set it as a CSS color string, like `#000000` for black color.

- `offsetX`: This prop controls the horizontal offset of the shadow. A positive value will move the shadow to the right, while a negative value will move the shadow to the left.

- `offsetY`: This prop controls the vertical offset of the shadow. A positive value will move the shadow down, while a negative value will move the shadow up.

## Conclusion

This package is a simple way to add box-shadow to your React elements. You can use the Shadow component to add a box-shadow to a single element, or the WithShadow provider to add box-shadow to all `BoxShadow` components. You can customize the shadow by passing in `blur`, `spread`, `offsetX`, `offsetY` and `color` props to `BoxShadow` or `WithShadow`.

[npm-url]: https://www.npmjs.com/package/react-shadow-component
[npm-image]: https://img.shields.io/npm/v/react-shadow-component
[github-license]: https://img.shields.io/github/license/geekreflex/react-shadow-component
[github-license-url]: https://github.com/geekreflex/react-shadow-component/blob/master/LICENSE
[github-build]: https://github.com/geekreflex/react-shadow-component/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/geekreflex/react-shadow-component/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/react-shadow-component
