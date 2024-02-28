import { LuUserCircle2 } from "react-icons/lu";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";

interface UserDropdownProps {
  userName: string;
  handleLogout: (logged: boolean) => any;
}

const logOutUser = (handleLogout: (logged: boolean) => any) => {
  axios.delete("/api/sign_out").then(() => {
    handleLogout(false);
  });
};

const UserDropdown = ({ userName, handleLogout }: UserDropdownProps) => {
  return (
    <Dropdown>
      <Dropdown.Toggle>
        <LuUserCircle2 size={26} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.ItemText>{userName}</Dropdown.ItemText>
        <Dropdown.Divider />
        <Dropdown.Item
          onClick={() => {
            logOutUser(handleLogout);
          }}
        >
          Log Out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserDropdown;
