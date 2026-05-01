import  Sidebar  from "../../Components/Layout/Sidebar";
import  Header  from "../../Components/Layout/Header";

const studentLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
           <div className="flex ">
           <Sidebar />
           <div className="flex-1">
            <Header />
            <main >
                {children}
            </main>
           </div>
           </div>
          
        </div>
    )
}

export default studentLayout;