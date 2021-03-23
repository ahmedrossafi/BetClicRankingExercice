import mongoose = require("mongoose");

const uri: string = "mongodb://localhost:27017/tournament";

mongoose.connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Connecté Avec Succès!");
  }
});

export interface IPlayer extends mongoose.Document {
    _id: string;
    pseudo: string;
    nombrePoints: number;
    ranking: number;
}

export const PlayerSchema = new mongoose.Schema({
  _id: String,
  pseudo: String,
  nombrePoints: Number,
  ranking: Number
});

const Player = mongoose.model<IPlayer>("Player", PlayerSchema);
export default Player;