import Redis from "ioredis";
const client = new Redis("127.0.0.1:7001");

export class redisAction {
  set = async (name, data) => {
    await client.set(name,JSON.stringify(data));
  };
  get = async (name) => {
    const res=await client.get(name);
    return JSON.parse(res);
  };
}
