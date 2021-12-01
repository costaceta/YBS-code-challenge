
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

export default function main({ portletNamespace, contextPath, portletElementId }) {

    ReactDOM.render(
        <App
            portletNamespace={portletNamespace}
            contextPath={contextPath}
            portletElementId={portletElementId}
        />,
        document.getElementById(portletElementId)
    );

}