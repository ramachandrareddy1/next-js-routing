import { useRouter } from "next/router"
export default function ProjectIdList(){
    const router = useRouter();
    const id = router.query.projectId
   return <div>
      <h2>Project Id List-{id}</h2>
   </div>
}