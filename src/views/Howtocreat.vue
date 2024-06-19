<script>



</script>

<template>

<div class="howto-container">
    <aside class="sidebar">
      <nav>
        <ul>
          <li><a href="#">Explore</a></li>
          <li><a href="#">Bookmarks</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </nav>
      <div class="top-users">
        <h2>Top Users</h2>
        <ul>
          <li>
            <img src="https://via.placeholder.com/50" alt="Emily Wang">
            <span>Emily Wang</span>
          </li>
          <li>
            <img src="https://via.placeholder.com/50" alt="Thomas Herring">
            <span>Thomas Herring</span>
          </li>
          <li>
            <img src="https://via.placeholder.com/50" alt="Martha Joyner">
            <span>Martha Joyner</span>
          </li>
        </ul>
      </div>
      <div class="latest-howto">
        <h2>Latest How To</h2>
        <ul>
          <li><a href="#">把貓變成DJ</a></li>
          <li><a href="#">dwefdww</a></li>
          <li><a href="#">qq</a></li>
        </ul>
      </div>
    </aside>
    <main class="main-content">
      <div class="create-howto">
        <h1>Create How To...</h1>
        <div class="howto-form">
          <div class="image-placeholder">
            <img src="https://via.placeholder.com/300x150" alt="Placeholder">
          </div>
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" id="title" placeholder="How to turn your cat into a DJ...">
          </div>
          <div class="form-group">
            <label for="introduction">Introduction</label>
            <textarea id="introduction" placeholder="Turn your cat into a DJ! Train them to respond to sounds, attach a collar with sensors..."></textarea>
          </div>
          <div class="form-group">
            <label for="tags">Tags</label>
            <input type="text" id="tags" placeholder="Press enter to add tags...">
          </div>
        </div>
      </div>
    </main>
  </div>


</template>
<style scoped>
.howto-container {
  display: flex;

}

.sidebar {
  width: 250px;
  background-color: #f5f5f5;
  padding: 20px;
}

.sidebar nav ul {
  list-style: none;
  padding: 0;
}

.sidebar nav ul li {
  margin: 15px 0;
}

.sidebar nav ul li a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.top-users, .latest-howto {
  margin-top: 30px;
}

.top-users h2, .latest-howto h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

.top-users ul, .latest-howto ul {
  list-style: none;
  padding: 0;
}

.top-users ul li, .latest-howto ul li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.top-users ul li img, .latest-howto ul li img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.main-content {
  flex: 1;
  padding: 20px;
  background-color: #fff;
}

.create-howto {
  max-width: 600px;
  margin: 0 auto;
}

.create-howto h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.howto-form {
  background-color: #e7f6f2;
  padding: 20px;
  border-radius: 8px;
}

.image-placeholder {
  text-align: center;
  margin-bottom: 20px;
}

.image-placeholder img {
  max-width: 100%;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-group input, .form-group textarea {
  width: calc(100% - 20px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-group textarea {
  resize: vertical;
  height: 100px;
}




</style>