import * as path from 'path';
import * as fs from 'fs';

export const loadGQLFile = (_file) => {
  const filePath = path.join(__dirname, '../ChuckNorris', _file)
  return fs.readFileSync(filePath, 'utf-8')
}