import { Link } from "react-router-dom";
import ComplaintCard from "./ComplaintCard";

function Feed() {
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Recent Complaints</h1>
      
      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-10 max-w-7xl mx-auto">
        
        {/* Card 1 */}
        <ComplaintCard 
          studentName="Rahul Sharma"
          title="Fan Not Working"
          status="Pending"
          description="The ceiling fan in Room 204 has been making a loud noise and stopped working completely last night. The ceiling fan in Room 204 has been making a loud noise and stopped working completely last night.The ceiling fan in Room 204 has been making a loud noise and stopped working completely last night.The ceiling fan in Room 204 has been making a loud noise and stopped working completely last night.The ceiling fan in Room 204 has been making a loud noise and stopped working completely last night.The ceiling fan in Room 204 has been making a loud noise and stopped working completely last night.The ceiling fan in Room 204 has been making a loud noise and stopped working completely last night."
          category="Electrical"
          date="24 Oct 2026"
          upvoteCount={8}
          hasImage={true}
          adminComment={null}
        />

        {/* Card 2 */}
        <ComplaintCard 
          studentName="Priya Patel"
          title="Water Cooler Leak"
          status="Resolved"
          description="Water cooler on the 2nd floor corridor is leaking water continuously, making the floor slippery."
          category="Plumbing"
          date="20 Oct 2026"
          upvoteCount={15}
          hasImage={true}
          adminComment="Maintenance staff sent. Fixed on 21 Oct."
          resolved_date="21 Oct 2026"
        />

      </div>
<Link
  to="/new-complaint"
  className="fixed bottom-6 right-10 z-50 group"
>
  {/* Ping Animation Ring (behind the button) */}
  <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75 animate-ping"></span>

  <div className="relative flex items-center justify-center">
    
    {/* Enhanced Tooltip */}
    <div className="absolute right-20 bg-[#9810FA] text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-lg whitespace-nowrap">
      New Complaint
      {/* Tiny Arrow pointing to button */}
      <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-[#9810FA] rotate-45"></div>
    </div>

    {/* Gradient Button */}
    <div
      className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 
      text-white rounded-full flex items-center justify-center 
      shadow-[0_0_25px_rgba(79,70,229,0.6)] 
      transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-90"
    >
      <svg className="w-8 h-8 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"></path></svg>
    </div>
  </div>
</Link>
    </div>
  );
}

export default Feed;