const myStorage = window.localStorage;

export const saveItem = (title, data) =>
  myStorage.setItem(title, JSON.stringify(data));

export const getItem = (title) => myStorage.getItem(title);

export const deleteItem = (title) => myStorage.removeItem(title);

export const updateLocalStorageUserData = (data, state) => {
  !state ? deleteItem("userData") : saveItem("userData", data);
  state && saveItem("userData", data);
};
