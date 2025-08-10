// FakeResponsive.js
console.log("[FakeResponsive] Intercepted: " + $request.url);

const fakeData = {
  status: "success",
  message: "Fake data from Shadowrocket",
  rank: 1,
  score: 9999
};

$done({
  status: 200,
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(fakeData)
});
