import { Metadata } from "next"

export async function generateMetadata() {
    return {
        title: "About",

    }
}

export default function Page() {
    return <div>About</div>
}