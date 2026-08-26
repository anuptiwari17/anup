import { EXPERIENCES } from "@/constants/experiences";
import { LINK } from "@/constants/links";
import { getBaseUrl } from "@/constants/url";

const [currentExperience] = EXPERIENCES;

export const USER = {
  address: {
    country: "India",
    locality: "Jalandhar",
  },
  avatar:
    "https://github.com/anuptiwari17.png",
  company: currentExperience ? currentExperience.experienceOrg.name : "Byteoski Developers",
  email: LINK.EMAIL,
  firstName: "Anup",
  jobTitle: "Software Developer",
  lastName: "Tiwari",
  username: "anuptiwari17",
  website: getBaseUrl(),
} as const;

export const NAME = `${USER.firstName} ${USER.lastName}`;

