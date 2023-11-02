```
type Role = {
  name: string;
  status: number;
  id: number;
};
type Staff = {
  name: string;
  status: number;
  roleId: number;
  id: number;
};
const roles: Role[] = [
  {
    id: 1,
    name: "Admin",
    status: 1,
  },
  {
    id: 2,
    name: "User",
    status: 1,
  },
  {
    id: 3,
    name: "Second User",
    status: 0,
  },
];

const staffs: Staff[] = [
  {
    id: 1,
    name: "Hoan",
    roleId: 1,
    status: 1,
  },
  {
    id: 2,
    name: "Thanh",
    roleId: 2,
    status: 1,
  },
  {
    id: 3,
    name: "Dan",
    roleId: 3,
    status: 0,
  },
];
const roles_map: Record<string, Role> = roles.reduce(
  (acc, cur) => ({ ...acc, [cur.name]: cur }),
  {}
);

const filledData = staffs.filter(({ status, roleId }) => {
  // Check staff status
  if (!status) return false;
  // Check role status
  const role = roles_map[roleId];
  if (role?.status) {
    return true;
  } else {
    return false;
  }
});

```