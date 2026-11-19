import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type TeamMember = {
  name: string;
  role: string;
  /** Optional photo, e.g. "/teams/praise.jpeg". Falls back to initials. */
  image?: string;
  gradient: string;
};

const team: TeamMember[] = [
  {
    name: "Praise Odhiambo",
    role: "Founder",
    image: "/teams/praise.jpeg",
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    name: "Michael Odhiambo",
    role: "Designer",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    name: "Billbright Yego",
    role: "Content Manager",
    gradient: "from-green-500 to-teal-500",
  },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const OurTeam = () => {
  return (
    <section
      id="team"
      className="py-16 bg-white dark:bg-slate-900 text-center scroll-mt-20"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-white mb-4">
        Meet Our Team
      </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 px-4">
        The people building Vhumani to bring businesses and creators together.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-12 max-w-5xl mx-auto">
        {team.map((member) => (
          <div
            key={member.name}
            className="shadow-md bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl flex flex-col items-center p-8"
          >
            <Avatar className="w-28 h-28 mb-4">
              {member.image && (
                <AvatarImage
                  src={member.image}
                  alt={member.name}
                  className="object-cover object-[50%_25%]"
                />
              )}
              <AvatarFallback
                className={`bg-gradient-to-br ${member.gradient} text-white text-2xl font-semibold`}
              >
                {getInitials(member.name)}
              </AvatarFallback>
            </Avatar>
            <h3 className="text-lg font-semibold text-blue-700 dark:text-white mb-1">
              {member.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
