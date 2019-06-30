# ampreact
⚡⚛ [AMP HTML][], [Next.js][], [React][], [styled-components][], [GraphQL][],
and [TypeScript][] — The most trendy website boilerplate possible.

## About

The core of `ampreact` is built on [Next.js][], used for all the routing and
serving of pages. For styling, [styled-components][] makes it easy—with
just a small modification to the rendering of the `<style />` tags generated,
it works nicely with [AMP HTML][]. Finally, [`react-amphtml`][]
is used for rendering all of the [AMP HTML][] built-ins, extensions, and
the `<script />` tags needed to use them.

[`react-amphtml`]: https://github.com/dfrankland/react-amphtml/

The pages generated should all by properly validated by [AMP HTML][] 💯

## Usage

All the usage and benefits of [Next.js][] are available to `ampreact`.

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

## Example & Validation

An example of `ampreact` can be seen here: <https://ampreact.dfrankland.now.sh/>

### For proof of validation, either:

1.  Append `#development=1` to the URL and check the console for errors

2.  Paste the page HTML into <https://validator.ampproject.org/#url=https%3A%2F%2Fampreact.dfrankland.now.sh%2F>

## Deployment

Because `ampreact` is built on top of [Next.js][] it is simple to deploy to
[Now][] or any other cloud infrastructure providers.

[![Deploy to now][]][now deploy ampreact]

[Now]: https://zeit.co/now/
[Deploy to now]: https://deploy.now.sh/static/button.svg
[now deploy ampreact]: https://deploy.now.sh/?repo=https://github.com/dfrankland/ampreact

[AMP HTML]: https://github.com/ampproject/amphtml/
[Next.js]: https://github.com/zeit/next.js/
[React]: https://github.com/facebook/react/
[styled-components]: https://github.com/styled-components/styled-components/
[GraphQL]: https://github.com/graphql/graphql-js
[TypeScript]: https://github.com/microsoft/TypeScript
