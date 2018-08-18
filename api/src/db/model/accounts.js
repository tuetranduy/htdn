import Bookshelf from "../database";

const Accounts = Bookshelf.Model.extend({
    tableName: "accounts"
});

export default Accounts;