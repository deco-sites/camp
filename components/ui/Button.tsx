const Button = (props: { children: any }) => {
  return (
    <a
      {...props}
      class="bg-gradient-to-r block text-center from-primary-darker to-green-900 p-4 text-white font-semibold rounded-2xl w-full focus:outline-none hover:shadow"
    />
  );
};

export default Button;
