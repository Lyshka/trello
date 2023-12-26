import { ILayout } from "@/types/layoutTypes";
import { ClerkProvider } from "@clerk/nextjs";

const PlatformLayout = ({ children }: ILayout) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};
export default PlatformLayout;
