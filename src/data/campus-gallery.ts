export type PhotoOrientation = "portrait" | "landscape";

export type CampusPhoto = {
  src: string;
  title: string;
  line: string;
  orientation: PhotoOrientation;
  featured?: boolean;
};

export const campusPhotos: CampusPhoto[] = [
  {
    src: "/images/campus/rangoli.jpeg",
    title: "Festival Rangoli",
    line: "Colour and craft across the campus floor",
    orientation: "landscape",
    featured: true,
  },
  {
    src: "/images/campus/staff-celebration.jpeg",
    title: "Celebration Evening",
    line: "Lamps, balloons, and a shared rangoli",
    orientation: "landscape",
    featured: true,
  },
  {
    src: "/images/campus/fete-stall.jpeg",
    title: "Fun Fair Stalls",
    line: "Students host the corridor with a smile",
    orientation: "landscape",
    featured: true,
  },
  {
    src: "/images/campus/fete-corridor.jpeg",
    title: "Corridor Fair",
    line: "Families pause at every student stall",
    orientation: "landscape",
  },
  {
    src: "/images/campus/fete-counters.jpeg",
    title: "Fair Counters",
    line: "Games, snacks, and cheerful crowds",
    orientation: "landscape",
  },
  {
    src: "/images/campus/staff-gathering.jpeg",
    title: "Together as a Team",
    line: "Teachers and guests after the programme",
    orientation: "landscape",
  },
  {
    src: "/images/campus/floral-welcome.jpeg",
    title: "A Floral Welcome",
    line: "Marigolds mark the start of the day",
    orientation: "landscape",
  },
  {
    src: "/images/campus/ceremony-circle.jpeg",
    title: "Opening Ceremony",
    line: "A quiet blessing before the festivities",
    orientation: "landscape",
  },
  {
    src: "/images/campus/blessings.jpeg",
    title: "Lamp and Blessings",
    line: "Tradition lighting the school hall",
    orientation: "portrait",
  },
  {
    src: "/images/campus/podium-winners.jpeg",
    title: "Prize Day",
    line: "Champions on the school podium",
    orientation: "landscape",
    featured: true,
  },
  {
    src: "/images/campus/prize-day.jpeg",
    title: "Proud Winners",
    line: "Certificates, trophies, and big smiles",
    orientation: "landscape",
  },
  {
    src: "/images/campus/open-air-quiz.jpeg",
    title: "Open-Air Quiz",
    line: "Learning under an open sky",
    orientation: "landscape",
    featured: true,
  },
  {
    src: "/images/campus/quiz-circle.jpeg",
    title: "First Position",
    line: "The winning quiz team, front and centre",
    orientation: "landscape",
  },
  {
    src: "/images/campus/quiz-champions.jpeg",
    title: "Quiz Champions",
    line: "New Horizon Block takes the lead",
    orientation: "landscape",
    featured: true,
  },
  {
    src: "/images/campus/team-e.jpeg",
    title: "Young Quiz Teams",
    line: "Ready, steady, and full of answers",
    orientation: "landscape",
    featured: true,
  },
  {
    src: "/images/campus/team-c.jpeg",
    title: "Team Spirit",
    line: "Side by side for the next question",
    orientation: "landscape",
  },
  {
    src: "/images/campus/quiz-teams.jpeg",
    title: "Courtyard Teams",
    line: "Every desk is a starting line",
    orientation: "landscape",
  },
  {
    src: "/images/campus/courtyard-quiz.jpeg",
    title: "Quiz in the Courtyard",
    line: "Teachers guide, students lean in",
    orientation: "landscape",
  },
  {
    src: "/images/campus/quiz-round.jpeg",
    title: "Another Round",
    line: "Focus, teamwork, and a clear sky",
    orientation: "landscape",
  },
  {
    src: "/images/campus/hindi-recitation.jpeg",
    title: "Hindi Recitation",
    line: "Words, rhythm, and quiet pride",
    orientation: "landscape",
    featured: true,
  },
  {
    src: "/images/campus/senior-quiz.jpeg",
    title: "Senior Quiz Circle",
    line: "The whole house gathers to listen",
    orientation: "landscape",
  },
  {
    src: "/images/campus/recitation-circle.jpeg",
    title: "Words on Stage",
    line: "A poem finds its audience outdoors",
    orientation: "landscape",
  },
  {
    src: "/images/campus/assembly-quiz.jpeg",
    title: "Campus Assembly",
    line: "Green mats, open ground, one voice",
    orientation: "landscape",
  },
  {
    src: "/images/campus/community-yoga.jpeg",
    title: "Yoga Together",
    line: "A morning of stillness and strength",
    orientation: "landscape",
    featured: true,
  },
  {
    src: "/images/campus/cobra-pose.jpeg",
    title: "Cobra Pose",
    line: "Strength in one steady stretch",
    orientation: "landscape",
  },
  {
    src: "/images/campus/seated-yoga.jpeg",
    title: "Quiet Focus",
    line: "Breath, balance, and a calm mind",
    orientation: "portrait",
  },
  {
    src: "/images/campus/tree-pose.jpeg",
    title: "Tree Pose",
    line: "Little yogis, bright confidence",
    orientation: "portrait",
  },
  {
    src: "/images/campus/home-yoga.jpeg",
    title: "Morning Balance",
    line: "Yoga practised with a full heart",
    orientation: "portrait",
  },
  {
    src: "/images/campus/yoga-practice.jpeg",
    title: "Forward Fold",
    line: "A simple pose, done with care",
    orientation: "portrait",
  },
  {
    src: "/images/campus/balance-pose.jpeg",
    title: "Standing Tall",
    line: "Calm body, steady attention",
    orientation: "portrait",
  },
  {
    src: "/images/campus/tiffin-time.jpeg",
    title: "Tiffin Time",
    line: "Little ones, full plates, big smiles",
    orientation: "landscape",
    featured: true,
  },
  {
    src: "/images/campus/lunch-table.jpeg",
    title: "Lunch Together",
    line: "Sharing the table, sharing the day",
    orientation: "landscape",
  },
  {
    src: "/images/campus/shared-lunch.jpeg",
    title: "Shared Lunch",
    line: "Friends, tiffins, and easy chatter",
    orientation: "landscape",
  },
  {
    src: "/images/campus/junior-class.jpeg",
    title: "Junior Classroom",
    line: "Learning, laughter, and lunch break",
    orientation: "landscape",
    featured: true,
  },
  {
    src: "/images/campus/classroom-smiles.jpeg",
    title: "Classroom Smiles",
    line: "The happiest hour of the school day",
    orientation: "landscape",
  },
  {
    src: "/images/campus/nursery-lunch.jpeg",
    title: "Nursery Table",
    line: "A long blue table full of stories",
    orientation: "portrait",
  },
  {
    src: "/images/campus/little-learners.jpeg",
    title: "Little Learners",
    line: "Uniforms on, appetites ready",
    orientation: "landscape",
  },
  {
    src: "/images/campus/class-lunch.jpeg",
    title: "Class Lunch",
    line: "Everyday joy in the junior wing",
    orientation: "landscape",
  },
  {
    src: "/images/campus/green-board-lunch.jpeg",
    title: "After the Bell",
    line: "A green board and a shared meal",
    orientation: "landscape",
  },
  {
    src: "/images/campus/friends-at-lunch.jpeg",
    title: "Friends at Lunch",
    line: "The small rituals that make a school",
    orientation: "landscape",
  },
];

export const featuredPhotos = campusPhotos.filter((photo) => photo.featured);
export const landscapePhotos = campusPhotos.filter(
  (photo) => photo.orientation === "landscape"
);
export const portraitPhotos = campusPhotos.filter(
  (photo) => photo.orientation === "portrait"
);
