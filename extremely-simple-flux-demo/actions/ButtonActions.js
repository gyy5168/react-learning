var AppDispatcher = require('../dispatcher/AppDispatcher');

var ButtonActions = {

  addNewItem: function (text) {
    AppDispatcher.dispatch({
      actionType: 'ADD_NEW_ITEM',
      text: text
    });
  },
  removeItem: function (text) {
    AppDispatcher.dispatch({
      actionType: 'REMOVE_ITEM',
      text: text
    });
  },

};

module.exports = ButtonActions;
