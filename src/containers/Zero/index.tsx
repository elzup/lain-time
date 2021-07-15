import * as React from 'react'
import { Redirect } from 'react-router-dom'
import { now } from '../../utils'

const Regenerate = () => <Redirect to={`/0/${now()}`} />
export default Regenerate
