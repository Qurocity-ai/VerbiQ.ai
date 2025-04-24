import { useState, useEffect } from 'react';
import { Star, User, Calendar, MessageCircle } from 'lucide-react';

const FeedbackSection = () => {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await fetch(
          'https://verbiq-backend1.onrender.com/reviews/getfeedback'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch feedback');
        }
        const data = await response.json();
        setFeedback(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 ">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-6 text-gray-600 font-medium">Loading feedback...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-16 px-4 ">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center w-full max-w-md">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-red-800 mb-2">Error Loading Feedback</h3>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (   
      <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-[#15647A] mb-3 mt-6">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-[#15647A] mx-auto rounded-full"></div>
        </div>
  

        {feedback.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-8 text-center max-w-lg mx-auto">
            <MessageCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <p className="text-lg text-gray-600">No feedback available yet. Be the first to share your experience!</p>
          </div>
        ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {feedback.map((item, index) => (
      <div
  key={index}
  className="bg-white rounded-xl shadow-sm overflow-hidden h-auto transition-all duration-300 hover:shadow-lg group relative cursor-pointer"
  style={{ 
    animation: `fadeIn 0.5s ease-out ${0.1 * index}s both`,
    opacity: 0
  }}
>
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="p-6 h-full flex flex-col relative">
          {/* User Info */}
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 transition-colors duration-300 group-hover:bg-blue-200">
              <User className="h-6 w-6 text-blue-600 transition-colors duration-300 group-hover:text-blue-700" />
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                {item.name || 'Anonymous'}
              </h3>
              {item.rating && (
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 transition-colors ${i < item.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Feedback Text */}
          <div className="relative flex-grow mb-4">
  <div className="text-gray-600 pl-6 relative">
    <MessageCircle className="w-6 h-6 text-blue-200 absolute -left-1 -top-1" />
    <div className="relative z-10">
      <p className="text-justify line-clamp-4 transition-all duration-300 group-hover:line-clamp-none group-hover:pb-4">
        "{item.feedback}"
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white via-white/80 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  </div>
</div>
          
          {/* Date */}
          {item.date && (
            <div className="flex items-center mt-auto pt-3 border-t border-gray-100 text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(item.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
)}
</div>    
<style jsx>{`
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
`}</style>
</section>

  );
};

export default FeedbackSection;