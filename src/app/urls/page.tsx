import Link from "next/link";


async function fetchUrls() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/urls`);

    if(!response.ok) throw new Error('failed to fetch urls');
    return response.json();
}

export default async function UrlList(){
    let urls;
    try{
        urls = await fetchUrls();        
    } catch(error){
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="p-10 bg-white rounded-lg shadow-2xl max-w-4xl w-full">
                    <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">Error</h1>
                    <p className="text-center text-red-500">Failed to load URLs</p>
                </div>
            </div>
        );
    }

    

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
           

            <div className="p-10 bg-white rounded-lg shadow-2xl max-w-4xl w-full">
                <Link href={'/'}>
                    <button className="bg-black text-white rounded-lg px-2 py-1 text-sm">
                        Home
                    </button>
                </Link>

                <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">
                    All Shorten Urls
                </h1>

                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th className="text-gray-700 text-center"> Original Url </th>
                                <th className="text-gray-700 text-center"> Shorten Url </th>
                            </tr>
                        </thead>

                        

                        <tbody>
                            {urls.response.map((url : { _id : string, originalUrl : string, shortUrl : string}) => (

                                    <tr key={url._id}>
                                        <td className="text-gray-700 text-center">
                                            {url.originalUrl.length > 50 ? `${url.originalUrl.substring(0, 50)}...` : url.originalUrl}
                                        </td>

                                        <td className="text-center">
                                            <a 
                                                href={`${url.originalUrl}`}
                                                target="_blank"
                                                className="link link-primary"
                                            >
                                                {`${process.env.NEXT_PUBLIC_BASE_URL}/${url.shortUrl}`}
                                            </a>
                                        </td>
                                    </tr>
                                    
                                ))
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}