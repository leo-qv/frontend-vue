import { Module } from "vuex";
import { RootState } from "../types";
import { MessageState } from "./types";
import {getters} from '@/store/modules/getters'

const state: MessageState = {
  id: "1",
  content: "This is first message from store",
};

export const message: Module<MessageState, RootState> = {
  state,
  getters,
};


