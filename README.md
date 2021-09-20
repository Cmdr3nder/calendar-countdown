# React Project Template

## Usage
1. Clone this repo `git clone https://github.com/Cmdr3nder/react-spa-template.git your-project-name`
1. Enter the new project directory `cd your-project-name`
1. Delete the *.git/* folder `rm -rf .git`
1. Initialize a fresh git repo `git --init`
1. Make your initial commit `git add . && git commit -m "INITIAL COMMIT"`

## Prerequisites
* node ^16.9.1
* npm ^7.24.0
* make
* entr

## Preparing to dev
With `make` (preferred):
1. Install `node` and `npm`
1. Install npm dependencies with `make install`
1. Run a one-off build with `make build`
1. Run a dev-server serving that build with `make serve`
1. Run a watching build with `make watch-build`, this will rebuild under most file changes
	* In order to stop `make watch-build` you will need to double-tap CTRL-C twice in relatively rapid succession.
1. Suggestion: Run `make serve` and `make watch-build` simultaneously to achieve a tight development loop

Without `make`:
TBD
