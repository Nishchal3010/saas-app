"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { subjects } from "@/constants";

const SubjectFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("subject") || "all";

  const [subject, setSubject] = useState(query);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (subject === "all") {
      params.delete("subject");
    } else {
      params.set("subject", subject);
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subject]);

  return (
    <select
      value={subject}
      onChange={(e) => setSubject(e.target.value)}
      className="border border-black rounded-lg px-2 py-1 outline-none capitalize cursor-pointer"
    >
      <option value="all" className="capitalize">
        All subjects
      </option>
      {subjects.map((subjectItem) => (
        <option key={subjectItem} value={subjectItem} className="capitalize">
          {subjectItem}
        </option>
      ))}
    </select>
  );
};

export default SubjectFilter;