import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/inertia-react";
import PermissionList from "./Partials/PermissionList";
import toast, { Toaster } from 'react-hot-toast';

export default function Index({ auth, permissions }) {
    const {flash} = usePage().props
    console.log(flash.success)
    useEffect(() => {
        if (flash.success !== null) {
            toast.success(flash.success)
        }
        if (flash.error !== null) {
            toast.error(flash.error)
        }
    }, [])

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Permission
                </h2>
            }
        >

            <div><Toaster /></div>
            <Head title="Permissions" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <PermissionList items={permissions} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
