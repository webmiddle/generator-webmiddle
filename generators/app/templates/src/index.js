// TODO: use the framework to define a search project with Main.js as entrypoint

//import { SearchProject } from 'webmiddle-project-search';
import webmiddle, { evaluate, createContext } from 'webmiddle';
import path from 'path';
import fs from 'fs';
import FetchPageLinks from './FetchPageLinks';

evaluate(createContext({ expectResource: true }), (
  <FetchPageLinks
    url={process.argv[2]}
    query={process.argv[3]}
    waitFor={process.argv[4]}
  />
)).then(outputResource => {
  console.log(
    JSON.stringify(outputResource.content, null, 2)
  );
});
