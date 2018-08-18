import Bookshelf from "../database";

const Clients = Bookshelf.Model.extend({
    tableName: "clients"
});

export default Clients;