import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Client(){
    const router = new useRouter();

    function LoadProjectPage(){
      router.push('/client/ram/project1')
    }
    const clients = [
        {
            id:1,
            name:"ram"
        },
        {
            id:2,
            name:"chandra"
        }
    ]
    return <div>
        <ul>
         {clients.map((client)=>{
            return (<li key={client.id}><Link href={` /client/${client.id}`}>{client.name}</Link></li>)
         })}
        </ul>
        <button onClick={LoadProjectPage}>Load Project</button>
    </div>
}