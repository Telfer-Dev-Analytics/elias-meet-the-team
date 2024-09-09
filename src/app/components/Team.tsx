"use client";
import React, { useState, useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import { teamMembers, TeamMember } from "../data/teamData";
import Image from "next/image";
import { useTheme } from 'next-themes';

const Team: React.FC = () => {
  const [hoveredMembers, setHoveredMembers] = useState<{ [key: string]: TeamMember | null }>({});
  const [visibleDepartments, setVisibleDepartments] = useState<Set<string>>(new Set());
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const departmentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const { resolvedTheme } = useTheme();

  const departments = Array.from(new Set(teamMembers.map((member) => member.department)));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleDepartments((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.55 }
    );

    Object.values(departmentRefs.current).forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      Object.values(departmentRefs.current).forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const handleMouseEnter = (department: string, member: TeamMember) => {
    // If screen is large, show the info on hover
    if (window.innerWidth >= 1280) {
      setHoveredMembers((prevState) => ({
        ...prevState,
        [department]: member,
      }));
    }
  };

  const handleMouseLeave = (department: string) => {
    if (window.innerWidth >= 1280) {
      setHoveredMembers((prevState) => ({
        ...prevState,
        [department]: null,
      }));
    }
  };

  const handleMemberClick = (member: TeamMember) => {
    // On smaller screens, open the modal
    if (window.innerWidth < 1280) {
      setSelectedMember(member);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className={`container mx-auto px-4 py-10`}>
      {/* Hero Section */}
      <div className="relative w-full h-96 md:h-[36rem] mb-10 rounded-lg overflow-hidden hero-section">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/team-photos/team.jpeg)' }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <div className={`backdrop-blur-lg rounded-lg p-6 md:p-10 ${resolvedTheme === 'dark' ? 'bg-black bg-opacity-60' : 'bg-white bg-opacity-80'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Business Technology Association</h1>
            <p className="text-lg md:text-2xl">Meet The Team</p>
          </div>
        </div>
      </div>

      {departments.map((department) => (
        <div
          key={department}
          id={department}
          ref={(el) => {
            departmentRefs.current[department] = el;
          }}
          className="mb-10"
        >
          {visibleDepartments.has(department) ? (
            <FadeIn>
              <h2 className={`text-3xl font-semibold mb-6 department-title ${resolvedTheme === 'dark' ? 'text-white' : 'text-black'}`}>
                {department}
              </h2>
              <div
                className={`rounded-lg p-6 flex md:flex-row gap-6 info-box ${resolvedTheme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}
                style={{ minHeight: '500px', alignItems: 'stretch' }}
              >
                <div className="flex flex-col gap-8 w-full md:w-1/2">
                  {teamMembers
                    .filter((member) => member.department === department)
                    .map((member) => (
                      <div
                        key={member.id}
                        className={`flex items-center cursor-pointer p-4 rounded transition duration-300 ease-in-out team-member ${resolvedTheme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-300'}`}
                        onMouseEnter={() => handleMouseEnter(department, member)}
                        onMouseLeave={() => handleMouseLeave(department)}
                        onClick={() => handleMemberClick(member)} // Modal opens on smaller screens
                      >
                        <Image
                          src={member.imageSrc || "/team-photos/user.jpg"}
                          alt={member.name}
                          width={100}
                          height={100}
                          className="rounded-full"
                        />
                        <div className="ml-4">
                          <h3 className="text-xl font-semibold">
                            {member.name}
                          </h3>
                          <p className={`${resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                            {member.role}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>

                {/* Show side info on larger screens */}
                {hoveredMembers[department] && window.innerWidth >= 1280 && (
                  <FadeIn className="hidden lg:flex flex-grow justify-center items-center">
                    <div
                      className="rounded-lg text-white relative overflow-hidden flex items-center justify-center info-box"
                      style={{
                        width: '800px',
                        minHeight: '400px',
                        backgroundImage: `url(${hoveredMembers[department]?.imageSrc || "/team-photos/user.jpg"})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        padding: '20px',
                      }}
                    >
                      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>

                      <div className="relative z-10" style={{ textAlign: 'left', padding: '20px' }}>
                        <h3 className="text-2xl font-semibold">
                          {hoveredMembers[department]?.name}
                        </h3>
                        <p className="text-lg text-gray-200">{hoveredMembers[department]?.role}</p>
                        <p className="mt-4">{hoveredMembers[department]?.bio}</p>
                      </div>
                    </div>
                  </FadeIn>
                )}
              </div>
            </FadeIn>
          ) : (
            <div style={{ minHeight: '500px' }}></div>
          )}
        </div>
      ))}

      {/* Modal for small screens and tablets */}
      {isModalOpen && selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            className={`p-6 rounded-lg max-w-md mx-auto ${resolvedTheme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
          >
            <button
              onClick={closeModal}
              className={`absolute top-4 right-4 p-2 rounded-full ${resolvedTheme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'} hover:opacity-80`}
            >
              Close
            </button>
            <div className="text-center">
              <Image
                src={selectedMember.imageSrc || "/team-photos/user.jpg"}
                alt={selectedMember.name}
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold">
                {selectedMember.name}
              </h3>
              <p className="text-lg">{selectedMember.role}</p>
              <p className="mt-4">{selectedMember.bio}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
