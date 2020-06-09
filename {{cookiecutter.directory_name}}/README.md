README.md

# Create presentations using Asciidoctor markdown using reveal.js.

Try to use SVG and Konki supported images.
Version control them in git.

## Install Asciidoctor utilities written in JavaScript(JS)

### NPM
Use NPM to install Asciidoctor & PDF package globally, open a terminal and type:
$ npm i -g @asciidoctor/core asciidoctor-pdf @asciidoctor/reveal.js asciidoctor-kroki asciidoctor

### YARN

yarn global add @asciidoctor/core asciidoctor-pdf @asciidoctor/reveal.js asciidoctor-kroki asciidoctor

## Check that utilities are installed

asciidoctor-revealjs --version
asciidoctor-pdf --version
asciidoctor --version

## Examples of use

Works ok in MS-Windows : Creates PDF
asciidoctor-pdf --require asciidoctor-kroki document.adoc

Creates HTML doc
asciidoctor --require asciidoctor-kroki document.adoc 

Create Reveal files
asciidoctor-revealjs --require asciidoctor-kroki slides.adoc

or

asciidoctor -r asciidoctor-kroki sample.adoc

## Settings for index.adoc to enable kroki
:kroki-fetch-diagram:
:imagesdir: images

## Quickstart

cookiecutter gh:rnwolf/present

Answer questions.

cd "{{ cookiecutter.directory_name }}"
git init
git add --all
## Create the remote repo.
gh repo create

## Commit presentation to local repo.
git commit -m "First commit"

## Connect up local and remote repo. -u = upstream
git push -u origin master

## Create a GitHub Issue and document what the intention of the planned change is.
gh issue create

## Make a note of the issue <number> to be used for a working branch.

## Create branch and switch to it!
git checkout -b {{ repo_name }}/issue<number>     Where <number> is the issue number.

Make changes to index.adoc & images
Build the outputs
build.bat
pdf.bat

## Push the change to the remote repo to keep them safe

git push -u origin {{ repo_name }}/issue<number>

Make more changes.

git push

## Ready to merge the branch to master
git checkout master

git merge --no-ff {{ repo_name }}/issue<number>

The additional “–no-ff” tells git we want to retain all of the commit messages prior to the merge.

git push origin master

## Delete the branch as we don't need it anymore.
git branch -d  {{ repo_name }}/issue# 

## Close the issue used to track the changes.
gh issue close <number>
