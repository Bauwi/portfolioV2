import React from 'react';
import { renderToString } from 'react-dom/server';
import { extractCritical } from 'emotion-server';

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  // SSR for emotion
  const { html, ids, css } = extractCritical(renderToString(bodyComponent));

  /* eslint-disable react/no-danger */
  const criticalStyle = <style dangerouslySetInnerHTML={{ __html: css }} />;
  const criticalIds = (
    <script
      dangerouslySetInnerHTML={{
        __html: `window.__EMOTION_CRITICAL_CSS_IDS__ = ${JSON.stringify(ids)};`,
      }}
    />
  );
  setHeadComponents([criticalIds, criticalStyle]);
  replaceBodyHTMLString(html);
};
