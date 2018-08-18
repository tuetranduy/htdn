import Bookshelf from "../database";

const ParkingLots = Bookshelf.Model.extend({
    tableName: "parking_lots"
});

export default ParkingLots;