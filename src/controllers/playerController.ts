import { Request, Response } from "express";
import { IPlayer } from "./../player";
import Player from "./../player";
var mongoose = require('mongoose');

//Ajouter un joueur
export let addPlayer = async (req: Request, res: Response) => {
  const { id, pseudo, nombrePoints, ranking } = req.body;
  try {
    const player : IPlayer = await Player.create({
      _id: id,
      pseudo: pseudo,
      nombrePoints: nombrePoints,
      ranking: ranking
    });
    if (!id || !pseudo || !nombrePoints || !ranking) {
      res.sendStatus(400);
  }

  res.send({ status: 'OK', message: `Le joueur ${pseudo} a été créé avec succès` });
} catch (error) {
  res.status(500).send({ message: error.message });
}
};

//Modifier les données d'un joueur
export const updatePlayer = async (req: Request, res: Response) => {
const playerId = req.params.id;
const { id, pseudo, nombrePoints, ranking } = req.body;
try {
  const player = await Player.findByIdAndUpdate(playerId, { id, pseudo, nombrePoints, ranking });
  
  if(!id || !pseudo || !nombrePoints || !ranking) {
    res.sendStatus(404);      
  }
  res.status(200).send(player);
} catch (error) {
  res.status(500).send({ message: error.message });
}
};

//Supprimer un joueur
export const deletePlayer = async (req: Request, res: Response) => {
  const playerId = req.params.id;
  try {
    let player = await Player.findByIdAndDelete(playerId);
    
    if(!player) {
      res.sendStatus(404);      
    }
    res.send({ status: 'OK', message: `Le joueur a été supprimé avec succès` });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//Supprimer tout les joueurs
export const deletePlayers = async (req: Request, res: Response) => {
  const playerId = req.params.id;
  try {
    let player = await Player.deleteMany({ playerId });
    
    if(!player) {
      res.sendStatus(404);      
    }
    res.send({ status: 'OK', message: `Tout les joueurs ont été supprimés avec succès` });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//Retourner tout les joueurs du tournoi
export let getAllPlayers = async (req: Request, res: Response) => {
    await Player.find((err: any, players: any) => {
        if (err) {
          res.send("Error!");
        } else {
          res.send({ status: 'Liste de joueurs', players });
        }
      });
};

//Retourner un seul joueur
export const getPlayer = async (req: Request, res: Response) => {
    const playerId = req.params.id;
    try {
      const player  = await Player.findById(playerId);
      
      if(!player) {
        res.sendStatus(404);      
      }

      res.status(200).send(player);
    } catch (error) {
      res.status(500).send({ message: error.message });
  }
};

//Retourner les jouerus triés en nombre de points
export let getPlayersSortedByPoints = async (req: Request, res: Response) => {
  let points = { nombrePoints: -1 };
  await Player.find((err: any, players: any) => {
    if (err) {
      res.send("Error!");
    } else {
      res.send({ status: 'Joueurs ordonnés par nombre de points', players });
    }
  }).sort(points);
};




