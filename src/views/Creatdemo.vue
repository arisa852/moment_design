<script>

import { ref, onMounted } from 'vue';
export default {
  data() {
    return {
      topUsers: [
        { id: 1, name: '' },
        { id: 2, name: '' },
        { id: 3, name: '' }
      ],
      latestArticles: [
        { id: 1, title: '', link: '#' },
        { id: 2, title: '', link: '#' },
        { id: 3, title: '', link: '#' }
      ],
      post: {
        title: '',
        date: '2023-03-01',
        relativeDate: '',
        tags: ['貓', '畫書', 'DJ'],
        description: '',
        steps: ['', '', ''],
        commentsCount: 0,
        likesCount: 3
      },
      newComment: ''
    };
  },
  methods: {
    sendComment() {
      // Add your comment sending logic here
      console.log('New comment:', this.newComment);
      this.newComment = '';
    }
  }
};







</script>
<template>
 <div class="demo-container">
    <aside class="sidebar">
      <nav class="explore">
        <ul>
          <li><a href="#">書籤</a></li>
          <li><a href="#">輪廓</a></li>
          <li><a href="#">設定</a></li>
        </ul>
      </nav>
      <section class="top-users">
        <h3>Top Users</h3>
        <ul>
          <li v-for="user in topUsers" :key="user.id">
            <img src="@/assets/images/2991.png" :alt="user.name">
            <span>{{ user.name }}</span>
          </li>
        </ul>
      </section>
      <section class="latest-how-to">
        <h3>Latest How To</h3>
        <ul>
          <li v-for="article in latestArticles" :key="article.id">
            <a :href="article.link">{{ article.title }}</a>
          </li>
        </ul>
      </section>
    </aside>
    <main class="content">
      <article class="post">
        <header>
          <h2>{{ post.title }}</h2>
          <time :datetime="post.date">{{ post.relativeDate }}</time>
          <div class="tags">
            <span v-for="tag in post.tags" :key="tag">{{ tag }}</span>
          </div>
        </header>
        <img src="@/assets/images/2991.png" alt="Post Image" class="post-image">
        <section class="steps">
          <p>{{ post.description }}</p>
          <ol>
            <li v-for="step in post.steps" :key="step">{{ step }}</li>
          </ol>
        </section>
        <footer>
          <button>{{ post.commentsCount }} comments</button>
          <button>{{ post.likesCount }} likes</button>
        </footer>
      </article>
      <section class="comments">
        <textarea v-model="newComment" placeholder="Add a comment..."></textarea>
        <button class="send-button" @click="sendComment">Send</button>
      </section>
    </main>
  </div>

</template>

<style scoped>
.demo-container {
  display: flex;
  font-family: Arial, sans-serif;
}

.sidebar {
  width: 250px;
  padding: 20px;
  background-color: #f4f4f4;
}

.explore ul {
  list-style: none;
  padding: 0 20px;
  background-color: #fff;
  border-radius: 15px;
}

.explore li {
  margin: 10px 0;
}

.explore a {
  text-decoration: none;
  color: #333;
}

.top-users, .latest-how-to {
  margin-top: 20px;
}

h3 {
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0 10px;
  background-color: #fff;
  border-radius: 15px;
}

li {
  display: flex;
  align-items: center;
  margin: 5px 0;
}

img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

.content {
  flex: 1;
  padding: 20px;
}

.post {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.post>img{
  width: 300px;
  height: 300px;
  margin-right:40px;
}


header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tags span {
  background-color: #e0e0e0;
  border-radius: 3px;
  padding: 3px 8px;
  margin-right: 5px;
}

.steps ol {
  padding-left: 20px;
}

footer {
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
}

footer button {
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  font-size: 16px;
}

.comments {
  margin-top: 20px;
}

.comments textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.send-button {
  padding: 10px 20px;
  border: none;
  background-color: #00aaff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

</style>