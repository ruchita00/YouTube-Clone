import React from "react";

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments?.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  const CommentsData = [
    { name: "akashay saini", text: "lorem ,kjndf jnfvkjdn", replies: [] },
    {
      name: "akashay saini",
      text: "lorem ,kjndf jnfvkjdn",
      replies: [
        { name: "akashay saini", text: "lorem ,kjndf jnfvkjdn", replies: [] },
        { name: "akashay saini", text: "lorem ,kjndf jnfvkjdn", replies: [] },
        {
          name: "akashay saini",
          text: "lorem ,kjndf jnfvkjdn",
          replies: [
            {
              name: "akashay saini",
              text: "lorem ,kjndf jnfvkjdn",
              replies: [
                {
                  name: "akashay saini",
                  text: "lorem ,kjndf jnfvkjdn",
                  replies: [],
                },
                {
                  name: "akashay saini",
                  text: "lorem ,kjndf jnfvkjdn",
                  replies: [
                    {
                      name: "akashay saini",
                      text: "lorem ,kjndf jnfvkjdn",
                      replies: [],
                    },
                    {
                      name: "akashay saini",
                      text: "lorem ,kjndf jnfvkjdn",
                      replies: [
                        {
                          name: "akashay saini",
                          text: "lorem ,kjndf jnfvkjdn",
                          replies: [],
                        },
                        {
                          name: "akashay saini",
                          text: "lorem ,kjndf jnfvkjdn",
                          replies: [
                            {
                              name: "akashay saini",
                              text: "lorem ,kjndf jnfvkjdn",
                              replies: [],
                            },
                            {
                              name: "akashay saini",
                              text: "lorem ,kjndf jnfvkjdn",
                              replies: [],
                            },
                            {
                              name: "akashay saini",
                              text: "lorem ,kjndf jnfvkjdn",
                              replies: [
                                {
                                  name: "akashay saini",
                                  text: "lorem ,kjndf jnfvkjdn",
                                  replies: [],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "akashay saini",
              text: "lorem ,kjndf jnfvkjdn",
              replies: [],
            },
            {
              name: "akashay saini",
              text: "lorem ,kjndf jnfvkjdn",
              replies: [],
            },
          ],
        },
      ],
    },
    { name: "akashay saini", text: "lorem ,kjndf jnfvkjdn", replies: [] },
    { name: "akashay saini", text: "lorem ,kjndf jnfvkjdn", replies: [] },
    { name: "akashay saini", text: "lorem ,kjndf jnfvkjdn", replies: [] },
    { name: "akashay saini", text: "lorem ,kjndf jnfvkjdn", replies: [] },
  ];

  console.log(CommentsData);
  return (
    <div className="m-5 p-2">
      <h1 className="text 2xl font-bold">Comments: </h1>
      <CommentsList comments={CommentsData} />
    </div>
  );
};

export default CommentsContainer;
