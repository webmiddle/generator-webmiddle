// TODO: use the framework to define a search project with Main.js as entrypoint

//import { SearchProject } from 'webmiddle-project-search';
import WebMiddle from 'webmiddle';
import path from 'path';
import fs from 'fs';
import FetchPageLinks from './FetchPageLinks';

const webmiddle = new WebMiddle();

webmiddle.evaluate(
  <FetchPageLinks
    url={process.argv[2]}
    query={process.argv[3]}
    waitFor={process.argv[4]}
  />,
{ expectResource: true })
.then(outputResource => {
  console.log(
    JSON.stringify(outputResource.content, null, 2)
  );
});
