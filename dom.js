document.body.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
  integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <link rel="stylesheet" href="styles.css">
  <title>ToDo App</title>
</head>
<body>
  <header>
    <h2 id='header'>My To-Do App</h2>
  </header>
  <main>
    <div>
      <h4>My Projects</h4>
      <div id='all-projects'></div>

      <h4>Create a new project</h4>
      <form id='input-form'>
        <label for="title">Title</label>
        <input type='text' id='title' autocomplete='off' placeholder="project title" required><br><br>
        <input type='submit' id='project-submit-btn' value='Create'>
      </form>
      <h5 id='project-name'></h5>
      <div id='project-todos'></div>
      <div id='todo-creation-form'></div>
    </div>
  </main>
<script src='main.js'></script>
</body>
</html>


`;
export default document;