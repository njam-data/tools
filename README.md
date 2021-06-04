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

## s3

```js
import {
  uploadFile,
  uploadJson,
  downloadFile,
  downloadJson,
  deleteFile,
  listFiles
} from '@njam-data/tools/s3.js'

await uploadFile({ bucket, filepath, body })
await uploadJson({ bucket, filepath, body })
const file = await downloadFile({ bucket, filepath })
const file = await downloadJson({ bucket, filepath })
await deleteFile({ bucket, filepath })
const files = await listFiles({ bucket, filepath })
```

## dirname

```js
import * as path from 'path'
import * as dirname from '@njam-data/tools/dirname.js'

const dataDirectory = dirname.join(import.meta.url, 'data')
const csvDirectory = path.join(dataDirectory, 'csv')
```

## fs

```js
import { fileExists } from '@njam-data/tools/fs.js'

if (await fileExists(filepath)) {
  // ✅
}
```
