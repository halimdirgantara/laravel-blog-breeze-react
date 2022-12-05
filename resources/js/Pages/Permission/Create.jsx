import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, Link } from "@inertiajs/inertia-react";
import PermissionForm from "./Partials/PermissionForm";
import BackButton from "@/Components/BackButton";
import toast, { Toaster } from 'react-hot-toast';
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

export default function Index({ auth, permissions }) {
    const { flash } = usePage().props
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
            <Head title="Create Permission" />
            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <Link href={route("permissions.index")}>

                        <div className="flex items-center justify-start mt-4 mb-4">
                            <BackButton className="">
                                Back
                            </BackButton>
                        </div>
                    </Link>
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight mb-5">
                            Create Permission
                        </h2>
                        <PermissionForm />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
