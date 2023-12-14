//Exercise #3
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "item"],
          },
        ]),
      1500
    );
  });
};

const onSuccess = (data) => {
  console.log(data);
};
const onFailure = (error) => {
  console.log(error);
};

getJohnProfile().then(onSuccess).catch(onFailure);
getJohnOrders().then(onSuccess).catch(onFailure);

console.log(onSuccess);
