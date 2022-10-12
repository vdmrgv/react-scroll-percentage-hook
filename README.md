# react-scroll-percentage-hook

[![Version Badge][npm-version-svg]][package-url]
![NPM license][license-image]
[![GZipped size][npm-minzip-svg]][bundlephobia-url]
[![PRs Welcome][pr-svg]][pr-url]
[![Downloads][downloads-image]][downloads-url]
[![NPM total downloads][total-downloads-svg]][total-downloads-url]

A React hook that reports the element's current scroll percentage. Can be used for both scroll axes.
<br />
Check out [the demo](https://vdmrgv.github.io/react-scroll-percentage-hook) for some examples.

## Features

- 🚀 **Fast** - Built with hooks and functional components only.
- 📏 **No need to specify sizes** - No need to pass the dimensions of the component, scrollbar or element
- 👫 **Cross-browser** - Works out-of-the-box for most browsers, regardless of version.
- 📲 **Mobile-friendly** - Supports mobile devices and touch screens.
- 🛠 **Written in TypeScript** - It'll fit right into your existing TypeScript
  project
- 💥 **Lightweight** - Around `~400B`

## Install

```bash
  # with npm
  npm install --save react-scroll-percentage-hook
  # with yarn
  yarn add react-scroll-percentage-hook
```

## Usage

```js
import useScrollPercentage from 'react-scroll-percentage-hook';

const Component = () => {
  // TypeScript example:
  // const { ref, percentage } = useScrollPercentage<HTMLDivElement>(...props);
  const { ref, percentage } = useScrollPercentage();

  return (
    <>
      <p>{`vertical: ${percentage.vertical} horizontal: ${percentage.horizontal}`}</p>
      <div ref={ref}>
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </>
  );
};
```

## API

| Name               | Description                                                          | Type          | Required | Default Value |
| ------------------ | -------------------------------------------------------------------- | ------------- | :------: | ------------- |
| windowScroll       | If enabled uses window scroll                                        | `boolean`     | ❌        | `false`       |
| onProgress         | Callback called when scrolling `({ vertical, horizontal ) => void`   | `function`    | ❌        | `undefined`   |
| timeout            | Timeout for scroll handler in `ms`                                   | `number`      | ❌        | `10`          |


## Contributing

Please read through our [contributing guidelines](https://github.com/vdmrgv/react-scroll-percentage-hook/blob/main/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

## License

Code released under the [MIT License][license-url] © [Vadim Rogov](https://github.com/vdmrgv).

[package-url]: https://npmjs.org/package/react-scroll-percentage-hook
[npm-version-svg]: https://img.shields.io/npm/v/react-scroll-percentage-hook.svg
[npm-version-svg]: https://img.shields.io/npm/v/react-scroll-percentage-hook.svg
[npm-minzip-svg]: https://img.shields.io/bundlephobia/minzip/react-scroll-percentage-hook.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=react-scroll-percentage-hook
[license-image]: https://img.shields.io/npm/l/react-scroll-percentage-hook.svg?style=flat
[license-url]: LICENSE
[pr-svg]: https://badgen.net/badge/PRs/welcome/cyan
[pr-url]: http://makeapullrequest.com
[downloads-image]: http://img.shields.io/npm/dm/react-scroll-percentage-hook.svg
[downloads-url]: http://npm-stat.com/charts.html?package=react-scroll-percentage-hook
[total-downloads-svg]: https://img.shields.io/npm/dt/react-scroll-percentage-hook.svg?style=flat
[total-downloads-url]: https://npmcharts.com/compare/react-scroll-percentage-hook?minimal=true

