import Bookshelf from "../database";

const Payments = Bookshelf.Model.extend({
    tableName: "payment"
});

export default Payments;