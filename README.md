# Corius

A base for Sass libraries. The aim is to provide a starting point for solid
Sass development by including tools that encourage optimal Sass development for 
not just you, but the developers around you.

## Features

- Sass: [gulp-sass](https://github.com/dlmanning/gulp-sass)
- Task Automation: [Gulp](https://github.com/gulpjs/gulp)
- Utilities: [Sassdash](https://github.com/davidkpiano/sassdash)
- Linting: [gulp-sass-lint](https://github.com/sasstools/gulp-sass-lint)
- Documentation: [Sassdoc](https://github.com/SassDoc/), [Sassdoc Theme - Markdown](https://github.com/ellioseven/sassdoc-theme-markdown) 
- Unit Testing: [True](https://github.com/oddbird/true) 

## Installation

```
npm install -g gulp-cli mocha && npm install
```

## Usage

Watch (Compile + Lint) Sass:

```
gulp
```

Compile Sass:

```
gulp sass
```

Lint Sass:

```
gulp lint
```

Test Sass:

```
gulp test
```

Document Sass:

```
gulp doc
```

Build Library (Compile + Lint + Test + Document):

```
gulp build
```

## Yeoman Generator

To make life easier, try the [Corius Yeoman Generator](https://github.com/ellioseven/generator-sass-corius).

## Further Reading

### LibSass

In case you haven't heard, LibSass is a C implementation of Sass. This creates
a portable codebase which is a lot faster than the original Ruby source. You
can [read more about LibSass](http://sass-lang.com/libsass]).

To implement LibSass, we have to use a wrapper. In this case, we are using the
Node wrapper, [node-sass](https://github.com/sass/node-sass).

Run `gulp` to watch your Sass for changes and compile or `gulp sass` to
compile your Sass as a one off.

### Task Automation

To automate common tasks such as compiling, linting and testing Sass, we use a 
task automator, [Gulp]([gulp-sass](https://github.com/dlmanning/gulp-sass)). You
can view and configure the tasks in `gulpfile.js`.

### Utilities

Keeping your code DRY is an important concept. You don't and shouldn't have to
reinvent the wheel in each of your Sass libraries. Using other libraries such as
[Sassdash](https://github.com/davidkpiano/sassdash) will help save yourself
from writing abstract functionality, such as map and list functions. Although
they may seem daunting at first, getting aquianted with these libraries will
reduce errors and extra code/responsibility.

### Linting

Everyone has there own way of writing code, so it's good to keep a few ground
rules. Linting helps you and your team to write consistent code. This helps
keep a nice readable codebase that can actually be maintained.

It's a good idea to consistently lint your code at all times, not right at
the end. Use [gulp-sass-lint](https://github.com/sasstools/gulp-sass-lint) to
automate linting. This is done in the default watch task (when you run `gulp`
in the terminal) or on the `lint` task (wehn you run `gulp lint` in the terminal). 

### Documentation

This is an essential component to a clean and maintainable code base. Your code
should be documented not just for yourself, but also for anyone else wanting to
either use your library or maintain it after you.

It's a good idea to document your code at all times, not right at the end.

By documenting file headers and code blocks, this library can generate
documentation for you. [Sassdoc](https://github.com/SassDoc/) will parse your
code and [Sassdoc Theme - Markdown](https://github.com/ellioseven/sassdoc-theme-markdown) 
will create the markdown files for you. This means that your documentation
can live in the repository and is easily viewable when your repo is stored in
a git hosting service such as [GitHub](https://github.com/) or [BitBucket](https://bitbucket.org/).

To generate documentation, run `gulp doc` in your terminal. The markdown files
will be generated in the `doc` directory in the root of the library.

Use these doc blocks in your code or [view the annotations](http://sassdoc.com/annotations/).

#### Sassdoc Blocks

##### File

Use this as a boilerplate for file headers:

```scss
////
/// File Name
/// File Description
/// @group example-api
/// @author John Doe
////
```

##### Block

Use this as a boilerplate for code blocks such as variables, mixins and functions:

```scss
//  @type name
/// Description.
///
/// @todo Task to be done.
///
/// @since 1.0.0
/// @type Bool | String
/// @access private
/// @group helpers
///
/// @throws Error related message.
///
/// @link http:// some.url Optional caption.
///
/// @requires other-item
/// @requires {mixin} other-item
/// @requires $other-item
/// @requires %other-item
///
/// @param {List} $foo
/// @param {List | String} $foo
/// @param {List} $foo Description.
/// @param {List} $foo (false) Description.
/// 
/// @returns {List | String} Description.
/// 
/// @example scss - Description.
///   (example)
///   // (result)
```

### Unit Testing

Unit testing is vital for a good maintainable codebase. It prevents bugs from
happening during development, as well as when trying to work on new features.
Failing to unit test **will probably** lead to either you or others encountering
frustrating errors.

You should be writing unit tests consistently, not right at the end.

Here's how we do it:

1. The entry point is `test/test.scss`. You should import your seperate
tests from there.
2. Starting writing your unit tests. View `test/src/_example.scss` for
assertions examples on functions and mixins. Each assertion should be short and
concise.
3. Run `gulp test` to start the tests.

For more information on unit testing, I encourage you to read up on [true](https://github.com/oddbird/true).
