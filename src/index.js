import './styles.css'
import game from './game'
import UI from './UI'
import Player from './factory/player';

const p1 = new Player();
const p2 = game.initPlayer(true);
UI.load(p1, p2);