import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

const getSubjectColor = (subject: string) => {
  const colors: { [key: string]: string } = {
    math:      "#E6F1FB",
    maths:     "#E6F1FB",
    science:   "#E1F5EE",
    english:   "#FAEEDA",
    language:  "#FAEEDA",
    history:   "#EEEDFE",
    coding:    "#FCE8E8",
    economics: "#F0F0EE",
  };
  return colors[subject?.toLowerCase()] || "#F0F0EE";
};

interface CompanionsListProps {
  title: string;
  companions?: Companion[];
  classNames?: string;
}

const CompanionsList = ({
  title,
  companions,
  classNames,
}: CompanionsListProps) => {
  return (
    <article className={cn("companion-list", classNames)}>
      <h2 className="font-bold text-3xl">{title}</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg w-2/3">Lessons</TableHead>
            <TableHead className="text-lg">Subject</TableHead>
            <TableHead className="text-lg text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions?.map((companion) => (
            <TableRow key={companion.id}>
              <TableCell>
                <Link href={`/companions/${companion.id}`}>
                  <span className="flex items-center gap-2">
                    <span
                      className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden"
                      style={{ backgroundColor: getSubjectColor(companion.subject) }}
                    >
                      <Image
                        src={`/icons/${companion.subject}.svg`}
                        alt={companion.subject}
                        width={35}
                        height={35} 
                      />
                    </span>
                    <span className="flex flex-col gap-2">
                      <p className="font-bold text-2xl">{companion.name}</p>
                      <p className="text-lg">{companion.topic}</p>
                    </span>
                  </span>
                </Link>
              </TableCell>
              <TableCell>
                <span className="subject-badge w-fit max-md:hidden">
                  {companion.subject}
                </span>

								<span className="flex items-center justify-center rounded-lg w-fit p-2md:hidden" style={{ backgroundColor: getSubjectColor(companion.subject) }}>

					
								</span>
              </TableCell>
              <TableCell >
                 <div className="flex items-center gap-2 w-full justify-end">
									 
									 <p className="text-2xl">
										{companion.duration} {' '}
										<span className="max-md:hidden">mins</span>
									 </p>
									 <Image src="/icons/clock.svg" alt="minutes" width={14} height={14} className="max-md:hidden" />

								 </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </article>
  );
};

export default CompanionsList; 
