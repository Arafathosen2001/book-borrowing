"use client";
import { authClient } from '@/lib/auth-client';
// import { Paperclip } from "@gravity-ui/icons";
import { Button, Description, FieldError, Spinner } from '@heroui/react';
import React, { useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { Input, Label, Modal, Surface, TextField } from "@heroui/react";
import Modale from '../Component/Modale';

const ProfilePage = () => {
    const { data: session, status, isPending } = authClient.useSession();
    const users = session?.user;
    const [isLoading, setLoading] = useState(false);
    const [isEditing, setEdting] = useState(false);

    const handlePress = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };
    const handleEdit = () => {
        setEdting((prev) => false);
    };
    return (
        <div className='my-24'>
            <div className="mx-auto card bg-base-100 md:w-96 w-full shadow-sm">
            <h1 className='text-2xl font-semibold text-center'>Your Profile</h1>
                <div className="relative">
                    <figure className=''>
                        <div className="bg-secondary h-48 w-full rounded-t-lg">

                        </div>
                    </figure>
                    <div className="absolute bottom-0 left-[35%] w-[100px] h-[100px]"><img className='rounded-full w-full h-full' src={users?.image} alt="" /></div>
                </div>
                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <h2 className="card-title">Name: {users?.name}</h2>

                        <Modale handleEdit={handleEdit} isLoading={isLoading} handlePress={handlePress} isEditing={isEditing}></Modale>

                    </div>
                    {/* <input type="text" placeholder={users?.name} className="input" disabled={!isEditing} /> */}
                    
                        <input
                            type="text"
                            value={users?.name || ""}
                            className="input"
                            disabled={!isEditing}
                        />
                        <input type="email" value={users?.email || ""} className="input" disabled={!isEditing} />
                        <input type="text" value={users?.image || ""} className="input" disabled={!isEditing} />
                   
                    
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;