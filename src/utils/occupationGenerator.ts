const prop1 = [
  "Professional",
  "Semi-professional",
  "Amateur",
  "Inspiring",
  "Aspiring",
  "Senior",
  "Lead",
];
const prop2 = [
  "future",
  "outstanding",
  "brainy",
  "electric",
  "giant",
  "civil",
  "federal",
  "temporary",
  "lethal",
];
const prop3 = [
  "girlfriend",
  "doll maker",
  "dancer",
  "ship builder",
  "road sweeper",
  "nun",
  "speech-language pathologist",
  "drifter",
  "coach potato",
];

const getRandomEl = (data: string[]) => {
  return data[Math.floor(Math.random() * data.length)];
};

export const generateOccupation = () => {
  return `${getRandomEl(prop1)} ${getRandomEl(prop2)} ${getRandomEl(prop3)}`;
};
