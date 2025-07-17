import { Pagination, PaginationItem } from "@heroui/react";

interface ActivityPaginationProps {}

const ActivityPagination: React.FC<ActivityPaginationProps> = ({ }) => {

    return (
        <Pagination total={12}>
            <PaginationItem>
                
            </PaginationItem>
        </Pagination>
    );
}

export default ActivityPagination;