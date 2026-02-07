// app/controllers/hello_controller.js
exports.index = (req, res) => {
  res.render("layouts/application", {
    title: "Home",
    body: "hello/index"  // Path relative to layouts/
  });
};

exports.show = (req, res) => {
  res.render("layouts/application", {
    title: "Home",
    body: "hello/show"  // Path relative to layouts/
  });
};

exports.new = (req, res) => {
  res.render("layouts/application", {
    title: "Home",
    body: "hello/new"  // Path relative to layouts/
  });
};
