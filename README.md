# express-query-object-example

pass object via express query example

## Install

    yarn
    yarn start

Access to http://localhost:3000/check?user$[ne]=0&password[$ne]=0

    req.query
    // { 'user$': { ne: '0' }, password: { '$ne': '0' } }


## Changelog

See [Releases page](https://github.com/azu/express-query-object-example/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/express-query-object-example/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- azu: [GitHub](https://github.com/azu), [Twitter](https://twitter.com/azu_re)

## License

MIT © azu
