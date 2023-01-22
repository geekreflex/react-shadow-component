# react-shadow-component

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

**react-shadow-component**, a powerful and versatile package that allows you to easily add various box and text shadow styles to your React components. With this package, you can eliminate the need to write complex CSS code and add professional-looking shadows to your components with ease.

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
      <BoxShadow>
        <div>Your awesome content</div>
      </BoxShadow>
    </div>
  )
}
```

### TextShadow

```jsx

...

```

### WithShadow (HOC)

```

...

```

[npm-url]: https://www.npmjs.com/package/react-shadow-component
[npm-image]: https://img.shields.io/npm/v/react-shadow-component
[github-license]: https://img.shields.io/github/license/geekreflex/react-shadow-component
[github-license-url]: https://github.com/geekreflex/react-shadow-component/blob/master/LICENSE
[github-build]: https://github.com/geekreflex/react-shadow-component/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/geekreflex/react-shadow-component/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/react-shadow-component
