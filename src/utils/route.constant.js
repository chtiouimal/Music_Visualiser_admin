import {
  CollectionsPage,
  DashboardPage,
  PreviewPage,
  SettingsPage,
  SingleCollectionPage,
  SongsPage,
} from "../pages";
import {
  PieChartOutlined,
  ApartmentOutlined,
  CustomerServiceOutlined,
  SettingOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export const mainNav = [
  {
    id: 1,
    path: "dashboard",
    element: <DashboardPage />,
    routes: [],
    label: <Link to="dashboard">Dashboard</Link>,
    key: "1",
    icon: <PieChartOutlined />,
  },
  {
    id: 2,
    path: "songs",
    element: <SongsPage />,
    routes: [],
    label: <Link to="songs">Songs</Link>,
    key: "2",
    icon: <CustomerServiceOutlined />,
  },
  {
    id: 3,
    path: "collections",
    element: <CollectionsPage />,
    routes: [":id"],
    label: <Link to="collections">Collections</Link>,
    key: "3",
    icon: <ApartmentOutlined />,
  },
  {
    id: 6,
    path: "preview",
    element: <PreviewPage />,
    routes: [],
    label: <Link to="preview">Preview</Link>,
    key: "4",
    icon: <EyeOutlined />,
  },
  {
    id: 7,
    path: "settings",
    element: <SettingsPage />,
    routes: [],
    label: <Link to="settings">Settings</Link>,
    key: "5",
    icon: <SettingOutlined />,
  },
  {
    id: 8,
    path: "collections/:id",
    element: <SingleCollectionPage />,
    key: "3-1",
  },
];

export const optionNav = [
  {
    id: 1,
    path: null,
    element: null,
    routes: [],
    label: "Menu",
    key: "g1",
    icon: null,
    type: "group",
    children: [
      {
        id: 2,
        path: "dashboard",
        element: <DashboardPage />,
        routes: [],
        label: (
          <Link
            to="dashboard"
            onClick={() => localStorage.setItem("selected-nav", "1")}
          >
            Dashboard
          </Link>
        ),
        key: "1",
        icon: <PieChartOutlined />,
      },
      {
        id: 3,
        path: "songs",
        element: <SongsPage />,
        routes: [],
        label: (
          <Link
            to="songs"
            onClick={() => localStorage.setItem("selected-nav", "2")}
          >
            Songs
          </Link>
        ),
        key: "2",
        icon: <CustomerServiceOutlined />,
      },
      {
        id: 4,
        path: "collections",
        element: <CollectionsPage />,
        routes: [
          {
            id: 8,
            path: ":id",
            element: <SingleCollectionPage />,
            key: "3-1",
          },
        ],
        label: (
          <Link
            to="collections"
            onClick={() => localStorage.setItem("selected-nav", "3")}
          >
            Collections
          </Link>
        ),
        key: "3",
        icon: <ApartmentOutlined />,
      },
    ],
  },
  {
    id: 5,
    path: null,
    element: null,
    routes: [],
    label: "Other",
    key: "g2",
    icon: null,
    type: "group",
    children: [
      {
        id: 6,
        path: "preview",
        element: <PreviewPage />,
        routes: [],
        label: (
          <Link
            to="preview"
            onClick={() => localStorage.setItem("selected-nav", "4")}
          >
            Preview
          </Link>
        ),
        key: "4",
        icon: <EyeOutlined />,
      },
      {
        id: 7,
        path: "settings",
        element: <SettingsPage />,
        routes: [],
        label: (
          <Link
            to="settings"
            onClick={() => localStorage.setItem("selected-nav", "5")}
          >
            Settings
          </Link>
        ),
        key: "5",
        icon: <SettingOutlined />,
      },
    ],
  },
];
