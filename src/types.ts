export interface LabelValue {
  label: string;
  value: string;
}

export interface ExpertiseData {
  title: string;
  description: string;
  techStacks: string[];
}

export interface TimelineData {
  duration: string;
  jobTitle: string;
  description: string;
  company: string;
}

export interface ContactForm {
  fullname: string;
  email: string;
  message: string;
}

export interface RenderGridCardProps {
  src: string;
  title: string;
}
