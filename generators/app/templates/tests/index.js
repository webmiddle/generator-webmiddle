import test from 'ava';
import FetchPageLinks from '../src/FetchPageLinks';
import WebMiddle, { evaluate, createContext } from 'webmiddle';

test.beforeEach(t => {
  t.context.webmiddle = new WebMiddle();
});

test('FetchPageLinks', async t => {
  await evaluate(createContext(t.context.webmiddle, { expectResource: true }), (
    <FetchPageLinks
      url="https://news.ycombinator.com/"
      query="javascript"
    />
  ));
});
