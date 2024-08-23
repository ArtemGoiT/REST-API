import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from './constants/index.js';
import { initMongoDB } from './db/initMongoDB.js';
import { startServer } from './server.js';
import { creatDirIfNotExists } from './utils/createDirIfNotExists.js';

const bootstrap = async () => {
  await initMongoDB();
  await creatDirIfNotExists(TEMP_UPLOAD_DIR);
  await creatDirIfNotExists(UPLOAD_DIR);

  startServer();
};

void bootstrap();
