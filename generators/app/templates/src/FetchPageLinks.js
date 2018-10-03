import { PropTypes } from 'webmiddle';
import Pipe from 'webmiddle-component-pipe';
import HttpRequest from 'webmiddle-component-http-request';
import HtmlToJson, { helpers } from 'webmiddle-component-cheerio-to-json';

const {
  elText, elAttr, elMap, elPipe,
} = helpers;

function FetchPageLinks({ url, query, waitFor }) {
  return (
    <Pipe>
      <HttpRequest
        name="rawHtml"
        contentType="text/html"
        url={url}
        waitFor={waitFor}
      />

      {({ rawHtml }) =>
        <HtmlToJson name="result" from={rawHtml}>
          <anchors
            el="a"
            condition={el => el.text().toUpperCase().indexOf(query.toUpperCase()) !== -1}
          >
            {elMap(el => (
              <anchor el={el}>
                <url>{elAttr('href')}</url>
                <text>{elText()}</text>
              </anchor>
            ))}
          </anchors>
        </HtmlToJson>
      }
    </Pipe>
  );
}

FetchPageLinks.propTypes = {
  url: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
};

export default FetchPageLinks;
