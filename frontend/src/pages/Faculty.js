import React, { useState } from "react";
import FacultyCard from "../components/faculty/FacultyCard";
import Title from "../components/Title";

const Faculty = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full overflow-auto h-screen ">
      <Title title={"أعضاء هيئة التدريس"} withSearch={true} search={search} setSearch={setSearch} />
      <FacultyCard search={search} />
    </div>
  );
};

export default Faculty;
