import { ILayout } from "@/types/layoutTypes";

const ClerkLayout = ({ children }: ILayout) => {
  return (
    <div className="h-full flex items-center justify-center">{children}</div>
  );
};
export default ClerkLayout;
