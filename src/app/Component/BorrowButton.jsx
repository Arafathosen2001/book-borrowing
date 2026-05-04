"use client"
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const BorrowButton = () => {
    const router = useRouter();
    const { data: session, status, isPending } = authClient.useSession();
    const users = session?.user;
    const handelButton = () => {
        if (!users) {
            toast.error("Please login first");
            router.push("/login");
            return;
        }
        toast.success("This Book is Borrow Successfully");
    }
    return (
        <button onClick={() => handelButton()} className="btn btn-secondary">Borrow Now</button>
    );
};

export default BorrowButton;