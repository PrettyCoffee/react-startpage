# @startpage [![license-badge](https://badgen.net/github/license/PrettyCoffee/startpage)](https://github.com/PrettyCoffee/startpage/blob/master/LICENSE)

`@startpage` is a library that provides tools and components to facilitate the process of creating a browser start page.

Take a look at the [documentation](https://prettycoffee.github.io/startpage/) for more details.

## Getting Started

### Installation

```
npm i @startpage/<package>
```

### Packages

| name          | description                                     |                                                                  |
| ------------- | ----------------------------------------------- | ---------------------------------------------------------------- |
| bookmarks     | Bookmark management for your startpage          | [docs](https://prettycoffee.github.io/startpage/#/bookmarks)     |
| components    | Headless ui react components for your startpage | [docs](https://prettycoffee.github.io/startpage/#/components)    |
| local-storage | Local storage management for your startpage     | [docs](https://prettycoffee.github.io/startpage/#/local-storage) |
| search        | Function to search the web                      | [docs](https://prettycoffee.github.io/startpage/#/search)        |
| theming       | Create and use themes for your startpage        | [docs](https://prettycoffee.github.io/startpage/#/theming)       |

### Core concepts

Before you start working with this library, you should be aware of the following core concepts it uses:

- [React hooks](https://reactjs.org/docs/hooks-intro.html)
- [React context](https://reactjs.org/docs/context.html)

### Note

I recommend using [Typescript](https://www.typescriptlang.org/) and [Emotion](https://emotion.sh/docs/introduction) with this library since its designed for this usecase. That being said, everything should work just fine without them.
