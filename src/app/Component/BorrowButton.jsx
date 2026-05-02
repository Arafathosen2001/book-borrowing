"use client"
import { authClient } from "@/lib/auth-client";

const BorrowButton = () => {
    const { data: session, status, isPending } = authClient.useSession();
    const users = session?.user;
    const handelButton = () => {
        if (!users) {
            alert("Please login first");
            router.push("/login");
            return;
        }
        alert("Borrowed is ok");
    }
    return (
        <button onClick={() => handelButton()} className="btn btn-primary">Borrow Now</button>
    );
};

export default BorrowButton;