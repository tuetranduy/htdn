import Bookshelf from "../database";

const ParkingLotDetails = Bookshelf.Model.extend({
    tableName: "parkinglot_details"
});

export default ParkingLotDetails;