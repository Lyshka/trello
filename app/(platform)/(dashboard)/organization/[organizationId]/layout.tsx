import { ILayout } from "@/types/layoutTypes";
import { OrgControl } from "./_components/org-control";

const OrganizationIdLayout = ({ children }: ILayout) => {
  return <>
  <OrgControl />
  {children}
  </>;
};
export default OrganizationIdLayout;
