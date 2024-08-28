import { idlFactory } from "../../../declarations/backend";
import type { _SERVICE } from "../../../declarations/backend/backend.did";
import {
  Actor,
  HttpAgent,
  type ActorSubclass,
  type Identity,
} from "@dfinity/agent";

const getAgent = async (identity: Identity): Promise<HttpAgent> => {
  const host =
    (process.env.DFX_NETWORK as string) === "local"
      ? "http://localhost:8080/"
      : "https://icp0.io";
  // const host = import.meta.env.VITE_HOST;
  const agent: HttpAgent = new HttpAgent({ identity, host });

  if ((process.env.DFX_NETWORK as string) === "local") {
    await agent.fetchRootKey();
  }

  return agent;
};

export const getActor = async (
  identity: Identity
): Promise<ActorSubclass<_SERVICE>> => {
  // console.log(
  //   import.meta.env.VITE_DFX_CANISTER_ID_BACKEND,
  //   import.meta.env.CANISTER_ID_BACKEND,
  //   import.meta.env.VITE_CANISTER_ID_BACKEND
  //   // $env.VITE_CANISTER_ID_BACKEND
  // );
  const canisterId: string = process.env.CANISTER_ID_BACKEND as string;

  const agent = await getAgent(identity);

  return Actor.createActor(idlFactory, { agent, canisterId });
};
