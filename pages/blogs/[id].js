import {useRouter} from 'next/router'

const Detail = (props) => {
    const router = useRouter()
    const postID = router.query.id
  
    return (
        <div>
            <h1>Details of Id {postID}</h1>
        </div>
    )
}

export default Detail