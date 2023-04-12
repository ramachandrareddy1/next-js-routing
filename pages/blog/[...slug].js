
import { useRouter } from "next/router"
export default function blogWithPusblishDate(){
    const router = useRouter()
    const slug= router.query.slug;

    return <div>
        <h1>{slug}</h1>

    </div>
}