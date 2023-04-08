//API_NOTIFICATION_MESSAGES

export const API_NOTIFICATION_MESSAGES = {
  loading: {
    title: "Loading...",
    message: "Data is being Loaded, Please wait",
  },
  success: {
    title: "Success",
    message: "Data successfully Loaded",
  },
  responseFailure: {
    title: "Error",
    message:
      "An error occured while fetching from the server. Please try again",
  },
  requestFailure: {
    title: "Error",
    message: "An error occured while parsing request data",
  },
  networkError: {
    title: "Error",
    message:
      "unable to connect with the server .Please check the internt connectivty and try again later    ",
  },
};

//API SERVICE CALL
//Sample request
//need service call :{url :'/',method:'post/get/put/delete' ,params:true/false ,query:true/false }

export const SERVICE_URLS = {
  userSignup: { url: "/signup", method: "POST" },
  userLogin: { url: "/login", method: "POST" },
  uploadFile: { url: "/file/upload", method: "POST" },
  createPost: { url: "create", method: "POST" },
  getAllPosts: { url: "/posts", method: "GET", params: true },
  getPostById: { url: "post", method: "GET", query: true },
  UpdatePost: { url: "update", method: "PUT", query: true },
  deleteBlog: { url: "delete", method: "DELETE", query: true },
  newComment: { url: "/comment/new", method: "POST" },
  getAllComments: { url: "comments", method: "GET", query: true },
  deleteComment:{url:'/comment/delete',method:"DELETE",query:true},
};
