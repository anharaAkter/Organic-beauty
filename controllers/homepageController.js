export const getHomepage = (req, res, next) => {
    res.render("home", {
      title: "Organic Beauty",
    });
  };
  