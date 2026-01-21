import { Pagination, PaginationItem } from "@heroui/react";

interface ActivityPaginationProps {}

// FIX_ME - Use this to swap between a period of time (weeks or years)
const ActivityPagination: React.FC<ActivityPaginationProps> = ({ }) => {

    return (
        <Pagination total={12}>
            <PaginationItem>
                
            </PaginationItem>
        </Pagination>
    );
}

export default ActivityPagination;