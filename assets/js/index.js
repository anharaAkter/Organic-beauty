/* js version */

//delete message
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

  //update category``
  document.getElementById("update_category").addEventListener("submit", async function(event) {
    event.preventDefault();
  
    var unindexed_array = Array.from(new FormData(this));
    var data = {};
  
    unindexed_array.forEach(function(n) {
      data[n[0]] = n[1];
    });
  
    var request = {
      url: `http://localhost:8082/update-category/${data.id}`,
      method: "PUT",
      data: data
    };
  
    try {
      const response = await fetch(request.url, {
        method: request.method,
        body: JSON.stringify(request.data),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (response.ok) {
        alert("Data Updated Successfully!");
      } else {
        throw new Error(response.status);
      }
    } catch (err) {
      console.error(err);
    }
  });
  
  