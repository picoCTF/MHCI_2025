import { Pagination, PaginationItem, Table } from "@heroui/react";

interface ActivityAmountDivProps {
    type: "week" | "month" | "lifetime";

    highestRecordedDailyActivity?: number;
}

// FIX_ME - Use the Heatmap component instead and delete this one
const ActivityTable: React.FC<ActivityAmountDivProps> = ({ type/*, highestRecordedDailyActivity*/ }) => {

    switch (type) {
        case "month": {
            return (
                <Pagination total={12}>
                    <PaginationItem>
                        <Table>

                        </Table>
                    </PaginationItem>
                </Pagination>
            );
        }
        case "lifetime": {
            return (
                <Table>

                </Table>
            );
        }
        default: {
            return (
                <Table>

                </Table>
            );
        }
    }
}

export default ActivityTable;