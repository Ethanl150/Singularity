import axios from "axios";

export default {
  // login/logout
  userLogin: login => {
    return axios.post("/api/login",login)
  },
  userLogout: () => {
    return axios.get("/api/logout")
  },
  
  // Cards
  getCards: () => {
    return axios.get("/api/gameCards/");
  },

  //User
  getUsers: () => {
    return axios.get("/api/users");
  },

  getOneUser: id => {
    return axios.get("/api/users/" + id)
  },

  addUser: user => {
    return axios.post("/api/users", user);
  },

  findUserDecks: () => {
    return axios.get("/api/userDecks")
  },

  // Deck
  getDeck: () => {
    return axios.get("/api/decks")
  },
  getOneDeck: id => {
    return axios.get("/api/decks/" + id)
  },
  buildDeck: data => {
    return axios.post("/api/decks", data)
  }
};
