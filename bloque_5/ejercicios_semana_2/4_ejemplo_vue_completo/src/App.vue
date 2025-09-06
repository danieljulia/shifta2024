<template>
  <div id="app">

   

    <header class="main-header light-color">
		<div class="logo"><a href="index.html">This is<br>my portfolio</a></div>
		<nav class="navigation main-nav">
			<ul>
				<li><a href="index.html" class="selected" title="Home">Home</a></li>
				<li><a href="#" title="Projects">Projects</a></li>
				<li><a href="#" title="About">About</a></li>
				<li><a href="contact.html" title="Contact">Contact</a></li>
			</ul>
		</nav>	
	</header>

	<div class="hero-home">
		<h1>This is<br>my portfolio</h1>
		<div class="button-go-bottom"><a href="#bottom">&#x21e9;</a></div>
	</div>
	
	<div class="wrapper" id="bottom">
		<section>


      
    <ProjectItem
		v-for="(project, index) in projects"
		:key="index"
		:image="project.image"
        :title="project.title"
        :category="project.category"
        :description="project.description"
        :link="project.link"
    >
	</ProjectItem>

     


		</section>
	</div>

	<footer class="main-footer light-color">
		<div class="logo">
			<a href="index.html">This is<br>my portfolio</a>
			<br>&copy; 2024
		</div>
		<nav class="navigation footer-nav">
			<ul>
				<li><a href="#">Privacy Policy</a></li>
				<li><a href="#">Terms of Use</a></li>
			</ul>
		</nav>
	</footer>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import ProjectItem from './components/ProjectItem.vue'
import projects from './assets/projects.json'


export default {
  name: 'App',
  components: {
   // HelloWorld
   ProjectItem
 },
  data() {
    return {
      projects
    }
  },
  
 
}
</script>

<style>

@import './assets/css/styles.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
