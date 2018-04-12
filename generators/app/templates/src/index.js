// TODO: use the framework to define a search project with Main.js as entrypoint

//import { SearchProject } from 'webmiddle-project-search';
import { rootContext } from 'webmiddle';
import path from 'path';
import fs from 'fs';
import FetchPageLinks from './FetchPageLinks';

rootContext.evaluate(
  <FetchPageLinks
    name="hackernews"
    url="https://news.ycombinator.com/"
    query="show hn"
  />
).then(resource => {
  console.log(
    JSON.stringify(resource, null, 2)
  );
});
