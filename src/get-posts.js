function uuid () {
    return Math.random().toString(16).slice(2)
}

const getPosts = (number) => {
    let posts = []

    for(let i = 0; i < number; i++) {
        posts.push({
            title: 'Random title ' + uuid(),
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, delectus.'
        })
    }

    return posts
}

export default getPosts