// export const methodName = () => {
//   return (
//     $.ajax({
//       method: "",
//       url: ""
//     })
//   );
// };

export const login = (user) => {
  return (
    $.ajax({
      method: "POST",
      url: "/api/users",
      data: {user: user}
    })
  );
};
