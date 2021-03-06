import { useEffect } from 'react'
import { useContext } from 'react'
import Store from '../../../Store/context'

const Etc = () => {

    const { state, dispatch } = useContext(Store)

    useEffect(async () => {
        const response = await fetch('http://localhost:4000/faqs/etc')
        const data = await response.json()
        dispatch({ type: 'FAQ_GET', payload: data })
    }, [])

    const EtcList = state.FAQ.map((v) => {
        return (
            <tr key={v.id}>
                <td>{v.question}</td>
                <td>{v.answer}</td>
            </tr>
        )
    })

    return (
        <>

            <tbody>
                {EtcList}
            </tbody>
        </>
    )
}

export default Etc