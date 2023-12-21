import { Space, Input, Avatar, Dropdown } from "antd";
import {
  SearchOutlined,
  InstagramFilled,
  TwitterOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const items = [
    { label: "Настройки", key: "settings" },
    { label: "Выйти", key: "logout" },
  ];

  return (
    <div className={styles.header}>
      <div className="text-4xl font-bold">Blog</div>

      <Space size="large">
        <Input
          className="w-60"
          addonAfter={<SearchOutlined />}
          placeholder="Поиск"
        />

        <Space size="middle">
          <InstagramFilled />
          <TwitterOutlined />
          <YoutubeFilled />
        </Space>

        <Dropdown trigger={["click"]} menu={{ items }}>
          <Avatar
            className="cursor-pointer"
            src="https://cdn.hero.page/pfp/239c875a-a29e-4884-b1a5-acc8bbaa9277-desolated-anime-girl-pfp-depressed-anime-girl-pfp-avatar-3.png"
            size="large"
          />
        </Dropdown>
      </Space>
    </div>
  );
};

export default Header;
