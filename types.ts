export interface Tool {
  name: string;
  category: string;
  description: string;
  link: string;
  pricing: string;
  owner: string;
  useCases: string;
}

export interface Prompt {
  title: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
}

export type Category = 
  | 'All Tools'
  | 'Proposal/Strategy'
  | 'Campaign Management'
  | 'Content Writing'
  | 'Image Generation'
  | 'Video'
  | 'Analytics'
  | 'SEO'
  | 'Training';