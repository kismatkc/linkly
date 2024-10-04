export interface LinkDetailsProps {
  shortLink: string;
  originalLink: string;
  qrCode: string; // Placeholder for actual QR code library type
  clicks: number;
  status: string;
  date: Date;
}

export type DesktopHistoryTableColumn = {
  shortLink: string;
  originalLink: string;
  qrCode: string;

  status: string;
  date: Date;
};

export type SignUpForm = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  consent: boolean;
};
export type SignInForm = {
  email: string;
  password: string;
};
