export default function Loading() {
  const cards = Array(6).fill(0);

  return (
    <div className="min-h-screen bg-white px-6 py-12 text-gray-700">
      <div className="max-w-6xl mx-auto mb-12 flex flex-col md:flex-row gap-8 animate-pulse">
        <div className="flex-1 space-y-4">
          <div className="h-8 bg-gray-200 rounded w-2/3"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2"></div>
          <div className="h-6 bg-gray-200 rounded w-full"></div>
          <div className="h-6 bg-gray-200 rounded w-5/6"></div>
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        </div>

        <div className="flex-1 bg-gray-200 rounded h-48 sm:h-64 md:h-auto md:min-h-[250px]"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
        {cards.map((_, i) => (
          <div key={i} className="space-y-6 bg-gray-100 rounded-lg p-6">
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
            <div className="h-48 bg-gray-200 rounded w-full"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 rounded w-5/6"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
