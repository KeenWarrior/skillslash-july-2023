import ImagePicker from "@/components/ImagePicker";
import { Suspense } from "react";

export default function CreatePost() {
    return (
        <div>
        <h1>Create Post</h1>
        <Suspense fallback={<div>Loading...</div>}>
            <ImagePicker />
        </Suspense>
        </div>
    );
}