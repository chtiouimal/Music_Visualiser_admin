import { CollectionsPage, DashboardPage, SongsPage } from "../pages";
import {
  PieChartOutlined,
  ApartmentOutlined,
  CustomerServiceOutlined,
  SettingOutlined,
  EyeOutlined,
} from "@ant-design/icons";

export const mainNav = [
  {
    id: 1,
    path: "dashboard",
    element: <DashboardPage />,
    routes: [],
    label: "Dashboard",
    key: "1",
    icon: <PieChartOutlined />,
  },
  {
    id: 2,
    path: "songs",
    element: <SongsPage />,
    routes: [],
    label: "Songs",
    key: "2",
    icon: <CustomerServiceOutlined />,
  },
  {
    id: 3,
    path: "collections",
    element: <CollectionsPage />,
    routes: [":id"],
    label: "Collections",
    key: "3",
    icon: <ApartmentOutlined />,
  },
];

export const optionNav = [
  {
    id: 4,
    path: "dashboard",
    element: <DashboardPage />,
    routes: [],
    label: "Preview",
    key: "4",
    icon: <EyeOutlined />,
  },
  {
    id: 5,
    path: "songs",
    element: <SongsPage />,
    routes: [],
    label: "Settings",
    key: "5",
    icon: <SettingOutlined />,
  },
];
