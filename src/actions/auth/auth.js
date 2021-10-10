import { firebase, googleAuth } from "../../firebase/firebase-config";
import { types } from "../../types/types"
import { load, unload } from "../loading";

export const startLoginEmailPass = (email, password) => {
  return (dispatch) => {
    dispatch(load());

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({user}) =>{
        dispatch(login(user.uid, user.displayName));
        dispatch(unload());
      });
  }
};

export const startRegisterWithPassAndEmail = (email, password, name) => {
  return (dispatch) => {
    dispatch(load());
    firebase.auth().createUserWithEmailAndPassword(email, password )
      .then(({user}) => {
        return user.updateProfile({
          displayName: name
        }).then(()=> {
          dispatch(login(user.uid, user.displayName));
          dispatch(unload());
        });
      })
      .catch((err) => {
        console.log(err)
        dispatch(unload());
      })
  }
}

export const startGoogleLogin = () => {
  return (dispatch) => {
    dispatch(load());
    firebase.auth().signInWithPopup(googleAuth)
    .then(({user}) =>{
      dispatch(login(user.uid, user.displayName));
      dispatch(unload());
    })
  }
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  }
});

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
  }
}

export const logout = () => ({
  type: types.logout
});
