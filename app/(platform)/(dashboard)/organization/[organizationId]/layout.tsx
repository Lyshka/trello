import { startCase } from "lodash";

import { ILayout } from "@/types/layoutTypes";
import { OrgControl } from "./_components/org-control";
import { auth } from "@clerk/nextjs";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { orgSlug } = auth();

  return {
    title: startCase(orgSlug || "organization"),
  };
}

const OrganizationIdLayout = ({ children }: ILayout) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};
export default OrganizationIdLayout;
