import { Module } from 'vuex';
import state from './state';
import mutations from './mutation';
import actions from './action';
import type { IState } from './interface';

const userModule: Module<IState, unknown> = {
  state,
  mutations,
  actions,
};

export default userModule;
