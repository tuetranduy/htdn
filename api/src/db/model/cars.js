import Bookshelf from "../database";

const Cars = Bookshelf.Model.extend({
    tableName: "cars"
});

export default Cars;