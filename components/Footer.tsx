export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-between border-t py-4 text-center sm:mb-4 sm:flex-row">
      <p>
        Powered by{" "}
        <a
          href="https://openai.com/blog/chatgpt"
          target="_blank"
          rel="noreferrer"
          className="font-bold underline-offset-2 transition hover:underline"
        >
          ChatGPT{" "}
        </a>
        and{" "}
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noreferrer"
          className="font-bold underline-offset-2 transition hover:underline"
        >
          Vercel Edge Functions.
        </a>
      </p>
    </footer>
  );
}
