import { Calendar, MapPin, Users } from "lucide-react";

export function Events() {
  const events = [
    {
      title: "India HCI 2025 Exhibition",
      date: "December 15-18, 2025",
      type: "Conference",
      location: "IIT Bombay",
      description: "Showcasing our latest VR research and interactive installations at India's premier Human-Computer Interaction conference.",
      image: "https://images.unsplash.com/photo-1768590149213-8ab16aaf7511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29uZmVyZW5jZSUyMGV2ZW50fGVufDF8fHx8MTc3Mjg3NTk4OXww&ixlib=rb-4.1.0&q=80&w=1080",
      status: "Completed",
    },
    {
      title: "Animela 2025",
      date: "January 20-22, 2025",
      type: "Exhibition",
      location: "Mumbai",
      description: "Participating in India's largest animation and immersive media festival with VR art installations and demonstrations.",
      image: "https://images.unsplash.com/photo-1758598303762-56c85bef2496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbW1lcnNpdmUlMjBkaWdpdGFsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzI5NTYxNDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      status: "Completed",
    },
    {
      title: "Autodesk India Visit",
      date: "February 5, 2025",
      type: "Industry Visit",
      location: "DEF Lab",
      description: "Hosted Autodesk team for collaboration discussions on future design tools and VR integration in automotive design workflows.",
      image: "https://images.unsplash.com/photo-1761122912306-13d8f83892c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjByZXNlYXJjaCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzI5NTYxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      status: "Completed",
    },
    {
      title: "Sony Research Collaboration",
      date: "February 18, 2025",
      type: "Industry Visit",
      location: "DEF Lab",
      description: "Meeting with Sony Research team to explore collaborative opportunities in immersive entertainment and VR experiences.",
      image: "https://images.unsplash.com/photo-1759092912891-9f52486bb059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NzI5NTYxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      status: "Completed",
    },
    {
      title: "DRDO Technical Exchange",
      date: "March 2, 2025",
      type: "Industry Visit",
      location: "DEF Lab",
      description: "Technical exchange session with Defence Research and Development Organisation focusing on simulation and training applications.",
      image: "https://images.unsplash.com/photo-1771920800290-53f22e5ac3f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBzaW11bGF0b3IlMjBjb2NrcGl0fGVufDF8fHx8MTc3Mjk1NjE0OHww&ixlib=rb-4.1.0&q=80&w=1080",
      status: "Completed",
    },
    {
      title: "TU Delft Design Exchange",
      date: "March 25-27, 2026",
      type: "Collaboration",
      location: "DEF Lab & Online",
      description: "Joint research workshop with TU Delft faculty and students exploring future mobility design and sustainable transportation.",
      image: "https://images.unsplash.com/photo-1760386128692-81476422e599?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMG1vYmlsaXR5JTIwZnV0dXJlJTIwY2l0eXxlbnwxfHx8fDE3NzI5NTYxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      status: "Upcoming",
    },
    {
      title: "DEF Lab Annual Showcase",
      date: "April 15, 2026",
      type: "Exhibition",
      location: "IIT Bombay",
      description: "Annual exhibition showcasing student projects, research outcomes, and innovative prototypes from the past academic year.",
      image: "https://images.unsplash.com/photo-1768590149213-8ab16aaf7511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29uZmVyZW5jZSUyMGV2ZW50fGVufDF8fHx8MTc3Mjg3NTk4OXww&ixlib=rb-4.1.0&q=80&w=1080",
      status: "Upcoming",
    },
    {
      title: "Future Mobility Summit 2026",
      date: "May 20-22, 2026",
      type: "Conference",
      location: "Mumbai Convention Center",
      description: "Presenting keynote on 'Designing Human-Centered Autonomous Vehicle Experiences' at India's premier mobility conference.",
      image: "https://images.unsplash.com/photo-1607088797610-020db7a14cd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmUlMjBtb2JpbGl0eSUyMGVsZWN0cmljJTIwdmVoaWNsZXxlbnwxfHx8fDE3NzI5NTYxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      status: "Upcoming",
    },
  ];

  const getStatusColor = (status: string) => {
    return status === "Upcoming" ? "bg-[#7DF9FF]/20 text-[#003153]" : "bg-gray-100 text-[#666666]";
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Conference":
        return "text-[#FF6600] bg-[#FF6600]/10";
      case "Exhibition":
        return "text-[#7DF9FF] bg-[#7DF9FF]/10";
      case "Industry Visit":
        return "text-[#003153] bg-[#003153]/10";
      case "Collaboration":
        return "text-purple-600 bg-purple-100";
      default:
        return "text-[#666666] bg-gray-100";
    }
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl text-[#003153] mb-4">Events & Collaborations</h1>
          <div className="w-24 h-1 bg-[#FF6600] mx-auto mb-6"></div>
          <p className="text-lg text-[#666666] max-w-3xl mx-auto">
            DEF Lab actively participates in conferences, exhibitions, and industry collaborations to share research and foster innovation.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button className="px-6 py-2 bg-[#FF6600] text-white rounded-full text-sm">
            All Events
          </button>
          <button className="px-6 py-2 bg-gray-100 text-[#666666] hover:bg-gray-200 rounded-full text-sm transition-colors">
            Upcoming
          </button>
          <button className="px-6 py-2 bg-gray-100 text-[#666666] hover:bg-gray-200 rounded-full text-sm transition-colors">
            Past Events
          </button>
        </div>

        {/* Events Timeline */}
        <div className="space-y-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Image */}
                <div className="h-60 lg:h-60 overflow-hidden bg-gray-100">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="lg:col-span-2 p-6 lg:p-8 flex flex-col h-60">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`text-xs px-3 py-1 rounded-full ${getTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                    <span className={`text-xs px-3 py-1 rounded-full ${getStatusColor(event.status)}`}>
                      {event.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl text-[#003153] mb-3 group-hover:text-[#FF6600] transition-colors">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#666666] leading-relaxed mb-4 flex-grow">{event.description}</p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-[#666666]">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-[#FF6600]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-[#FF6600]" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: "15+", label: "Events per Year" },
            { number: "10+", label: "Industry Partners" },
            { number: "500+", label: "Participants Engaged" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200">
              <div className="text-4xl text-[#FF6600] mb-2">{stat.number}</div>
              <div className="text-[#666666]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Collaboration CTA */}
        <div className="mt-20 text-center p-12 bg-gradient-to-br from-[#003153] to-[#003153]/90 rounded-2xl text-white">
          <h2 className="text-3xl mb-4">Collaborate with Us</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Interested in hosting an event, exhibition, or research collaboration with DEF Lab? We welcome partnerships with industry and academia.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-[#FF6600] text-white rounded-lg hover:bg-[#FF6600]/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Discuss Collaboration
          </a>
        </div>
      </div>
    </div>
  );
}