

export default function loading() {
  return (
    <div className="pt-10 mx-2 lg:pl-52 w-6xl flex justify-center sm:space-x-4 flex-col sm:flex-row">
      <div className="animate-pulse">
        <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
        <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
        <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-md"></div>
      </div>
      {/* image-loading */}
      <div className="hidden sm:inline-flex sm:space-x-4">
      <div className="animate-pulse ">
        <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
        <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
        <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-md"></div>
      </div>
      {/* image-loading */}
      <div className="animate-pulse ">
        <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
        <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
        <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-md"></div>
      </div>
      {/* image-loading */}
      </div>
    </div>
  )
}