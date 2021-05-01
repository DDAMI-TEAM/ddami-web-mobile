import axios from "axios";

export const requestHandler = async ({ path, headers, ...args }) => {
  try {
    const config = {
      ...args,
      url: process.env.SERVER_URL + path,
      timeout: 5000,
      headers: headers ? headers : {},
    };
    const data = await axios(config);
    return successHandler(data);
  } catch (e) {
    errorHandler(e);
  }
};

export function successHandler(response) {
  console.log("[Response Data]: ");
  console.log(response.status, response.data);
  return response;
}

function errorHandler(e) {
  console.log("-----------------------------------------------------");
  console.log(`[Error]: ${JSON.stringify(e, null, 2)}`);
  throw e;
}
