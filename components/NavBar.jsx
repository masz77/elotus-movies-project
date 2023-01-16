import { Layout, Menu } from "antd";
import { useRouter } from "next/router";

const { Header } = Layout;

export default function NavBar() {
  const router = useRouter();
  function onNavBarClick({ key }) {
    key == "now-playing" && router.push("/");
    key == "top-rated" && router.push("/top-rated");
  }

  const menuItems = [
    {
      key: `now-playing`,
      label: `Now Playing`,
    },
    {
      key: "top-rated",
      label: "Top Rated",
    },
  ];
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["now-playing"]}
      onClick={onNavBarClick}
      items={menuItems}
    />
  );
}
