export interface AppContextType {
  sideMenuOpen?: boolean;
  loginUser:any;
  toggleSideMenu?: () => void;
  loginUserStorage:(value: boolean) => any;
  userEmailStorage: (value: any) => any;
  updateWebsiteinfo: (value: any) => any;
  updateUserinfo:(value: any) => any;
  updateTabName: (value: any) => any;
  updatePageName: (value: any) => any;
  updateOverviewPageInfo: (value: any) => any;
  scrollDirection?: string;
  setScrollDirection?: React.Dispatch<React.SetStateAction<string>> | undefined;
  roomId?: number;
  setRoomId?: React.Dispatch<React.SetStateAction<number>>;
  UserEmail?:any;
  websiteInfo?: any;
  userInfo?: any;
  overviewPageInfo: any;
  setWebsiteInfo?: React.Dispatch<React.SetStateAction<any>>;
  setTabName?: React.Dispatch<React.SetStateAction<any>>;
  tabName?: string;
  setPageName?:React.Dispatch<React.SetStateAction<any>>;
  pageName?: string;
  websiteName?: any;
}
export interface idType {
  id?: number;
}
export interface OfferType {
  id?: number;
  img?: any;
  offer?: string;
  tags?: string;
  title?: string;
}
export interface RoomType {
  id?: number;
  title?: string;
  price?: number;
  time?: string;
  img?: any;
  details?: string;
  list1?: string;
  list2?: string;
  list3?: string;
  list4?: string;
}
export interface EventType {
  id?: number;
  img?: any;
  date?: string;
  title?: string;
  details?: string;
  description?: string;
  descriptionTwo?: string;
}
export interface EventFlowType {
  id?: number;
  title?: string;
}
export interface FeaturesType {
  id?: number;
  img?: any;
  title?: string;
  price?: number;
  oldPrice?: number;
}
export interface BlogsType {
  id?: number;
  img?: any;
  tag?: string;
  date?: string;
  month?: string;
  title?: string | undefined;
}
export interface faqInterFace {
  id: number;
  title: string;
  details: string;
}

// interFace.ts
export interface analystInterface {
  id: number;
  name: string;
  position: string;
  experience: string;
  sectorsCovered: string[];
  education: string;
  certifications: string[];
  details: string[]; // Adjust this to be an array of strings
  socialMedia: string;
}
