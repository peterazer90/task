const dateFilter = (data, fromDate) => data.filter((item) => new Date(item.created_at) >= fromDate);
export default dateFilter;
