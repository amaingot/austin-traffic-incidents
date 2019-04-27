/* tslint:disable no-console */
import { readdir } from 'fs';
import { uploadFile } from './helper';

const uploadFolder = (folder: string) => {
  readdir(folder, (error, files) => {
    if (error) {
      console.error(error);
      return;
    }
    files.forEach(file => {
      const fullPath = `${folder}${file}`;
      console.log(`Uploading ${fullPath}`);
      uploadFile(fullPath);
    });
  });
};

const frontEndEnv = process.env.CIRCLE_BRANCH || 'production';
const outputFolder = 'build/';
const staticFolder = 'static/';

uploadFolder(outputFolder);

if (frontEndEnv === 'production') {
  uploadFolder(staticFolder);
}
