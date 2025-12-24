import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="max-w-md w-full text-center bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-6xl font-extrabold text-green-600 mb-4">
          404
        </h1>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>

        <p className="text-gray-600 mb-6">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-lg bg-green-600 text-white font-medium
                     hover:bg-green-700 transition-colors duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
