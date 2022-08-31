// Fake DB Server
import PermissionType from "./PermissionType";

interface DataBaseItem {
  email: string;
  password: string;
  permission: PermissionType;
}

const DataBase: DataBaseItem[] = [
  {
    email: "master@lucacode.com.br",
    password: "123456",
    permission: PermissionType.ADMIN
  },
  {
    email: "user@lucacode.com.br",
    password: "654321",
    permission: PermissionType.USER
  },
]

export default DataBase;