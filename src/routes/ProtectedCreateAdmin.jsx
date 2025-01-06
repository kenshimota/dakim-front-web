import React from "react";

import Signup from "../pages/Signup";
import useHasAdmin from "../hooks/useHasAdmin";

const ProtectedCreateAdmin = ({ children }) => {
  const { hasAdmin, loading, reload } = useHasAdmin();

  return (
    <React.Fragment>
      {loading && "Cargando..."}
      {hasAdmin !== null && hasAdmin === false && <Signup onSave={reload} />}
      {hasAdmin !== null && hasAdmin && children}
    </React.Fragment>
  );
};

export default ProtectedCreateAdmin;
