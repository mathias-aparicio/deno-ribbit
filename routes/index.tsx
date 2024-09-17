export default function Home() {
  return (
    <div class="min-h-screen bg-[#F0F0F0] flex flex-col items-center">
      <div class="flex flex-col justify-center items-center w-full">
        <div class="flex flex-row justify-center items-center p-6 text-[#4caf50] text-6xl font-bold font-fredoka drop-shadow-2xl">
          Ribbit
        </div>
        <a
          href="http://localhost:8000/sign_up"
          class="mt-4 inline-block px-6 py-2 bg-[#4caf50] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Sign up page
        </a>
      </div>
    </div>
  );
}
