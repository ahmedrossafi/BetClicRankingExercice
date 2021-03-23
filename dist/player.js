"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerSchema = void 0;
var mongoose = require("mongoose");
var uri = "mongodb://localhost:27017/tournament";
mongoose.connect(uri, function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Connecté Avec Succès!");
    }
});
exports.PlayerSchema = new mongoose.Schema({
    _id: String,
    pseudo: String,
    nombrePoints: Number,
    ranking: Number
});
var Player = mongoose.model("Player", exports.PlayerSchema);
exports.default = Player;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsicGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFzQztBQUV0QyxJQUFNLEdBQUcsR0FBVyxzQ0FBc0MsQ0FBQztBQUUzRCxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQVE7SUFDN0IsSUFBSSxHQUFHLEVBQUU7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMxQjtTQUFNO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0tBQ3RDO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFTVSxRQUFBLFlBQVksR0FBRyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDOUMsR0FBRyxFQUFFLE1BQU07SUFDWCxNQUFNLEVBQUUsTUFBTTtJQUNkLFlBQVksRUFBRSxNQUFNO0lBQ3BCLE9BQU8sRUFBRSxNQUFNO0NBQ2hCLENBQUMsQ0FBQztBQUVILElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQVUsUUFBUSxFQUFFLG9CQUFZLENBQUMsQ0FBQztBQUMvRCxrQkFBZSxNQUFNLENBQUMifQ==