## Hexlet tests, CodeClimate check and linter status:

[![Actions Status](https://github.com/M4XPRD/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/M4XPRD/frontend-project-lvl2/actions)
[![project-check](https://github.com/M4XPRD/frontend-project-lvl2/actions/workflows/project-check.yml/badge.svg)](https://github.com/M4XPRD/frontend-project-lvl2/actions/workflows/project-check.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/fb5424cb2db36a0fee0b/maintainability)](https://codeclimate.com/github/M4XPRD/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/fb5424cb2db36a0fee0b/test_coverage)](https://codeclimate.com/github/M4XPRD/frontend-project-lvl2/test_coverage)

## Description:
This is the utility, which shows the difference between two files. The output can be shown with different formats.
<br></br>
**List of supported extensions:**

• JSON (```.json``` file extension)

• YML/YAML (```.yml```or ```.yaml``` file extensions)
<br></br>
**List of output formats:**

• ```stylish``` is standart format, which will show the difference between files with ```+``` and ```-``` signs.

• ```plain``` is human-readable variant, where you can see the string-like output of each line, that has any changes. 

• ```json``` is variant, which is similar to *stylish*. But instead of ```+``` and ```-``` you will see AST-tree-like system with statuses of *keys* and their *types*.

## Installation:

```sh

# Step 1 — clone this repository
$ git clone https://github.com/M4XPRD/frontend-project-lvl2

# Step 2 — install the dependencies
$ make install

# Step 3 — install the packages
$ sudo npm link
```
## List of commands in terminal:

**Important note** — in order to use this utility correctly, you should move to ***__fixtures__*** folder in terminal, where you can upload and use your files. 

```sh
# Help window
gendiff -h

# All commands below should run from __fixtures__ folder!

# Show difference with standart (stylish) format
gendiff file1.json file2.json

# Show difference with stylish format
gendiff --format stylish file1.json file2.json

# Show difference with plain format
gendiff --format plain file1.json file2.json

# Show difference with json format
gendiff --format json file1.json file2.json
```


## Difference between two flat JSON files:
[![asciicast](https://asciinema.org/a/469841.svg)](https://asciinema.org/a/469841)

## Difference between two flat YML / YAML files:
[![asciicast](https://asciinema.org/a/470085.svg)](https://asciinema.org/a/470085)

## Difference between two nested files (stylish format):
[![asciicast](https://asciinema.org/a/473862.svg)](https://asciinema.org/a/473862)

## Difference between two nested files (plain format):
[![asciicast](https://asciinema.org/a/474906.svg)](https://asciinema.org/a/474906)

## Difference between two nested files (json format):
[![asciicast](https://asciinema.org/a/474928.svg)](https://asciinema.org/a/474928)
