import Bookshelf from "../database";

const BookingDetails = Bookshelf.Model.extend({
    tableName: "booking_details"
});

export default BookingDetails;