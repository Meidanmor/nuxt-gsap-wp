const siteURL = "https://spite.meidanm.com";

export const state = () => ({
  posts: [],
  tags: [],
})

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts
  },
  updateTags: (state, tags) => {
    state.tags = tags
  }
}

export const actions = {
  async getPosts({ state, commit, dispatch }) {
    if (state.posts.length) return

    try {
       let postsData = 1;
      let posts = await fetch(
        `${siteURL}/wp-json/wp/v2/projects?page=${postsData}&per_page=100&_embed=1`
      ).then(res => res.json())

      posts = posts
        .filter(el => el.status === "publish")
        .map(({ id, slug, title, excerpt, date, tags, content, images, yoast_head, yoast_meta }) => ({
          id,
          slug,
          title,
          excerpt,
          date,
          tags,
          content,
          images,
          yoast_head,
          yoast_meta
        }));


      commit("updatePosts", posts)

    } catch (err) {
      console.log(err)
    }
  },
  async getTags({ state, commit }) {
    if (state.tags.length) return

    let allTags = state.posts.reduce((acc, item) => {
      return acc.concat(item.tags)
    }, [])
    allTags = allTags.join()

    try {
      let tags = await fetch(
        `${siteURL}/wp-json/wp/v2/tags?page=1&per_page=40&include=${allTags}`
      ).then(res => res.json())

      tags = tags.map(({ id, name }) => ({
        id,
        name
      }))

      commit("updateTags", tags)
    } catch (err) {
      console.log(err)
    }
  }
}
