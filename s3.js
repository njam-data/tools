import { S3 } from '@aws-sdk/client-s3'

const s3 = new S3({ region: 'us-east-1' })

export async function uploadFile (options) {
  const {
    bucket,
    filepath,
    body
  } = options

  return s3.putObject({
    Bucket: bucket,
    Key: filepath,
    Body: body,
    ACL: 'public-read'
  })
}

export async function downloadFile (options) {
  const {
    bucket,
    filepath
  } = options

  return s3.getObject({
    Bucket: bucket,
    Key: filepath
  })
}

export async function deleteFile (options) {
  const {
    bucket,
    filepath
  } = options

  return s3.deleteObject({
    Bucket: bucket,
    Key: filepath
  })
}

export async function listFiles (options) {
  const {
    bucket,
    filepath
  } = options

  return s3.deleteObject({
    Bucket: bucket,
    Prefix: filepath
  })
}
