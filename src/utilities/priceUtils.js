export const calculateTotalPrice = (cellData) => {
    if (cellData) {
        return cellData.reduce(
            (total, item) => Number(total) + Number(item.price),
            0
        );
    }
    return 0;
};
