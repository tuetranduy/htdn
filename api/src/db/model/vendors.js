import Bookshelf from "../database";

const Vendors = Bookshelf.Model.extend({
    tableName: "vendors"
});

export default Vendors;