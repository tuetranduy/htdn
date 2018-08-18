import Bookshelf from "../database";

const Notifications = Bookshelf.Model.extend({
    tableName: "notifications"
});

export default Notifications;