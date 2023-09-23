"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Redirect({ to }) {
    const router = useRouter();
    useEffect(() => {
        router.push(to);
    }, []);
}
