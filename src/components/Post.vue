<template>
    <div class="post">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
    </div>
</template>

<script>
export default {
    props: {
        post: Object
    }
}
</script>

<style scoped>
    .post {
        background: #42b883;
        padding: 1.5rem;
    }

    .post:not(:last-child) {
        border-bottom: 1px solid #35495e;
    }

    .post h2 {
        font-size: 1.5em;
        padding-bottom: 0.25rem;
    }

    .post p {
        color: #35495e;
    }
</style>