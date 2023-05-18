/* js version */
if (window.location.pathname === "/category") {
    var onDelete = document.querySelectorAll(".delete-category");
    onDelete.forEach(function(element) {
      element.addEventListener("click", function() {
        var id = this.getAttribute("data-id");
  
        var request = {
          url: "http://localhost:8082/category/" + id,
          method: "DELETE"
        };
  
        if (confirm("Do you really want to delete this record?")) {
          fetch(request.url, {
            method: request.method
          }).then(function(response) {
            if (response.ok) {
              alert("Data Deleted Successfully!");
              location.reload();
            } else {
              throw new Error("Error deleting data");
            }
          }).catch(function(error) {
            console.error(error);
          });
        }
      });
    });
  }
  