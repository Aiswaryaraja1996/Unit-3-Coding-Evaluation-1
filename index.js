<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PRODUCTS</title>
  </head>
  <body>
    <header></header>
    <div class="main-container">
      <div class="form-wrap">
        <form>
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="Enter your product" />
          <br />
          <label for="price">Price</label>
          <input type="text" id="price" />
          <br />
          <label for="currency">Currency</label>
        </form>
      </div>
    </div>
    <script>
      window.addEventListener("load", function () {
        fetchPost();
      });

      async function fetchPost() {
        const result = await getPost();
        console.log(result);
      }

      function getPost() {
        return fetch("http://localhost:3001/products").then(function (
          response
        ) {
          return response.json();
        });
      }
    </script>
  </body>
</html>
