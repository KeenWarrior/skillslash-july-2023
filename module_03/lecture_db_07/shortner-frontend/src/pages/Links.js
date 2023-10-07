import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import mockAxios from "../utils/mocksAxios";
import LinksTable from "../componenets/LinksTable";

export default function Links() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    mockAxios.get("/api/links").then((response) => {
      console.log(response.data);
      setLinks(response.data);
    });
  }, []);
  if (links.length === 0) {
    return <div>No links available yet</div>;
  } else {
    return (
      <div>
        <LinksTable links={links} />
      </div>
    );
  }
}
