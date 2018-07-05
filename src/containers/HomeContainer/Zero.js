// @flow
import * as React from 'react'
import { Redirect } from 'react-router-dom'

export default () => <Redirect to={`/${new Date().getTime()}`} />
