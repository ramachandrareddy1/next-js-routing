import { useRouter } from "next/router";

export default function ClientSpecificProject(){
    const router = new useRouter();
    const projectId = router.query.projectId;
    const clientId = router.query.id;
    return <div>
        <h2>Client Id -{clientId}</h2>
        <h2>projectId -{projectId}</h2>
    </div>
}