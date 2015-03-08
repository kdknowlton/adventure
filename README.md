#Adventure!

## Installation
System packages required:
* MySQL-python
* mysql-devel
* Virtualenv/Virtualenvwrapper

pip install -r requirements.txt

npm install

## Build Browserified JS:
From story/static/javascript, run:
'''
../../../node_modules/browserify/bin/cmd.js application.js -t [jstify --engine lodash] > bundle.js
'''