const UserComment = (props: { comment: string }) => {
  return (
    <div>
      <p class="text-black text-3xl italic text-center">
        "{props.comment}"
      </p>
    </div>
  );
};

export default UserComment;
