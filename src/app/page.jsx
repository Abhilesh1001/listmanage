import Link from "next/link";

export const metadata = {
  title : 'Home : Work Manager'

}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-blue-700 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Task Manager</h1>
        <p className="text-lg mb-6">Task Manager is a simple application designed to help you organize your tasks efficiently.</p>
        <p className="text-lg mb-6">With Task Manager, you can:</p>
        <ul className="text-lg mb-6">
          <li>Add new tasks with descriptions.</li>
          <li>View your tasks in a list.</li>
          <li>Delete tasks when they are completed or no longer needed.</li>
        </ul>
        <p className="text-lg mb-6">Task Manager is built using Next.js and Tailwind CSS, providing a seamless and interactive user experience.</p>
          <Link href={'/profile/user'} className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-full font-bold text-lg transition duration-300 ease-in-out">Go back to Profile Page</Link>

      </div>
    </div>
  );
}
