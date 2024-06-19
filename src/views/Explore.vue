<script>






</script>
<template>
  
  <div class="container">
    <div class="main-content">
      <div class="sidebar">
        <nav>
          <ul>
            <li>Explore</li>
            <li>Bookmarks</li>
            <li>Profile</li>
            <li>Settings</li>
          </ul>
        </nav>
        <div class="top-users">
          <h2>Top Users</h2>
          <ul>
            <li><img src="#" alt="user1"> Emily Wang</li>
            <li><img src="#" alt="user2"> Thomas Herring</li>
            <li><img src="#" alt="user3"> Martha Joyner</li>
          </ul>
        </div>
        <div class="latest-how-to">
          <h2>Latest How To</h2>
          <ul>
            <li>把貓變成DJ</li>
            <li>dwefdw</li>
            <li>qq</li>
          </ul>
        </div>
      </div>
      <main class="explore">
        <div class="explore-header">
          <h2>Explore</h2>
          <div class="controls">
            <select>
              <option>Latest</option>
            </select>
            <button>Create</button>
          </div>
        </div>
        <div class="posts">
          <div class="post">
            <img src="#" alt="post image">
            <div class="post-details">
              <span>Jun</span>
              <span>Apr 9</span>
              <h3>把貓變成DJ</h3>
              <div class="tags">
                <span>貓</span>
                <span>聲音</span>
                <span>DJ</span>
              </div>
              <div class="reactions">
                <span>0</span>
                <span>0</span>
              </div>
            </div>
          </div>
          <div class="post">
            <img src="#" alt="post image">
            <div class="post-details">
              <span>Ray Huang</span>
              <span>Jan 12</span>
              <h3>dwefdw</h3>
              <div class="tags">
                <span>wefw</span>
                <span>efwefwe</span>
              </div>
              <div class="reactions">
                <span>2</span>
                <span>1</span>
              </div>
            </div>
          </div>
          <!-- Add more posts as needed -->
        </div>
      </main>
    </div>
  </div>



</template>

<style scoped lang="css">
.container {
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  justify-content: center;
  align-items: center;
  
}

.main-content {
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-top:40px;
 
}

.sidebar {
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 20px;
  background-color: #f1f1f1;
  margin: 40px 0;
}

.sidebar nav ul {
  list-style: none;
  padding: 0;
}

.sidebar nav ul li {
  padding: 10px 0;
}

.top-users,
.latest-how-to {
  margin-top: 20px;
}

.top-users ul,
.latest-how-to ul {
  list-style: none;
  padding: 0;
}

.top-users li,
.latest-how-to li {
  display: flex;
  align-items: center;
  padding: 5px 0;
}

.top-users img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 50%;
}

.explore {
  flex: 1;
  padding: 20px;
}

.explore-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.posts {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.post {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.post img {
  width: 100%;
  height: auto;
}

.post-details {
  margin-top: 10px;
}

.post-details .tags {
  display: flex;
  flex-wrap: wrap;
}

.post-details .tags span {
  background-color: #e0e0e0;
  border-radius: 10px;
  padding: 5px;
  margin-right: 5px;
  margin-top: 5px;
}

.post-details .reactions {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

</style>
