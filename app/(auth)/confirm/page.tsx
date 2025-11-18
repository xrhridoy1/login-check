
import ConfirmPage from "@/components/confirmPage/ConfirmPage";
import { Suspense } from "react";

export const dynamic = "force-dynamic"; 

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ConfirmPage />
        </Suspense>
    );
}