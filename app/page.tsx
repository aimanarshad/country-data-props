// app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-pink-200">
      <h1 className="text-5xl font-bold text-center text-yellow-900">Country List</h1>
      <div className="flex flex-col justify-center items-center min-h-screen">
      
<Link href="/countries/japan"className="bg-blue-500 text-white  p-4 border-4 border-blue-900 w-64 h-20 mb-4" >Japan</Link>
<Link href="/countries/italy"className="bg-red-500 text-white p-4 border-4 border-red-900 w-64 h-20 mb-4"  >Italy</Link>
<Link href="/countries/mexico"  className="bg-pink-500 text-white p-4 border-4 border-pink-900 w-64 h-20 mb-4">Mexico</Link>
<Link href="/countries/india"className="bg-orange-500 text-white p-4 border-4 border-orange-900 w-64 h-20 mb-4" >India</Link>
<Link href="/countries/france" className="bg-green-500 text-white  p-4 border-4 border-green-900 w-64 h-20 mb-4">France</Link>

     
    </div>
    </div>
  );
}


// import Image from "next/image";
// import Link from "next/link";
// export default function country_name() {
//   return (
//     <div className="bg-pink-200" >
      
//       <h1 className="text-5xl font-bold text-center text-yellow-900">Country List</h1>
//       <div className="flex flex-col justify-center items-center m  href="/country/Japan" >Japan</Link>
//     <Link className="bg-red-500 text-white p-4 border-4 border-red-900 w-64 h-20 mb-4" href="/country/Italy" >Italy</Link>
//     <Link  className="bg-pink-500 text-white p-4 border-4 border-pink-900 w-64 h-20 mb-4"  href="/country/Mexico" >Mexico</Link>
//     <Link  className="bg-orange-500 text-white p-4 border-4 border-orange-900 w-64 h-20 mb-4" href="/country/India" >India</Link>
//     <Link  className="bg-green-500 text-white  p-4 border-4 border-green-900 w-64 h-20 mb-4" href="/country/France" >France</Link>
//     </div>
//     </div>
//   );
// }
