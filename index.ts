const roles = [
  {
    id: 1,
    title: "Admin",
    status: 1,
  },
  {
    id: 2,
    title: "User",
    status: 1,
  },
  {
    id: 3,
    title: "Second User",
    status: 0,
  },
];

const staffs = [
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

/**
 * Print all active staffs
 * - Staff status is 1
 * - Role status is 1
 */
