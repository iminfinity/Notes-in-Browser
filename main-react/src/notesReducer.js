// utility function
export const getNotes = () => {
  if (localStorage.getItem("notes")) {
    const localNotes = JSON.parse(localStorage.getItem("notes"));
    return localNotes;
  }
  return [];
};

// action types
export const ACTIONS = {
  ADD_NEW_NOTE: "add",
  DELETE_NOTE: "delete",
};

//reducer
export const notesReducer = (notes, action) => {
  switch (action.type) {
    case ACTIONS.ADD_NEW_NOTE:
      return [...notes, action.payload];
    case ACTIONS.DELETE_NOTE:
      return notes.filter((note) => notes.indexOf(note) !== action.payload);

    default:
      return notes;
  }
};
