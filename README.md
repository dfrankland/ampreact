# ampreact
⚡⚛ [AMP HTML][amp], [Next.js][next], [React][react], [`styled-components`][styled]
— The most trendy website boilerplate possible.

## About

The core of `ampreact` is built on [Next.js][next], used for all the routing and
serving of pages. For styling, [`styled-components`][styled] makes it easy—with
just a small modification to the rendering of the `<style />` tags generated,
it works nicely with [AMP HTML][amp]. Finally, [`react-amphtml`][react-amphtml]
is used for rendering all of the [AMP HTML][amp] built-ins, extensions, and
the `<script />` tags needed to use them.

The pages generated should all by properly validated by [AMP HTML][amp] 💯

## Usage

All the usage and benefits of [Next.js][next] are available to `ampreact`.

*   Installation:

    ```bash
    npm install
    ```

*   Development:

    ```bash
    npm run dev
    ```

*   Production:

    ```bash
    npm run build
    npm run start
    ```

[amp]: https://github.com/ampproject/amphtml/
[next]: https://github.com/zeit/next.js/
[react]: https://github.com/facebook/react/
[styled]: https://github.com/styled-components/styled-components/
[react-amphtml]: https://github.com/dfrankland/react-amphtml/
