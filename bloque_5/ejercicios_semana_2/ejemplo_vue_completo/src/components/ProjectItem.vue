<template>
    <article class="project">
        <div class="project-image">
            <a :href="link">
              <img :src="image" :alt="title">
            </a>
        </div>
        <div class="project-content">
            <div class="project-category">{{ category }}</div>
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
            <a :href="link" class="button">Read more &#x2192;</a>
        </div>
    </article>
    </template>
    
    <script>
    export default {
      name: 'ProjectItem',
      props: {
        image: String,
        title: String,
        category: String,
        description: String,
        link: String
      },
     
  
    }
    </script>
    
    <style scoped>
    
    </style>
