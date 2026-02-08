export interface Project {
  $id: string | undefined;
  name: string;
  github: string;
  image: string;
  details: string;
  deployLink: string;
  techStack: string[];
  type: string;
  domain: string;
  show: boolean;
  role: string;
  header: string;
  platform: string;
  year: number;
}
