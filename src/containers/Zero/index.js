// @flow
import * as React from 'react'
import { Redirect } from 'react-router-dom'
import { now } from '../../utils'

export default () => <Redirect to={`/${now()}`} />
