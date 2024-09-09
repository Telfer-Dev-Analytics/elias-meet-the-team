// teamData.ts
export interface TeamMember {
    id: number;
    name: string;
    role: string;
    imageSrc: string;
    department: string;
    bio: string;
  }
  
  export const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Elias Fatine',
      role: 'Director of Development',
      imageSrc: '/images/team-photos/elias.jpeg',
      department: 'Development Team',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at euismod nisl, quis lacinia libero. Nunc vel sem id odio cursus bibendum tristique eu leo. Duis nec augue augue. Phasellus vitae aliquet erat. Vestibulum volutpat luctus magna eu semper. Phasellus posuere, dolor vitae egestas ullamcorper, tellus erat dignissim neque, non porttitor ipsum ex quis dolor. Morbi mollis nibh vitae sollicitudin porttitor. Suspendisse nec elit est. In tempor consequat urna eget porttitor. Aenean sodales accumsan metus, sit amet egestas neque tempor non. Donec id lectus in erat porta eleifend at feugiat nisi. ',
    },
    {
      id: 2,
      name: 'Bob Smith',
      role: 'Director of Development',
      imageSrc: '/images/team-photos/user.jpg',
      department: 'Development Team',
      bio: 'Bob specializes in server-side logic and ensures the seamless functionality of our platforms.',
    },
    {
      id: 3,
      name: 'Carol White',
      role: 'Director of Development',
      imageSrc: '/images/team-photos/user.jpg',
      department: 'Development Team',
      bio: 'Carol is proficient in both frontend and backend development, bridging the gap between user experience and server-side performance.',
    },
    {
      id: 4,
      name: 'David Green',
      role: 'Head of Marketing',
      imageSrc: '/images/team-photos/user.jpg',
      department: 'Marketing Team',
      bio: 'David leads the marketing team with innovative strategies that boost brand visibility and drive engagement.',
    },
    {
      id: 5,
      name: 'Emily Brown',
      role: 'Content Strategist',
      imageSrc: '/images/team-photos/user.jpg',
      department: 'Marketing Team',
      bio: 'Emily crafts compelling content that resonates with audiences, enhancing our brand’s narrative.',
    },
    {
      id: 6,
      name: 'Frank Miller',
      role: 'SEO Specialist',
      imageSrc: '/images/team-photos/user.jpg',
      department: 'Marketing Team',
      bio: 'Frank optimizes our digital presence, ensuring our content reaches the right audience through search engines.',
    },
    {
      id: 7,
      name: 'Grace Lee',
      role: 'Corporate Communications Manager',
      imageSrc: '/images/team-photos/user.jpg',
      department: 'Corporate Team',
      bio: 'Grace manages our corporate communications, ensuring clear and consistent messaging across all channels.',
    },
    {
      id: 8,
      name: 'Henry Adams',
      role: 'Chief Financial Officer',
      imageSrc: '/images/team-photos/user.jpg',
      department: 'Corporate Team',
      bio: 'Henry oversees financial operations, guiding the company towards sustainable growth and profitability.',
    },
    {
      id: 9,
      name: 'Isabel King',
      role: 'Corporate Legal Advisor',
      imageSrc: '/images/team-photos/user.jpg',
      department: 'Corporate Team',
      bio: 'Isabel provides legal counsel, ensuring that all company activities comply with regulatory requirements.',
    },
    {
      id: 10,
      name: 'Jack Robinson',
      role: 'Event Coordinator',
      imageSrc: '/images/team-photos/user.jpg',
      department: 'Event Team',
      bio: 'Jack orchestrates seamless events, from planning to execution, ensuring memorable experiences for all attendees.',
    },
    {
      id: 11,
      name: 'Kathy Williams',
      role: 'Event Marketing Specialist',
      imageSrc: '/images/team-photos/user.jpg',
      department: 'Event Team',
      bio: 'Kathy leverages her marketing expertise to promote our events, driving attendance and engagement.',
    },
    {
      id: 12,
      name: 'Liam Turner',
      role: 'Event Logistics Manager',
      imageSrc: '/images/team-photos/user.jpg',
      department: 'Event Team',
      bio: 'Liam handles all logistical aspects of events, ensuring that every detail is meticulously planned and executed.',
    },
  ];
  