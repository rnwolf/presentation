# Cookiecutter template to create Asciidoctor-Reveal.js presentations

[Asciidoctor-Reveal.js](https://asciidoctor.org/docs/asciidoctor-revealjs/) is a great tool to create presentations that can be displayed with a browser or as a PDF file. The resultant presentation can easly be uploaded to a static website.

To quicly create these presentations it is useful to get started with a preconfigured master template. Try to use [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics) image formats, as these are also text files. SVG files can be created and editied in a tool such as [InkScape](https://inkscape.org/).  SVG Images can be automatically generated from text embeded in the presentation. See examples at [PlantUML.com](https://plantuml.com/).

## A number of tools are required to use this approach.

*Cookiecutter* is a [command-line utility](https://cookiecutter.readthedocs.io/) that creates directories and files based on a cookiecutters (template).

*Yarn* is a [package manager](https://yarnpkg.com/) for node code modules.

*Github.com* is used to store files for safekeeping and as a hub for collaborative editing. The *GitHub CLI* [tool](https://cli.github.com/) makes it easy to interact with the gitHub.com service.

*Git* is a [version control tool](https://git-scm.com/) used to version and collaborate with text files.

*Asciidoctor* is a human-readable text document format. [Why use Asciidoc for writing?](https://asciidoctor.org/docs/what-is-asciidoc/) 

*Text  Editor* to edit the presentation text. There are many of these. You could even use an IDE, such as [VS-Code](https://code.visualstudio.com/), with asciidoc and SVG addons.

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
cookiecutter --version
asciidoctor-revealjs --version 
asciidoctor-pdf --version 
asciidoctor --version
git --version
gh --version
```

## Quickstart with Cookiecutter

Open up a command line shell/terminal and naviage to the top level directory for your presentations.

```
cookiecutter gh:rnwolf/presentation
```

Answer questions.

```
cd <presentation directory>
```

Open README.md for further instructions.

# License

[MIT](https://opensource.org/licenses/MIT)
