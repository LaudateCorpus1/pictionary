// == Reducer actions ==

// settings:
export const TOGGLE_SOUND = 'TOGGLE_SOUND';
export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';
export const ADD_ALERT = 'ADD_ALERT';
export const CLEAR_ALERT = 'CLEAR_ALERT';
export const SET_LOADING = 'SET_LOADING';
export const CLEAR_LOADING = 'CLEAR_LOADING';
export const SAVE_SOCKET_OBJECT = 'SAVE_SOCKET_OBJECT';
export const SAVE_GAME_CHANNEL = 'SAVE_GAME_CHANNEL';
export const SAVE_GAME_TO_JOIN_ID = 'SAVE_GAME_TO_JOIN_ID';
export const CLEAR_SOCKET = 'CLEAR_SOCKET';

// userinfo:
export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_AVATAR = 'CHANGE_AVATAR';
export const SAVE_TOKEN = 'SAVE_TOKEN';
export const LOAD_SESSION = 'LOAD_SESSION';

// game:
export const SAVE_GAME = 'SAVE_GAME';
export const FAILED_SAVE_GAME = 'FAILED_SAVE_GAME';
export const UPDATE_GAME_STATE = 'UPDATE_GAME_STATE';
export const UPDATE_GAME_PLAYERS = 'UPDATE_GAME_PLAYERS';
export const ADMIN_UPDATED = 'ADMIN_UPDATED';
export const REMOVE_PLAYER = 'REMOVE_PLAYER';
export const UPDATE_CANVAS = 'UPDATE_CANVAS';
export const SET_ERASER = 'SET_ERASER';
export const SET_PEN = 'SET_PEN';
export const SET_FILL = 'SET_FILL';

// gameplay:
export const CHANGE_BRUSH_COLOR = 'CHANGE_BRUSH_COLOR';
export const CHANGE_BRUSH_RADIUS = 'CHANGE_BRUSH_RADIUS';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const UPDATE_DRAWER = 'UPDATE_DRAWER';
export const UPDATE_ROUND = 'UPDATE_ROUND';
export const UPDATE_SELECTED_WORD = 'UPDATE_SELECTED_WORD';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const SET_GAME_OVER = 'SET_GAME_OVER';
export const RESET_GAME_STATE = 'RESET_GAME_STATE';
export const HANDLE_UPDATE_SELECTED_WORD = 'HANDLE_UPDATE_SELECTED_WORD';
export const HIDE_ROUND_CHANGE_DIALOG = 'HIDE_ROUND_CHANGE_DIALOG';
export const REVEAL_MORE_CURRENT_WORD = 'REVEAL_MORE_CURRENT_WORD';
export const SET_GAMEPLAY_STATE = 'SET_GAMEPLAY_STATE';
export const RESET_ELAPSED_TIME = 'RESET_ELAPSED_TIME';
export const RESET_DRAWER = 'RESET_DRAWER';

// == Saga Actions ==
export const HANDLE_CREATE_USER_SESSION = 'HANDLE_CREATE_USER_SESSION';
export const HANDLE_RESTORE_SESSION = 'HANDLE_RESTORE_SESSION';
export const HANDLE_CREATE_GAME_SESSION = 'HANDLE_CREATE_GAME_SESSION';
export const HANDLE_SAVE_GAME = 'HANDLE_SAVE_GAME';
export const HANDLE_UPDATE_GAME = 'HANDLE_UPDATE_GAME';
export const HANDLE_INIT_SOCKET = 'HANDLE_INIT_SOCKET';
export const HANDLE_INIT_GAME_CHANNEL = 'HANDLE_INIT_GAME_CHANNEL';
export const HANDLE_CREATE_AND_ENTER_GAME_SESSION = 'HANDLE_CREATE_AND_ENTER_GAME_SESSION';
export const HANDLE_JOIN_EXISTING_GAME_SESSION = 'HANDLE_JOIN_EXISTING_GAME_SESSION';
export const HANDLE_CREATE_GAME_FLOW = 'HANDLE_CREATE_GAME_FLOW';
export const HANDLE_JOIN_GAME_FLOW = 'HANDLE_JOIN_GAME_FLOW';
export const HANDLE_FIND_GAME_FLOW = 'HANDLE_FIND_GAME_FLOW';
export const HANDLE_JOIN_GAME_FROM_GAMES_LIST_FLOW = 'HANDLE_JOIN_GAME_FROM_GAMES_LIST_FLOW';
export const HANDLE_GET_GAME_DATA = 'HANDLE_GET_GAME_DATA';
export const HANDLE_GAME_JOIN_SUCCESS = 'HANDLE_GAME_JOIN_SUCCESS';
export const HANDLE_GAME_JOIN_FAIL = 'HANDLE_GAME_JOIN_FAIL';
export const HANDLE_UPDATE_ADMIN = 'HANDLE_UPDATE_ADMIN';
export const HANDLE_KICK_PLAYER = 'HANDLE_KICK_PLAYER';
export const HANDLE_PLAYER_KICKED = 'HANDLE_PLAYER_KICKED';
export const HANDLE_ADMIN_UPDATED = 'HANDLE_ADMIN_UPDATED';
export const HANDLE_START_GAME = 'HANDLE_START_GAME';
export const HANDLE_GAME_STARTED = 'HANDLE_GAME_STARTED';
export const HANDLE_CANVAS_UPDATE = 'HANDLE_CANVAS_UPDATE';
export const HANDLE_CANVAS_UPDATED = 'HANDLE_CANVAS_UPDATED';
export const HANDLE_SEND_MESSAGE = 'HANDLE_SEND_MESSAGE';
export const HANDLE_NEW_MESSAGE = 'HANDLE_NEW_MESSAGE';
