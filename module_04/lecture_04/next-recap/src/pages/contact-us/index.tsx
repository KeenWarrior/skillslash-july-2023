import Link from "next/link";
import members from "../../data/members";

export default function ContactUsPage({ members }: { members: Array<any> }) {
  return (
    <>
      <h1>Contact Us Page</h1>
      <button>
        <Link href="/contact-us/phone">Call us</Link>
      </button>

      <button>
        <Link href="/">Home</Link>
      </button>

      <ul>
        {members.map((member) => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>
    </>
  );
}

export function getStaticProps() {

    console.log('Hello from getStaticProps');  

  return {
    props: {
      members,
    },
  };
}
