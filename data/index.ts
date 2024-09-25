import { LinkDetailsProps } from "@/types/";
import { DesktopHistoryTableColumn } from "@/types/index";

export const linkDetails: LinkDetailsProps[] = [
  {
    shortLink: "https://short.link/abc123",
    originalLink: "https://www.example.com/page1",
    qrCode: "QR_CODE_DATA_1",
    clicks: 1500,
    status: "active",
    date: new Date("2023-09-15T10:30:00Z"),
  },
  {
    shortLink: "https://short.link/def456",
    originalLink: "https://www.example.com/products/item42",
    qrCode: "QR_CODE_DATA_2",
    clicks: 750,
    status: "active",
    date: new Date("2023-08-22T14:45:00Z"),
  },
  {
    shortLink: "https://short.link/ghi789",
    originalLink: "https://www.example.com/blog/article7",
    qrCode: "QR_CODE_DATA_3",
    clicks: 2200,
    status: "inactive",
    date: new Date("2023-07-03T09:15:00Z"),
  },
  {
    shortLink: "https://short.link/jkl012",
    originalLink: "https://www.example.com/contact",
    qrCode: "QR_CODE_DATA_4",
    clicks: 300,
    status: "active",
    date: new Date("2023-09-01T16:20:00Z"),
  },
  {
    shortLink: "https://short.link/mno345",
    originalLink: "https://www.example.com/events/annual-conference",
    qrCode: "QR_CODE_DATA_5",
    clicks: 980,
    status: "expired",
    date: new Date("2023-06-10T11:00:00Z"),
  },
];
