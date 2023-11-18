import Link from "next/link";

export default function ContactUsPage() {
  return (
    <>
      <h1>Contact Us Page</h1>
      <button>
        <Link href="/contact-us/phone">Call us</Link>
      </button>

      <button>
        <Link href="/">Home</Link>
      </button>
    </>
  );
}
