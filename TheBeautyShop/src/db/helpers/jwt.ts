import * as jose from "jose";

export function generateAccessToken(payload: any, secret: string): Promise<string> {
  const { _id, username } = payload;
  const secretKey = new TextEncoder().encode(secret);
  const alg = "HS256";

  return new Promise((resolve, reject) => {
    new jose.SignJWT({ _id, username })
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .sign(secretKey)
      .then((token) => resolve(token))
      .catch((error) => reject(error));
  });
}
