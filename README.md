# Cookiecutter template to create Asciidoctor-Reveal.js presentations

[Asciidoctor-Reveal.js]https://asciidoctor.org/docs/asciidoctor-revealjs/ is a great tool to create presentations that can be displayed with browser of as PDF files.

In order to create these presentations quickly with mininal delay it is useful to have a master template to start from. 

We use a number of tools to help make this possible.

Cookiecutter is a command-line utility that creates directories and files based on a cookiecutters (template).

Yarn is a package manager for node code modules.

Github is used to store files for safekeeping and as a hub for collaborative editing.

## Install

[cookiecutter](https://cookiecutter.readthedocs.io/) 

[Github CLI](https://cli.github.com/manual/installation)

[YARN](https://classic.yarnpkg.com/en/docs/install/)

### Install AsciiDoctor and supporing node packages

```
yarn global add @asciidoctor/core asciidoctor-pdf @asciidoctor/reveal.js asciidoctor-kroki asciidoctor
```

### Check that utilities are installed

```
asciidoctor-revealjs --version 
asciidoctor-pdf --version 
asciidoctor --version
gh --version
```

## Use Cookiecutter

```
cookiecutter gh:rnwolf/presentation
```

Answer questions.

```
cd <presentation directory>
```

Open README.md for further instructions.

