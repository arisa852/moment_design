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
      newPost: {
        title: '',
        description: '',
        tags: [],
        steps: []
      },
      newTag: ''
    };
  },
  methods: {
    addTag() {
      if (this.newTag && this.newPost.tags.length < 5) {
        this.newPost.tags.push(this.newTag);
        this.newTag = '';
      }
    },
    removeTag(tag) {
      this.newPost.tags = this.newPost.tags.filter(t => t !== tag);
    },
    addStep() {
      if (this.newPost.steps.length < 5) {
        this.newPost.steps.push('');
      }
    },
    createPost() {
      // Handle post creation
      console.log('Creating post:', this.newPost);
      this.resetForm();
    },
    resetForm() {
      this.newPost = {
        title: '',
        description: '',
        tags: [],
        steps: []
      };
      this.newTag = '';
    }
  }
};

</script>

<template>
  <div class="how-container">
    <aside class="sidebar">
      <nav class="explore">
        <ul>
          <li><a href="#">探索</a></li>
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
        <button class="back-button">返回</button>
        <h1>創建</h1>
      </header>
      <section class="create-post">
   
        <form @submit.prevent="createPost">
          <div class="form-group">
            <label for="title">標題</label>
            <input v-model="newPost.title" id="title" type="text" placeholder="" maxlength="50">
            <small>{{ newPost.title.length }}/50</small>
          </div>
          <div class="form-group">
            <label for="description">介紹</label>
            <textarea v-model="newPost.description" id="description" placeholder="" maxlength="200"></textarea>
            <small>{{ newPost.description.length }}/200</small>
          </div>
          <div class="form-group">
            <label for="tags">標籤</label>
            <input v-model="newTag" @keyup.enter="addTag" id="tags" type="text" placeholder="按 Enter 鍵新增標籤...">
            <div class="tags">
              <span v-for="tag in newPost.tags" :key="tag" class="tag">{{ tag }} <i @click="removeTag(tag)" class="icon-remove">×</i></span>
            </div>
            <small>{{ newPost.tags.length }}/5</small>
          </div>
          <div class="form-group image-upload">
            <label>圖片</label>
            <img src="@/assets/images/2991.png" alt="Post Image" class="post-image">
          </div>
       
          <div class="form-group steps-container">
            <h3>寫下步驟...</h3>
            <p>拖放即可重新排序！</p>
            <ul class="steps">
              <li v-for="(step, index) in newPost.steps" :key="index">
                <input v-model="newPost.steps[index]" type="text" placeholder="步驟 {{ index + 1 }}">
                <button type="button" @click="removeStep(index)" class="icon-remove">×</button>
              </li>
            </ul>
            <button type="button" @click="addStep" class="add-step-button">新增步驟</button>
          </div>
          <div class="form-actions">
            <button type="button" @click="resetForm" class="reset-button">重設</button>
            <button type="submit" class="create-button">創造</button>
          </div>
        </form>
      </section>
    </main>
  </div>

</template>
<style>

.how-container {
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
  padding: 20px;
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
  padding: 20px;
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

.content-header {
  display: flex;
  align-items: center;
  gap: 20px;
}

.back-button {
  background-color: #f4f4f4;
  border: none;
  cursor: pointer;
}

.create-post {
  margin-top: 20px;
}

.creatcards{
   display: flex;

}


.form-group {
  margin-bottom: 20px;
}

.form-group.image-upload img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  display: block;
  
}

input[type="text"], textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

textarea {
  height: 80px;
  resize: none;
}

.tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
}

.tag {
  background-color: #e0e0e0;
  border-radius: 3px;
  padding: 3px 8px;
  display: flex;
  align-items: center;
}

.icon-remove {
  margin-left: 5px;
  cursor: pointer;
}

.steps {
  list-style: none;
  padding: 0;
}

.steps li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.steps li input {
  flex: 1;
  margin-right: 10px;
}

.add-step-button, .reset-button, .create-button {
  background-color: #00aaff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form-actions {
  display: flex;
  justify-content: space-between;
}


</style>