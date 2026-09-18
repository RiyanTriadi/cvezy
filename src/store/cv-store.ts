import { create } from "zustand";
import { persist } from "zustand/middleware";

// --- Types ---
export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  linkedin: string;
  website: string;
  summary: string;
  photoUrl?: string;
}

export interface Experience {
  id: string;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string;
}

export interface Organization {
  id: string;
  role: string;
  organizationName: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
}

export interface CVData {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  organizations: Organization[];
  education: Education[];
  skills: Skill[];
}

interface CVStore extends CVData {
  // Personal Info
  setPersonalInfo: (info: Partial<PersonalInfo>) => void;

  // Experiences
  addExperience: (exp: Experience) => void;
  updateExperience: (id: string, exp: Partial<Experience>) => void;
  removeExperience: (id: string) => void;

  // Organizations
  addOrganization: (org: Organization) => void;
  updateOrganization: (id: string, org: Partial<Organization>) => void;
  removeOrganization: (id: string) => void;

  // Education
  addEducation: (edu: Education) => void;
  updateEducation: (id: string, edu: Partial<Education>) => void;
  removeEducation: (id: string) => void;

  // Skills
  addSkill: (skill: Skill) => void;
  updateSkill: (id: string, skill: Partial<Skill>) => void;
  removeSkill: (id: string) => void;

  // Reset
  resetCV: () => void;
}

const initialPersonalInfo: PersonalInfo = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  linkedin: "",
  website: "",
  summary: "",
};

const initialState: CVData = {
  personalInfo: initialPersonalInfo,
  experiences: [],
  organizations: [],
  education: [],
  skills: [],
};

export const useCVStore = create<CVStore>()(
  persist(
    (set) => ({
      ...initialState,

      // Personal Info
      setPersonalInfo: (info) =>
        set((state) => ({
          personalInfo: { ...state.personalInfo, ...info },
        })),

      // Experiences
      addExperience: (exp) =>
        set((state) => ({
          experiences: [...state.experiences, exp],
        })),
      updateExperience: (id, exp) =>
        set((state) => ({
          experiences: state.experiences.map((e) =>
            e.id === id ? { ...e, ...exp } : e
          ),
        })),
      removeExperience: (id) =>
        set((state) => ({
          experiences: state.experiences.filter((e) => e.id !== id),
        })),

      // Organizations
      addOrganization: (org) =>
        set((state) => ({
          organizations: [...state.organizations, org],
        })),
      updateOrganization: (id, org) =>
        set((state) => ({
          organizations: state.organizations.map((o) =>
            o.id === id ? { ...o, ...org } : o
          ),
        })),
      removeOrganization: (id) =>
        set((state) => ({
          organizations: state.organizations.filter((o) => o.id !== id),
        })),

      // Education
      addEducation: (edu) =>
        set((state) => ({
          education: [...state.education, edu],
        })),
      updateEducation: (id, edu) =>
        set((state) => ({
          education: state.education.map((e) =>
            e.id === id ? { ...e, ...edu } : e
          ),
        })),
      removeEducation: (id) =>
        set((state) => ({
          education: state.education.filter((e) => e.id !== id),
        })),

      // Skills
      addSkill: (skill) =>
        set((state) => ({
          skills: [...state.skills, skill],
        })),
      updateSkill: (id, skill) =>
        set((state) => ({
          skills: state.skills.map((s) =>
            s.id === id ? { ...s, ...skill } : s
          ),
        })),
      removeSkill: (id) =>
        set((state) => ({
          skills: state.skills.filter((s) => s.id !== id),
        })),

      // Reset
      resetCV: () => set(initialState),
    }),
    {
      name: "cvezy-cv-data",
    }
  )
);
