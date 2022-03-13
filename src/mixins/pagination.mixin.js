export default {
    data() {
        return {
            page:                     1,
            pageSize:                 3,
            pageCount:                0,
            paginatedAllItems:        [],
            paginatedDisplayingItems: [],
        };
    },
    methods: {
        setupPagination(paginatedAllItems) {
            this.paginatedAllItems        = [];
            this.paginatedDisplayingItems = [];
            this.pageCount                = paginatedAllItems.length;

            if (paginatedAllItems.length > 0 && paginatedAllItems.length <= this.pageSize) {
                this.paginatedAllItems = paginatedAllItems;
                this.paginatedDisplayingItems.push(paginatedAllItems);
                return;
            }

            while (paginatedAllItems.length > this.pageSize) {
                this.paginatedDisplayingItems.push(paginatedAllItems.splice(0, this.pageSize));
            }
            if (paginatedAllItems.length > 0)
                this.paginatedDisplayingItems.push(paginatedAllItems);
        },
        pageChangeHandler(page) {
            this.page = page;
        },
    },
};