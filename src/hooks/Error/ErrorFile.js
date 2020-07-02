import React from 'react'
import ErrorData from "./ErrorData"
import ErrorBoundry from './ErrorBoundry'

function ErrorFile() {
    return (
        <div>
            <ErrorBoundry>
                <ErrorData userName="donald" />
            </ErrorBoundry>

            <ErrorBoundry>
              <ErrorData userName="clem" />
            </ErrorBoundry>

            <ErrorBoundry>
              <ErrorData userName="jude" />
            </ErrorBoundry>
        
        </div>
    )
}

export default ErrorFile
