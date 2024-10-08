import { User } from "@/payload-types";
import { checkUserRoles } from "./checkUserRoles";

export const isSuperAdmin = (user: User | null): boolean =>
  checkUserRoles(["super-admin"], user);
