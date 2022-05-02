/* eslint-disable max-len */
import { User } from 'firebase/auth';
import {
  auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, updateProfile, signOut,
} from './index';

// Authentication
const login = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);

const register = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);

const logout = () => signOut(auth);

const updateUser = (user: User, displayName?: string, photoURL?: string) => updateProfile(user, { displayName, photoURL });

const verifyUserEmail = (user: User) => sendEmailVerification(user);

// TODO task

const authServices = {
  login,
  register,
  logout,
  updateUser,
  verifyUserEmail,
};

const taskServices = {

};

export { authServices, taskServices };
