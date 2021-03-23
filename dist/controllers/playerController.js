"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayersSortedByPoints = exports.getPlayer = exports.getAllPlayers = exports.deletePlayers = exports.deletePlayer = exports.updatePlayer = exports.addPlayer = void 0;
var player_1 = __importDefault(require("./../player"));
var mongoose = require('mongoose');
//Ajouter un joueur
var addPlayer = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, pseudo, nombrePoints, ranking, player, error_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = (_a = req.body, _a.id), pseudo = _a.pseudo, nombrePoints = _a.nombrePoints, ranking = _a.ranking;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, player_1.default.create({
                        _id: id,
                        pseudo: pseudo,
                        nombrePoints: nombrePoints,
                        ranking: ranking
                    })];
            case 2:
                player = _b.sent();
                if (!id || !pseudo || !nombrePoints || !ranking) {
                    res.sendStatus(400);
                }
                res.send({ status: 'OK', message: "Le joueur " + pseudo + " a \u00E9t\u00E9 cr\u00E9\u00E9 avec succ\u00E8s" });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                res.status(500).send({ message: error_1.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.addPlayer = addPlayer;
//Modifier les données d'un joueur
var updatePlayer = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var playerId, _a, id, pseudo, nombrePoints, ranking, player, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                playerId = req.params.id;
                _a = req.body, id = _a.id, pseudo = _a.pseudo, nombrePoints = _a.nombrePoints, ranking = _a.ranking;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, player_1.default.findByIdAndUpdate(playerId, { id: id, pseudo: pseudo, nombrePoints: nombrePoints, ranking: ranking })];
            case 2:
                player = _b.sent();
                if (!id || !pseudo || !nombrePoints || !ranking) {
                    res.sendStatus(404);
                }
                res.status(200).send(player);
                return [3 /*break*/, 4];
            case 3:
                error_2 = _b.sent();
                res.status(500).send({ message: error_2.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updatePlayer = updatePlayer;
//Supprimer un joueur
var deletePlayer = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var playerId, player, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                playerId = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, player_1.default.findByIdAndDelete(playerId)];
            case 2:
                player = _a.sent();
                if (!player) {
                    res.sendStatus(404);
                }
                res.send({ status: 'OK', message: "Le joueur a \u00E9t\u00E9 supprim\u00E9 avec succ\u00E8s" });
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                res.status(500).send({ message: error_3.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deletePlayer = deletePlayer;
//Supprimer tout les joueurs
var deletePlayers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var playerId, player, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                playerId = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, player_1.default.deleteMany({ playerId: playerId })];
            case 2:
                player = _a.sent();
                if (!player) {
                    res.sendStatus(404);
                }
                res.send({ status: 'OK', message: "Tout les joueurs ont \u00E9t\u00E9 supprim\u00E9s avec succ\u00E8s" });
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                res.status(500).send({ message: error_4.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deletePlayers = deletePlayers;
//Retourner tout les joueurs du tournoi
var getAllPlayers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, player_1.default.find(function (err, players) {
                    if (err) {
                        res.send("Error!");
                    }
                    else {
                        res.send({ status: 'Liste de joueurs', players: players });
                    }
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.getAllPlayers = getAllPlayers;
//Retourner un seul joueur
var getPlayer = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var playerId, player, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                playerId = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, player_1.default.findById(playerId)];
            case 2:
                player = _a.sent();
                if (!player) {
                    res.sendStatus(404);
                }
                res.status(200).send(player);
                return [3 /*break*/, 4];
            case 3:
                error_5 = _a.sent();
                res.status(500).send({ message: error_5.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getPlayer = getPlayer;
//Retourner les jouerus triés en nombre de points
var getPlayersSortedByPoints = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var points;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                points = { nombrePoints: -1 };
                return [4 /*yield*/, player_1.default.find(function (err, players) {
                        if (err) {
                            res.send("Error!");
                        }
                        else {
                            res.send({ status: 'Joueurs ordonnés par nombre de points', players: players });
                        }
                    }).sort(points)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.getPlayersSortedByPoints = getPlayersSortedByPoints;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3BsYXllckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsdURBQWlDO0FBQ2pDLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUVuQyxtQkFBbUI7QUFDWixJQUFJLFNBQVMsR0FBRyxVQUFPLEdBQVksRUFBRSxHQUFhOzs7Ozs7Z0JBQy9DLEVBQUUsSUFBSixLQUF3QyxHQUFHLENBQUMsSUFBSSxRQUE1QyxFQUFFLE1BQU0sWUFBQSxFQUFFLFlBQVksa0JBQUEsRUFBRSxPQUFPLGFBQUEsQ0FBYzs7OztnQkFFNUIscUJBQU0sZ0JBQU0sQ0FBQyxNQUFNLENBQUM7d0JBQzNDLEdBQUcsRUFBRSxFQUFFO3dCQUNQLE1BQU0sRUFBRSxNQUFNO3dCQUNkLFlBQVksRUFBRSxZQUFZO3dCQUMxQixPQUFPLEVBQUUsT0FBTztxQkFDakIsQ0FBQyxFQUFBOztnQkFMSSxNQUFNLEdBQWEsU0FLdkI7Z0JBQ0YsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDL0MsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDdkI7Z0JBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLGVBQWEsTUFBTSxxREFBeUIsRUFBRSxDQUFDLENBQUM7Ozs7Z0JBRWxGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDOzs7OztLQUVsRCxDQUFDO0FBakJTLFFBQUEsU0FBUyxhQWlCbEI7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