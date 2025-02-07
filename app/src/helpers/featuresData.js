import access from "../assets/icon-access-anywhere.svg";
import security from "../assets/icon-security.svg";
import collaboration from "../assets/icon-collaboration.svg";
import files from "../assets/icon-any-file.svg";

const featuresData = [
  {
    id: 1,
    title: "Access your files, anywhere",
    description:
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    icon: access,
  },
  {
    id: 2,
    title: "Security you can trust",
    description:
      "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    icon: security,
  },
  {
    id: 3,
    title: "Real-time collaboration",
    description:
      "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    icon: collaboration,
  },
  {
    id: 4,
    title: "Store any type of file",
    description:
      "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    icon: files,
  },
];

export default featuresData;
