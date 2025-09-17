import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <Link href="/">
        <div>Home</div>
      </Link>
      <Link href="/todolist">
        <div>TodoList</div>
      </Link>
      <Link href="/new-todo">
        <div>new-todo</div>
      </Link>
    </div>
  );
};

export default Header;
