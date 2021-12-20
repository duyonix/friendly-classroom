export const getComments = async () => {
  return [
    {
      id: "1",
      body: "Bạn giỏi quá à",
      username: "Duy",
      userId: "1",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "Dạ cô",
      username: "Bảo",
      userId: "2",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    // {
    //   id: "3",
    //   body: "ahhahaha",
    //   username: "Ý",
    //   userId: "3",
    //   parentId: "1",
    //   createdAt: "2021-08-16T23:00:33.010+02:00",
    // },
    // {
    //   id: "4",
    //   body: "Vi xinh đẹp",
    //   username: "Vi",
    //   userId: "4",
    //   parentId: "2",
    //   createdAt: "2021-08-16T23:00:33.010+02:00",
    // },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "4",
    username: "Vi",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
