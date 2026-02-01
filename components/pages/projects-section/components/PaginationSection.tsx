import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { useIsMid } from "@/utils/useIsMid";
import type { SetStateAction } from "react";

const PaginationSection = ({
  page,
  setPage,
  projectLength,
}: {
  projectLength: number;
  setPage: React.Dispatch<SetStateAction<number>>;
  page: number;
}) => {
  const isMid = useIsMid();
  const ITEMS_PER_PAGE = isMid ? 6 : 4;
  return (
    <>
      {projectLength > 6 && (
        <Pagination className="mt-10 hidden md:flex">
          <PaginationContent>
            {/* Previous */}
            <PaginationItem
              className={`mr-1 px-2 py-1 rounded-md ${
                page === 1 ? "text-gray-500" : "hover:text-brand-primary"
              }`}
              onClick={() => page > 1 && setPage(page - 1)}
            >
              Previous
            </PaginationItem>

            {/* Page Numbers */}
            {(() => {
              const totalPages = Math.ceil(projectLength / ITEMS_PER_PAGE);
              const pages: (number | "...")[] = [];

              pages.push(1);

              if (page > 3) pages.push("...");

              for (
                let i = Math.max(2, page - 1);
                i <= Math.min(totalPages - 1, page + 1);
                i++
              ) {
                pages.push(i);
              }

              if (page < totalPages - 2) pages.push("...");

              if (totalPages > 1) pages.push(totalPages);

              return pages.map((p, i) =>
                p === "..." ? (
                  <PaginationItem key={i}>
                    <PaginationEllipsis />
                  </PaginationItem>
                ) : (
                  <PaginationItem key={p}>
                    <PaginationLink
                      isActive={page === p}
                      onClick={() => setPage(p)}
                      className={` ${
                        page === p
                          ? "bg-secondary/20 text-secondary"
                          : "hover:bg-secondary/30 hover:text-secondary text-secondary"
                      }`}
                      size={undefined}
                    >
                      {p}
                    </PaginationLink>
                  </PaginationItem>
                ),
              );
            })()}

            {/* Next */}
            <PaginationItem
              className={`ml-2 px-2 py-1 rounded-md ${
                page === Math.ceil(projectLength / ITEMS_PER_PAGE)
                  ? "text-gray-500"
                  : "hover:text-brand-primary"
              }`}
              onClick={() =>
                page < Math.ceil(projectLength / ITEMS_PER_PAGE) &&
                setPage(page + 1)
              }
            >
              Next
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
};

export default PaginationSection;
