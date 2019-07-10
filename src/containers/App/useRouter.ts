import { useContext } from 'react'
import { __RouterContext, RouteComponentProps } from 'react-router-dom'

function useRouter<TParams = {}>() {
	return useContext(__RouterContext) as RouteComponentProps<TParams>
}
export default useRouter
