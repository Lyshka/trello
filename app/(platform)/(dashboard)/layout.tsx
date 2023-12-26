import { ILayout } from "@/types/layoutTypes";
import { Navbar } from "./_components/Navbar";

const DashboardLayout = ({ children }: ILayout) => {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
};
export default DashboardLayout;
