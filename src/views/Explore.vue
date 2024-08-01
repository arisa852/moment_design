<script>
export default {
  data() {
    return {
      topUsers: [
        { id: 1, name: '' },
        { id: 2, name: '' },
        { id: 3, name: '' }
      ],
      latestArticles: [
        { id: 1, title: '', link: '#', comments: 0, likes: 0 },
        { id: 2, title: '', link: '#', comments: 0, likes: 3 },
        { id: 3, title: '', link: '#', comments: 2, likes: 1 }
      ],
      posts: [
        { id: 1, title: '', description: '', date: '', tags: ['完成', '玩'], comments: 0, likes: 0 },
        { id: 2, title: '', description: '', date: '', tags: ['貓', '聲音', 'DJ'], comments: 0, likes: 3 },
        { id: 3, title: '', description: '', date: '', tags: ['韋夫夫', '韋夫韋'], comments: 2, likes: 1 },
        { id: 4, title: '', description: '', date: '', tags: [], comments: 0, likes: 0 }
      ]
    };
  }
};





</script>
<template>
  <div class="ex-container">
    <aside class="sidebar">
      <nav class="explore">
        <ul>
          <li><a href="#">書籤</a></li>
          <li><a href="#">輪廓</a></li>
          <li><a href="#">設定</a></li>
        </ul>
      </nav>
      <section class="top-users">
        <h3>熱門用戶</h3>
        <ul>
          <li v-for="user in topUsers" :key="user.id">
            <img src="@/assets/images/2991.png" :alt="user.name">
            <span>{{ user.name }}</span>
          </li>
        </ul>
      </section>
      <section class="latest-how-to">
        <h3>最新操作方法</h3>
        <ul>
          <li v-for="article in latestArticles" :key="article.id">
            <a :href="article.link">{{ article.title }}</a>
            <span>{{ article.comments }} <i class="icon-comment"></i> {{ article.likes }} <i class="icon-like"></i></span>
          </li>
        </ul>
      </section>
    </aside>
    <main class="content">
      <header class="content-header">
        <h1>探索</h1>
        <div class="filter-create">
          <button>最新的</button>
          <button class="create-btn">創造 知何</button>
        </div>
      </header>
      <section class="posts">
        <article v-for="post in posts" :key="post.id" class="post-card">
          <img src="@/assets/images/2991.png" alt="Post Image" class="post-image">
          <div class="post-content">
            <h2>{{ post.title }}</h2>
            <p>{{ post.description }}</p>
            <div class="tags">
              <span v-for="tag in post.tags" :key="tag">{{ tag }}</span>
            </div>
            <footer>
              <span>{{ post.date }}</span>
              <span>{{ post.comments }} <i class="icon-comment"></i> {{ post.likes }} <i class="icon-like"></i></span>
            </footer>
          </div>
        </article>
      </section>
    </main>
  </div>

</template>

<style scoped>
.ex-container {
  display: flex;
  font-family: Arial, sans-serif;
}

.sidebar {
  width: 20%;
  padding: 30px 20px;
  background-color: #f4f4f4;
 
}

.explore ul {
  list-style: none;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 2px rgba(187, 187, 187, 0.6);
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
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 2px rgba(187, 187, 187, 0.6);
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

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.filter-create {
  display: flex;
  gap: 10px;
}

.create-btn {
  background-color: #00aaff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.posts {
  display: flex;
  flex-wrap: wrap;
   gap: 20px;
}

.post-card {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 20px;
  flex: 1 1 calc(100% - 20px); /* Adjust the width to make the cards fill the container */
  box-sizing: border-box;
}

.post-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.post-content {
  flex: 1;
}

.tags span {
  background-color: #e0e0e0;
  border-radius: 3px;
  padding: 3px 8px;
  margin-right: 5px;
}

footer {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.icon-comment::before {
  content: '💬';
}

.icon-like::before {
  content: '❤️';
}

</style>
