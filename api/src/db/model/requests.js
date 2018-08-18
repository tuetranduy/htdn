import Bookshelf from "../database";

const RequestDetails = Bookshelf.Model.extend({
    tableName: "requests"
});

export default RequestDetails;