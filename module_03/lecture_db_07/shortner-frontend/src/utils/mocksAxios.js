import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

mock.onGet("/api/links").reply(200, [
  {
    id: 1,
    shortUrl: "/123",
    longUrl: "https://www.google.com",
  },
  {
    id: 2,
    shortUrl: "/456",
    longUrl: "https://www.youtube.com",
  },
  {
    id: 3,
    shortUrl: "/789",
    longUrl: "https://www.facebook.com",
  },
]);

export default axios;
