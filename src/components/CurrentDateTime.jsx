import React, { useEffect, useState } from "react";

const CurrentDateTime = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "pm" : "am";
      const formattedHour = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

      const day = now.getDate();
      const month = now.toLocaleString("default", { month: "short" }); // e.g., Jan
      const year = now.getFullYear();

      const formattedDateTime = `${formattedHour}:${formattedMinutes} ${ampm} | ${day} ${month} ${year}`;
      setDateTime(formattedDateTime);
    };

    updateDateTime(); // set on mount
    const interval = setInterval(updateDateTime, 60000); // update every minute

    return () => clearInterval(interval); // cleanup
  }, []);

  return <p className="text-sm text-gray-500">{dateTime}</p>;
};

export default CurrentDateTime;
