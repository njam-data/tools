# @njam-data/tools

> A set of Node.js utilities commonly needed in data projects.

## Install
```shell
npm i @njam-data/tools
```

## json

```js
import { readJson, writeJson } from '@njam-data/tools/json.js'

const json = await readJson(filepath)
await writeJson(filepath, data)
```

## csv

```js
import {
  readCsv,
  writeCsv,
  createCsvReadStream,
  createCsvWriteStream
} from '@njam-data/tools/csv.js'

const csv = await readCsv(filepath)
await writeCsv(filepath, data)
const readStream = createCsvReadStream(filepath)
const writeStream = createCsvWriteStream(filepath)
```

## dirname

```js
import * as path from 'path'
import * as dirname from '@njam-data/tools/dirname.js'

const dataDirectory = dirname.join(import.meta.url, 'data')
const csvDirectory = path.join(dataDirectory, 'csv)
```

## fs

```js
import { fileExists } from '@njam-data/tools/fs.js'

if (await fileExists(filepath)) {
  // ✅
}
```
