//Exercise #1

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

const onSuccess = (data) => {
  console.log(data);
};
// const onFailure = (error) => {
//   console.log(error);
// };
getJohnProfile().then(onSuccess);
