import test from 'ava';
import FetchPageLinks from '../src/FetchPageLinks';
import WebMiddle, { evaluate, createContext } from 'webmiddle';

test.beforeEach(t => {
  t.context.webmiddle = new WebMiddle();
});

test('FetchPageLinks', async t => {
  const resource = await evaluate(createContext(t.context.webmiddle, { expectResource: true }), (
    <FetchPageLinks
      url="https://news.ycombinator.com/"
      query="javascript"
    />
  ));

  t.is(resource.contentType, 'application/json');
  t.is(typeof resource.content.root, 'object');
});
