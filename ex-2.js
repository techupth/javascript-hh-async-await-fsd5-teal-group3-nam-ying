//Exercise #2
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};

// const onSuccess = (data) => {
//   console.log(data);
// };
const onFailure = (error) => {
  console.log(error);
};

getJohnProfile().catch(onFailure);
