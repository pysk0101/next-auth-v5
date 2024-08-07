import {auth } from "@/auth"
 
export default async function  Dashboard() {
    //Userin session bilgilerini cekme
    const session = await auth()
    //Userin session bilgilerini gosterme
    
    
    //!Backendden userin verilerini cekme
    // const user = await axios("/api/user", {data : {}})
    
    return (
        <div className="min-h-screen bg-gray-100">
          <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            </div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <div className="px-4 py-6 sm:px-0">
                <div className="rounded-lg h-96">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h2 className="text-xl font-semibold text-gray-800">Card 1</h2>
                      <p className="mt-2 text-gray-600">This is the content of card 1.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h2 className="text-xl font-semibold text-gray-800">Card 2</h2>
                      <p className="mt-2 text-gray-600">This is the content of card 2.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h2 className="text-xl font-semibold text-gray-800">Card 3</h2>
                      <p className="mt-2 text-gray-600">This is the content of card 3.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h2 className="text-xl font-semibold text-gray-800">Card 4</h2>
                      <p className="mt-2 text-gray-600">This is the content of card 4.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h2 className="text-xl font-semibold text-gray-800">Card 5</h2>
                      <p className="mt-2 text-gray-600">This is the content of card 5.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h2 className="text-xl font-semibold text-gray-800">Card 6</h2>
                      <p className="mt-2 text-gray-600">This is the content of card 6.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      )
}