import "./Biography.css";
import { useEffect } from "react";

export default function Biography() {
  useEffect(() => {
    const testToken = async () => {
      const token = await getArtsyToken();
      console.log(token);
    };
    testToken();
  });

  return <h1 className="biography__headline">biography</h1>;
}
async function getArtsyToken() {
  const clientId = "d9ab1e425b0d88a04c27";
  const secretId = "920439d22b36fc49cf0e0610a1977597";
  const query = new URLSearchParams({
    client_id: clientId,
    client_secret: secretId,
  });
  const data = await fetch(
    "https://api.artsy.net/api/tokens/xapp_token?" + query,
    {
      method: "POST",
    }
  );
  const json = await data.json();
  return json.token;
}

async function getBiography() {}
