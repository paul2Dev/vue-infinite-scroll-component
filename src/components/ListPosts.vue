<template>
    <div class="scrolling-component" ref="scrollComponent">
        <Post 
        v-for="(post, index) in posts"
        :post="post"
        :key="index"
        />
    </div>
</template>

<script>
    import getPosts from '../get-posts'
    import { ref, onMounted, onUnmounted } from 'vue';
    import Post from '../components/Post.vue';
export default {
    components: {
        Post
    },
    setup() {
        const posts = ref(getPosts(10))
        const scrollComponent = ref(null)

        const loadMorePosts = () => {
            let newPosts = getPosts(5)
            posts.value.push(...newPosts)
        }

        onMounted(() => {
            window.addEventListener("scroll", handleScroll)
        })

        onUnmounted(() => {
            window.removeEventListener("scroll", handleScroll)
        })

        const handleScroll = (e) => {
            let scrollDiv = scrollComponent.value
            if (scrollDiv.getBoundingClientRect().bottom < window.innerHeight) {
                loadMorePosts()
            }
        }

        return {
            posts,
            scrollComponent
        }
    }
}
</script>