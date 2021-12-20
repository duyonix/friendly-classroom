export const getPosts = async () => {
    return [
      {
        id: "1",
        body: "First post",
        username: "Jack",
        userId: "1",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "2",
        body: "Second post",
        username: "John",
        userId: "2",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "3",
        body: "First post first child",
        username: "John",
        userId: "2",
        parentId: "1",
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "4",
        body: "Second post second child",
        username: "John",
        userId: "2",
        parentId: "2",
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
    ];
  };
  
  export const createPost = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: "1",
      username: "John",
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updatePost = async (text) => {
    return { text };
  };
  
  export const deletePost = async () => {
    return {};
  };
  
  
  