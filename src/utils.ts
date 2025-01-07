import {
  ContactForm,
  ExpertiseData,
  LabelValue,
  RenderGridCardProps,
  TimelineData,
} from "./types";

import * as yup from "yup";

import empf from "@/assets/empf/empf1.png";
import shop from "@/assets/shop/shop2.png";
import pokemon from "@/assets/pokemon-card.png";
import taskManagement from "@/assets/task-form.png";
import icharge from "@/assets/icharge.jpg";

export const serviceKey = import.meta.env.VITE_SERVICE_ID;
export const publicKey = import.meta.env.VITE_PUBLIC_ID;
export const contactKey = import.meta.env.VITE_CONTACT_TEMPLATE_ID;

export const navItems: LabelValue[] = [
  { label: "Expertise", value: "expertise" },
  { label: "Careers", value: "career" },
  { label: "Project", value: "project" },
  { label: "Contact", value: "contact" },
];

export const expertiseData: ExpertiseData[] = [
  {
    title: "Web Development",
    description:
      "As a Web developer, I specialize in creating visually appealing and highly interactive web experiences. With a keen eye for design and a strong understanding of user experience, I focus on transforming complex ideas into intuitive, responsive interfaces. ",
    techStacks: [
      "HTML",
      "React JS",
      "Vue",
      "Javascript",
      "Typescript",
      "Tailwind CSS",
      "Material UI",
      "Shadcn UI",
    ],
  },
  {
    title: "Backend Development",
    description:
      "As a back-end developer, I specialize in building robust and scalable server-side applications. With a strong focus on performance and security, I design and develop efficient APIs and data architectures that support dynamic, data-driven web applications.",
    techStacks: [
      "Javascript",
      "Typescript",
      "Node JS",
      "Express JS",
      "Hono JS",
      "MySql",
      "MongoDB",
    ],
  },
];

export const timelineData: TimelineData[] = [
  {
    duration: "September 2, 2024 to PRESENT",
    jobTitle: "Frontend Developer",
    company: "Freelance",
    description:
      "Collaborate with UI/UX designers to implement and improve design systems, ensuring consistency and quality across the user interface. \n*Develop and maintain clean, reusable, and efficient code using React, Shadcn UI, Typescript, and related front-end technologies. \n*Implement responsive design principles to ensure the application works seamlessly across all devices and screen sizes. \n*Participate in code reviews, contribute to team knowledge sharing, and help maintain code quality standards. \n*Ensure the technical feasibility of UI/UX designs and assist in the overall architecture of the application.",
  },
  {
    duration: "March 21, 2022 to March 27, 2024",
    jobTitle: "Solution Developer",
    company: "Lenovo PCCW Solutions",
    description:
      "Design UI layouts for web applications based on connection maps or mockups, employing React for enhanced front-end development. Worked extensively on the eMPF project to create user-friendly and visually appealing web interface. \n*Develop the logic for complex functionalities within the front-end of web applications, utilizing React for seamless user experiences. \n*Perform testing with Jest and ensure code quality through SonarQube, addressing any code smell issues within React. \n*Seamlessly integrate APIs provided by the Back-end team into the React-based front-end of the web applications.",
  },
];

export const contactFormValidation = yup.object<ContactForm>({
  fullname: yup.string().required("Fullname is required"),
  email: yup.string().required("Email is required"),
  message: yup.string().required("Message is required"),
});

export const contactFormInitial: ContactForm = {
  email: "",
  fullname: "",
  message: "",
};

export const projectData: RenderGridCardProps[] = [
  {
    src: empf,
    title: "EMPF - Electronic Mandatory Provident Fund (MPF) Platform",
  },
  {
    src: shop,
    title: "Shop E-Commerce Design",
  },
  {
    src: pokemon,
    title: "Pokemon Flip Card Game",
  },
  {
    src: taskManagement,
    title: "Task Management",
  },
  {
    src: icharge,
    title: "iCharge - One-stop self-service mobile power bank rental service",
  },
];
