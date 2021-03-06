# ✒️ Chatterslate

SlateJS editor for [Chatterbug](https://chatterbug.com).

![Chatterslate Demo](https://raw.githubusercontent.com/chatterbugapp/chatterslate/master/images/chatterslate.gif)

We use this editor at Chatterbug for our "Topic Explanations",
which are mini-blog posts that teach our curriculum to students.

## Features

The editor shown above uses lots of goodies from SlateJS,
including the slate-edit-table plugin.

### Marks

These are "inline" edits. Chatterslate supports:

* Bold
* Italic
* Underline
* Strikethrough
* Language (highlights text with the language we are teaching)
* Color (with a few that are preselected)

Examples of these:

![marks](https://raw.githubusercontent.com/chatterbugapp/chatterslate/master/images/marks.png)

### Voids

"Void" blocks in Chatterslate are just easy ways to insert chars
into the editor. Chatterslate comes with:

* Several kinds of arrows
* Easy access to different quote styles
* Underscore lines to denote a fill-in-the-blank
* Horizontal rule

Examples of these:

![voids](https://raw.githubusercontent.com/chatterbugapp/chatterslate/master/images/voids.png)

### Blocks

Blocks are usually multiple-line content chunks. Chatterslate
includes:

* Left/Center/Right aligned Blocks
* Bulleted list
* Numbered list
* Header one
* Header two

Examples of these:

![bullets](https://raw.githubusercontent.com/chatterbugapp/chatterslate/master/images/bullets1.png)

![header](https://raw.githubusercontent.com/chatterbugapp/chatterslate/master/images/header1.png)

### Patterns

Patterns are also blocks, but these are how we teach language
concepts in a  more concise + design focused way.

* "Examples"

![examples](https://raw.githubusercontent.com/chatterbugapp/chatterslate/master/images/examples.png)

* "Conversation"

![conversation](https://raw.githubusercontent.com/chatterbugapp/chatterslate/master/images/conversation.png)

* "Watch Out" aside

![watchout](https://raw.githubusercontent.com/chatterbugapp/chatterslate/master/images/watchout.png)

* "Cultural" aside

![cultural](https://raw.githubusercontent.com/chatterbugapp/chatterslate/master/images/cultural.png)

* "Note" aside

![note](https://raw.githubusercontent.com/chatterbugapp/chatterslate/master/images/note.png)

### Tables

We do have a few tables as well  as these are also useful. The
editor allows adding/removing rows from the table or the entire
table if necessary. Tables included are:

* Arrow table

![arrow](https://raw.githubusercontent.com/chatterbugapp/chatterslate/master/images/arrow.png)

* Two Column table

![twocolumn](https://raw.githubusercontent.com/chatterbugapp/chatterslate/master/images/twocolumn.png)

* Three Column table

![threecolumn](https://raw.githubusercontent.com/chatterbugapp/chatterslate/master/images/threecolumn.png)

## Install

Run:

```sh
yarn install
```

Then:

```sh
yarn start
```

Now open `http://localhost:8080` in your browser, and if you have
the LiveReload plugin installed, it'll automatically refresh for
any changes in the examples/ or src/ directories!

## Publishing to NPM

You'll need to be signed in via NPM first!

```sh
npm version patch # or minor or major; commits new version number
yarn release # pushes to github + npm publish
```

## License

MIT. Please see `LICENSE`.
