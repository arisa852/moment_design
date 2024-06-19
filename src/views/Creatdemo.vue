<script setup>

</script>
<template>
<div class="container">
    <aside class="sidebar">
      <nav class="explore">
        <ul>
          <li><a href="#">Bookmarks</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </nav>
      <section class="top-users">
        <h3>Top Users</h3>
        <ul>
          <li>
            <img src="path/to/avatar1.jpg" alt="Emily Wang">
            <span>Emily Wang</span>
          </li>
          <li>
            <img src="path/to/avatar2.jpg" alt="Thomas Herring">
            <span>Thomas Herring</span>
          </li>
          <li>
            <img src="path/to/avatar3.jpg" alt="Martha Joyner">
            <span>Martha Joyner</span>
          </li>
        </ul>
      </section>
      <section class="latest-how-to">
        <h3>Latest How To</h3>
        <ul>
          <li><a href="#">把貓變成DJ</a></li>
          <li><a href="#">dwfedfw</a></li>
          <li><a href="#">qq</a></li>
        </ul>
      </section>
    </aside>
    <main class="content">
      <article class="post">
        <header>
          <h2>把貓變成DJ</h2>
          <time datetime="2023-04-15">2 months ago</time>
          <div class="tags">
            <span>貓</span>
            <span>聲音</span>
            <span>DJ</span>
          </div>
        </header>
        <section class="steps">
          <p>訓練牠們對聲音有反應</p>
          <ol>
            <li>日常讓貓聽音樂</li>
            <li>讓貓一聽到音樂跳起來</li>
            <li>變成DJ</li>
          </ol>
        </section>
        <footer>
          <button>0 comment</button>
          <button>0 like</button>
        </footer>
      </article>
      <section class="comments">
        <textarea placeholder="Add a comment..."></textarea>
        <button class="send-button">Send</button>
      </section>
    </main>
  </div>
</template>
<style scoped lang="css">
.container {
  display: flex;
  padding: 20px;
}

.sidebar {
  width: 250px;
  margin-right: 20px;
}

.sidebar nav ul,
.sidebar .top-users ul,
.sidebar .latest-how-to ul {
  list-style-type: none;
  padding: 0;
}

.sidebar nav ul li,
.sidebar .top-users ul li,
.sidebar .latest-how-to ul li {
  margin-bottom: 10px;
}

.top-users ul li {
  display: flex;
  align-items: center;
}

.top-users ul li img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

.content {
  flex: 1;
}

.post {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.post header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post header h2 {
  margin: 0;
}

.post header .tags span {
  margin-right: 10px;
  background-color: #e0e0e0;
  padding: 5px 10px;
  border-radius: 20px;
}

.steps ol {
  padding-left: 20px;
}

.comments {
  display: flex;
  align-items: center;
}

.comments textarea {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}

.send-button {
  padding: 10px 20px;
  background-color: #00aaff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.send-button:hover {
  background-color: #0077cc;
}

</style>