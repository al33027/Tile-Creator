<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />

    <!-- Style CSS -->
    <link rel="stylesheet" href="css/style.css" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
      integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
      crossorigin="anonymous"
    />
    <title>Hello, world!</title>
  </head>

  <body>
    <div class="add-box-window" id="window-overlay">
      <div class="form-container" id="form-box">
        <form class="p-3" id="create-form">
          <div class="row">
            <div class="col-md-7">
              <div class="form-group bg-white md-3 p-3 rounded">
                <input id="real-file" type="file" hidden="hidden" directory multiple />
                <button type="button" class="btn btn-primary custom-btn" id="custom-btn">Get Image</button>
                <span id="upload-text">No Image file Selected</span>
              </div>
              <div class="form-group md-3">
                  <label for="SelectFileType">Select File Type</label>
                  <select class="form-control" id="file-type">
                    <option disabled="disabled" selected="true" value="">Select a File Type</option>
                    <option value="website">Website Design</option>
                    <option value="UI">UI Design</option>
                    <option value="logo">Logo Design</option>
                    <option value="brand">Brand Design</option>
                  </select>
              </div>
              <div class="form-group md-3">
                <label for="SelectFileType">Tile Page Index</label>
                <input id="page-link" class="form-control" type="url" placeholder="Page Link" />
              </div>
              <div class="form-group md-3">
                <label for="TileName">Tile Name</label>
                <input id="tile-name" class="form-control" type="text" placeholder="Tile Name" />
              </div>
            </div>
            <div class="col-md-5">
              <div class="prev-container" id="prev-img"></div>
            </div>
          </div>
          <button type="button" class="btn btn-primary add-tile" id="add-tile"><i class="fas fa-plus-circle"></i> Create Tile</button>
          <button type="button" class="btn btn-primary close-window" id="close-window">
              <i class="fas fa-door-closed"></i> Close Window</button>
          <button type="reset" id="reset-window" hidden="hidden"></button>
        </form>
      </div>
    </div>
    <div class="container">
      <h1>Hello, world!</h1>
      <button type="button" class="btn btn-primary mb-3" id="open-win">
          <i class="fas fa-door-open"></i>
      </button>
      <div class="d-flex bd-highlight flex-row flex-wrap tile-container justify-content-start"
        id="tile-container"></div>
    </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossorigin="anonymous"
    ></script>

    <!-- JavaScript -->
    <script src="js/index.js"></script>
  </body>
</html>
