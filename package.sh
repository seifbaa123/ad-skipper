#!/bin/bash

rm my-extension.zip 2>/dev/null

zip -r -FS ./my-extension.zip * --exclude '*.git*' LICENSE README.md .gitignore package.sh
