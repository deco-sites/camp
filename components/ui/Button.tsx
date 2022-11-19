const Button = (props: { children: any }) => {
  return (
    <button
      {...props}
      class="bg-gradient-to-r from-primary-darker to-green-900 p-4 text-white font-semibold rounded-2xl w-full focus:outline-none hover:shadow"
    />
  );
};

export default Button;
