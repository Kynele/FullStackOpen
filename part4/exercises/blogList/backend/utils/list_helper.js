const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  let sum = 0;
  blogs.length === 0
    ? 0
    : blogs.forEach((blog) => {
        sum += blog.likes;
      });
  return sum;
};

const mostLikedPost = (blogs) => {
  if (!blogs || blogs.length === 0) {
    return {};
  }
  blogsCopy = blogs;
  let numberOfLikes = 0;
  blogsCopy.forEach((post) => {
    if (numberOfLikes < post.likes) {
      numberOfLikes = post.likes;
    }
  });
  blogsCopy2 = blogs.filter((post) => post.likes === numberOfLikes);
  console.log(`blogscopy2: ${blogsCopy2}`);
  return {
    title: blogsCopy2[0].title,
    author: blogsCopy2[0].author,
    likes: blogsCopy2[0].likes,
  };
};

const mostBlogs = (blogs) => {
  if (!blogs || blogs.length === 0) {
    return {};
  }
  let mostPostsAuthorName = "";
  let mostPostsNumber = 0;

  for (let i = 0; i < blogs.length; i++) {
    filteredBlogs = blogs;
    filteredBlogs = filteredBlogs.filter(
      (post) => post.author === blogs[i].author
    );
    if (filteredBlogs.length > mostPostsNumber) {
      mostPostsNumber = filteredBlogs.length;
      mostPostsAuthorName = blogs[i].author;
    }
  }
  const authorWithMostPosts = {
    author: mostPostsAuthorName,
    blogs: mostPostsNumber,
  };
  return authorWithMostPosts;
};

const mostLikes = (blogs) => {
  if (!blogs || blogs.length === 0) {
    return {};
  }
  let mostLikesAuthorName = "";
  let mostLikesTotal = 0;
  let dummyLikes = 0;

  for (let i = 0; i < blogs.length; i++) {
    filteredBlogs = blogs;
    filteredBlogs = filteredBlogs.filter(
      (post) => post.author === blogs[i].author
    );
    filteredBlogs.forEach((post) => {
      dummyLikes += post.likes;
    });
    if (dummyLikes > mostLikesTotal) {
      mostLikesTotal = dummyLikes;
      mostLikesAuthorName = blogs[i].author;
    }
    dummyLikes = 0;z
  }
  const authorWithMostLikes = {
    author: mostLikesAuthorName,
    likes: mostLikesTotal,
  };
  return authorWithMostLikes;
};

module.exports = {
  dummy,
  totalLikes,
  mostBlogs,
  mostLikedPost,
  mostLikes,
};
