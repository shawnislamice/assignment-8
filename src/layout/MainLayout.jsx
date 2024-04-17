import { Outlet } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import NavBar from "../components/NavBar";
import { useNavigation } from "react-router-dom";
import  { Toaster } from "react-hot-toast";

const MainLayout = () => {
   const navigation = useNavigation();
   if (navigation.state == "loading") {
     return <LoadingSpinner></LoadingSpinner>;
   }
    return (
      <div className="container mx-auto max-w-screen-xl p-3 ">
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Toaster></Toaster>
        
      </div>
    );
};

export default MainLayout;