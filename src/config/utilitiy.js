import { TOKEN_LIST } from "./constants";

export function LookForTokenInfo(chain, token) {
  const list = TOKEN_LIST.filter(
    (one) =>
      one.chain.toLowerCase() === chain.toLowerCase() &&
      one.name.toLowerCase() === token.toLowerCase()
  );
  if (list.length === 0) return null;
  return list[0];
}

