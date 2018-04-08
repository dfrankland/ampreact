# ampreact
⚡⚛ [AMP HTML][amp], [Next.js][next], [React][react],
[styled-components][styled], [GraphQL][graphql] — The most trendy website boilerplate
possible.

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

## Example & Validation

An example of `ampreact` can be seen here: <https://ampreact-szogszfmrw.now.sh/>

### For proof of validation, either:

1.  Append `#development=1` to the URL and check the console for errors

2.  Paste the page HTML into <https://validator.ampproject.org/#url=https%3A%2F%2Fampreact-szogszfmrw.now.sh%2F>

## Deployment

Because `ampreact` is built on top of [Next.js][next] it is simple to deploy to
[Now][now] or any other cloud infrastructure providers.

[![Deploy to now][now deploy badge]][now deploy ampreact]

[amp]: https://github.com/ampproject/amphtml/
[next]: https://github.com/zeit/next.js/
[react]: https://github.com/facebook/react/
[styled]: https://github.com/styled-components/styled-components/
[graphql]: https://github.com/graphql/graphql-js
[react-amphtml]: https://github.com/dfrankland/react-amphtml/
[now]: https://zeit.co/now/
[now deploy badge]: https://deploy.now.sh/static/button.svg
[now deploy ampreact]: https://deploy.now.sh/?repo=https://github.com/dfrankland/ampreact
