import { 
  SiSwift, 
  SiHtml5, 
  SiCss3,
  SiGit,
  SiGithub,
  SiFirebase,
  SiWordpress,
  SiFramer,
  SiApple,
  SiRaspberrypi,
  SiWebflow
} from 'react-icons/si';
import { RiAppsLine } from 'react-icons/ri';
import { FaWindows } from 'react-icons/fa';
import { MdPhotoCamera, MdExtension } from 'react-icons/md';

export function SkillsSection() {
  // All skills in a single array
  const skills = [
    { name: "Swift", icon: SiSwift, color: "text-orange-500" },
    { name: "SwiftUI", icon: RiAppsLine, color: "text-blue-500" },
    { name: "HTML", icon: SiHtml5, color: "text-orange-600" },
    { name: "CSS", icon: SiCss3, color: "text-blue-600" },
    { name: "Git", icon: SiGit, color: "text-red-500" },
    { name: "GitHub", icon: SiGithub, color: "text-gray-800" },
    { name: "Raspberry Pi", icon: SiRaspberrypi, color: "text-red-600" },
    { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
    { name: "WordPress", icon: SiWordpress, color: "text-blue-700" },
    { name: "Elementor", icon: MdExtension, color: "text-pink-500" },
    { name: "Framer", icon: SiFramer, color: "text-black" },
    { name: "Webflow", icon: SiWebflow, color: "text-blue-500" },
    { name: "Photomator", icon: MdPhotoCamera, color: "text-purple-500" },
    { name: "macOS", icon: SiApple, color: "text-gray-700" },
    { name: "Windows", icon: FaWindows, color: "text-blue-600" },
  ];

  return (
    <div className="mt-24">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Skills
        </h2>
      </div>
      
      {/* Skills Grid */}
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="group relative"
          >
            {/* Tooltip */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
              {skill.name}
            </div>
            
            {/* Icon */}
            <div className="p-3 rounded-lg bg-white border border-gray-100 hover:shadow-sm transition-all duration-200">
              <skill.icon className={`text-3xl ${skill.color}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
