import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import * as dotenv from 'dotenv';
dotenv.config();

import ssh2SftpClient from 'ssh2-sftp-client';
//let SftpClient = require('ssh2-sftp-client');

const config = {
  host: process.env.SFTP_SERVER,
  username: process.env.SFTP_USER,
  password: process.env.SFTP_PASSWORD,
  port: process.env.SFTP_PORT || 22
};

let remotePath = process.env.SFTP_URL;

//const sftp = new ssh2SftpClient();
async function main() {
  const client = new ssh2SftpClient('ci-cd');
  const src = `${__dirname}${process.env.LOCAL_PATH}`;


  try {
    await client.connect(config);
    client.on('upload', info => {
      console.log(`Listener: Uploaded ${info.source}`);
    });
    let rslt = await client.uploadDir(src, remotePath);
    return rslt;
  } catch (err) {
    console.error(err);
  } finally {
    client.end();
  }
}

main()
  .then(msg => {
    console.log(msg);
  })
  .catch(err => {
    console.log(`main error: ${err.message}`);
  });
