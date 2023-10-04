type SocialMedia = "INSTA" | "FACEBOOK" | "TWITTER" | "OTHER"; 

type Interests = "soccer" | "basketball" | "music" | "gaming" | "other"; 

export type User = {
  email: string;
  login: string;
  name: string;
  surName: string;
  city: string;
  age: number;
  bio: string;
  socialMedia: SocialMedia[];
  interess: Interests[];
  likes: number;
  avatarURL: string;
  _id: string;
};