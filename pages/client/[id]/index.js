import { useRouter } from "next/router"
export default function ClientId(){
    const router = useRouter();
    const id = router.query.id;
    return <div>
        <h2>Client ID-{id}</h2>
    </div>
}