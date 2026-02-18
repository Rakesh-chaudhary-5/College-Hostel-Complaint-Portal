import React, { useState } from "react";

const ComplaintCard = ({ 
  studentName, 
  title, 
  status, 
  description, 
  category, 
  date, 
  upvoteCount, 
  hasImage, 
  adminComment,
  resolved_date
}) => {
  const [votes, setVotes] = useState(upvoteCount);
  const [isUpvoted, setIsUpvoted] = useState(false);

  // Handle upvote toggle
  const handleUpvote = () => {
    if (isUpvoted) {
      setVotes(votes - 1);
    } else {
      setVotes(votes + 1);
    }
    setIsUpvoted(!isUpvoted);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group">
      
      {/* 1. HEADER ROW: Student Name | Status */}
      <div className="flex justify-between items-start mb-6">
        {/* Student Name (Top Left) */}
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">
                {studentName.charAt(0)}
            </div>
            <span className="text-sm font-semibold text-gray-700 bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
                {studentName}
            </span>
        </div>

        {/* Status Badge (Top Right) */}
        <div className="flex gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-wider ${
            status === 'Pending' 
            ? 'bg-yellow-50 text-yellow-600 border-yellow-200' 
            : 'bg-green-50 text-green-600 border-green-200'
        }`}>
            {status}
        </span>
        {
          status === "Resolved" ? <span className="bg-green-50 text-green-600 border-green-200 px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-wider">
          {resolved_date}
        </span> 
        : ""
        }
        </div>
      </div>

      {/* 2. TITLE SECTION (Centered with dashed lines) */}
      <div className="relative text-center mb-4">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200 border-dashed"></div>
        </div>
        <h3 className="relative inline-block bg-white px-4 text-lg font-bold text-gray-900">
            {title}
        </h3>
      </div>

      {/* 3. DESCRIPTION */}
      <div className="mb-6">
        <p className="text-gray-600 text-sm leading-relaxed">
            <span className="font-semibold text-gray-900">Description: </span>
            {description}
        </p>
      </div>

      {/* 4. FOOTER ROW (Image, Category, Date, Actions) */}
      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-100">
        
        {/* Image Button */}
        {hasImage && (
            <button className="flex items-center gap-1 text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg hover:bg-gray-200 transition">
                📷 Img
            </button>
        )}

        {/* Category Badge */}
        <span className="text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1.5 rounded-lg border border-purple-100">
            🏷 {category}
        </span>

        {/* Date */}
        <span className="text-xs text-gray-400 font-medium">
            📅 {date}
        </span>

        {/* Admin Comment Indicator */}
        {adminComment && (
             <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100 flex items-center gap-1">
                💬 Admin Replied
            </span>
        )}

        {/* Spacer to push Upvote to right */}
        <div className="flex-grow"></div>

        {/* Upvote Button (Interactive) */}
        <button 
            onClick={handleUpvote}
            className={`flex cursor-pointer items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-md active:scale-95 ${
                isUpvoted 
                ? 'bg-indigo-600 text-white shadow-indigo-200' 
                : 'bg-gray-900 text-white hover:bg-gray-800 shadow-gray-200'
            }`}
        >
            ▲ Upvote <span className="bg-white/20 px-1.5 rounded text-xs ml-1">{votes}</span>
        </button>
      </div>

    </div>
  );
};

export default ComplaintCard;