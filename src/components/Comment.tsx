export type CommentType = {
  id: number;
  name: string;
  email: string;
  body: string;
};

function Comment(props: CommentType): JSX.Element {
  const { id, name, email, body } = props;

  return (
    <div
      className="grid grid-flow-col bg-white drop-shadow-md my-4 rounded-xl"
      key={id}
    >
      <div className="flex pt-4 md:pt-0 md:items-center justify-center text-center bg-teal-100 text-white text-2xl md:text-4xl w-14 md:w-20">
        {id}
      </div>
      <div className="grid p-4 w-full">
        <div className="text-teal-600 font-bold">{name}</div>
        <div className="text-gray-600">{email}</div>
        <div className="text-gray-800">{body}</div>
      </div>
    </div>
  );
}

export default Comment;
