import { atom } from "recoil";

export const todoAtom=atom({
    key:"todoAtom",
    default:[{title:"hello",description:"world"}]
})
