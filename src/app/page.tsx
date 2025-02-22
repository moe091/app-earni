import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col justify-center items-center px-4"
    style={{backgroundImage: "url('images/bg.jpg')", backgroundSize: 'cover'}}>
      {/* Header Section */}
      <div className="text-center -mt-64">
        <h1 className="text-8xl font-extrabold text-gray-900">Earni.</h1>
        <p className="mt-4 text-2xl text-gray-600">
          Financial Data Analysis for Everyone
        </p>
      </div>

    {/* Call-to-Action Section */}
      <div className="mt-16 text-center">
        <p className="text-xl text-gray-700">Create your first visualization</p>
        <a
          href="/visualizations/create"
          className="mt-4 inline-block px-8 py-3 bg-blue-600 text-white rounded-md text-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Go
        </a>
      </div>
    </main> 
  );
}
