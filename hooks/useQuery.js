import { useState } from "react";

const useQuery = () => {
  const [query, setQuery] = useState("");

  const handleQuery = (event) => {
    const { value } = event.target;
    setQuery(value);
  };

  return {
    query,
    handleQuery,
  };
};

export default useQuery;
