import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

// const DataContextProvider = ({ clidren }) => {
//   const [handle, setHandle] = useState("");
//   const [handleFound, setHandleFound] = useState(false);

//   return (
//     <DataContext.Provider
//       value={{ handle, handleFound, setHandle, setHandleFound }}
//     >
//       {clidren}
//     </DataContext.Provider>
//   );
// };

// export default DataContextProvider;

export const useDataContext = () => useContext(DataContext);
